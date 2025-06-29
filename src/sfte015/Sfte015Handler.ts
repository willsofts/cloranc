import { KnModel, KnOperation } from "@willsofts/will-db";
import { KnDBConnector, KnSQLInterface, KnRecordSet, KnSQL, KnResultSet } from "@willsofts/will-sql";
import { HTTP } from "@willsofts/will-api";
import { KnValidateInfo, KnContextInfo, KnDataTable } from '@willsofts/will-core';
import { VerifyError } from '@willsofts/will-core';
import { KnPageUtility } from '@willsofts/will-core';
import { KnUtility } from '@willsofts/will-core';
import { TknOperateHandler } from '@willsofts/will-serv';

export class Sfte015Handler extends TknOperateHandler {

    public progid = "sfte015";
    public model : KnModel = { 
        name: "tmessage", 
        alias: { privateAlias: this.section }, 
        fields: {
            msgcode: { type: "STRING", created: true, key: true },
            langcode: { type: "STRING", created: true, key: true },
            msgtext: { type: "STRING", created: true, updated: true },
			langtext: { type: "STRING", calculated: true }
        },
        //prefix naming with table name when select ex. table.column1,table.column2,...
        prefixNaming: true
    };

    /* try to validate fields for insert, update, delete, retrieve */
    protected override validateRequireFields(context: KnContextInfo, model: KnModel, action: string) : Promise<KnValidateInfo> {
        let vi : KnValidateInfo = {valid: true};
        let page = new KnPageUtility(this.progid, context);
        if(page.isInsertMode(action)) {
            vi = this.validateParameters(context.params,"msgcode","langcode","msgtext");
        } else {
            vi = this.validateParameters(context.params,"msgcode","langcode");
        }
        if(!vi.valid) {
            return Promise.reject(new VerifyError("Parameter not found ("+vi.info+")",HTTP.NOT_ACCEPTABLE,-16061));
        }
        return Promise.resolve(vi);
    }

    protected override buildFilterQuery(context: KnContextInfo, model: KnModel, knsql: KnSQLInterface, selector: string, action?: string, subaction?: string): KnSQLInterface {
        if(this.isCollectMode(action)) {
            let params = context.params;
            let counting = KnOperation.COUNT==subaction;
            let eng = KnUtility.isEnglish(context);
            knsql.append(selector);
            if(!counting) {
                if(eng) {
                    knsql.append(", tconstant.nameen as langtext ");
                } else {
                    knsql.append(", tconstant.nameth as langtext ");
                }
            }
            knsql.append(" from ");
            knsql.append(model.name);
            if(!counting) {
                knsql.append(" left join tconstant on tconstant.typename = 'tlanguage' and tconstant.typeid = tmessage.langcode ");
            }
            let filter = " where ";
            if(params.msgcode && params.msgcode!="") {
                knsql.append(filter).append(model.name).append(".msgcode = ?msgcode");
                knsql.set("msgcode",params.msgcode);
                filter = " and ";
            }
            if(params.langcode && params.langcode!="") {
                knsql.append(filter).append(model.name).append(".langcode = ?langcode");
                knsql.set("langcode",params.langcode);
                filter = " and ";
            }
            if(params.msgtext && params.msgtext!="") {
                knsql.append(filter).append(model.name).append(".msgtext LIKE ?msgtext");
                knsql.set("msgtext","%"+params.msgtext+"%");
                filter = " and ";
            }
            return knsql;    
        }
        return super.buildFilterQuery(context, model, knsql, selector, action, subaction);
    }

    protected override async doCategories(context: KnContextInfo, model: KnModel) : Promise<KnDataTable> {
        let db = this.getPrivateConnector(model);
        try {
            return await this.performCategories(context, model, db);
        } catch(ex: any) {
            this.logger.error(this.constructor.name,ex);
            return Promise.reject(this.getDBError(ex));
		} finally {
			if(db) db.close();
        }
    }

    protected async performCategories(context: KnContextInfo, model: KnModel, db: KnDBConnector) : Promise<KnDataTable> {
        let settings = this.getCategorySetting(context, "tklanguage");
        return await this.getDataCategories(context, db, settings);
    }

    protected override async doRetrieving(context: KnContextInfo, model: KnModel, action: string = KnOperation.RETRIEVE): Promise<KnDataTable> {
        let db = this.getPrivateConnector(model);
        try {
            let rs = await this.performRetrieving(context, model, db);
            if(rs.rows.length>0) {
                let row = this.transformData(rs.rows[0]);
                return this.createDataTable(KnOperation.RETRIEVE, row);
            }
            return this.recordNotFound();
        } catch(ex: any) {
            this.logger.error(this.constructor.name,ex);
            return Promise.reject(this.getDBError(ex));
		} finally {
			if(db) db.close();
        }
    }

    protected async performRetrieving(context: KnContextInfo, model: KnModel, db: KnDBConnector): Promise<KnRecordSet> {
        let msgcode = context.params.msgcode;
		let langcode = context.params.langcode;
        let eng = KnUtility.isEnglish(context);
        let knsql = new KnSQL();
        knsql.append("select ").append(this.buildSelectField(context,model)).append(",");
        if(eng) {
            knsql.append("tconstant.nameen as langtext ");
        } else {
            knsql.append("tconstant.nameth as langtext ");
        }
        knsql.append("from tmessage ");
        knsql.append("left join tconstant on tconstant.typename = 'tlanguage' and tconstant.typeid = tmessage.langcode ");
        knsql.append("where tmessage.msgcode = ?msgcode and tmessage.langcode = ?langcode ");
        knsql.set("msgcode",msgcode);
        knsql.set("langcode",langcode);
        let rs = await knsql.executeQuery(db,context);
        return this.createRecordSet(rs);
    }
    
    /**
     * Override for search action (return data collection)
     * @param context 
     * @param model 
     * @returns KnDataTable
     */
    public override async getDataSearch(context: KnContextInfo, model: KnModel) : Promise<KnDataTable> {
        let rs = await this.doCollecting(context, model);
        return this.createDataTable(KnOperation.COLLECT, this.createRecordSet(rs), {}, this.progid+"/"+this.progid+"_data");
    }

    /**
     * Override for retrieval action (return record not found error if not found any record)
     * @param context 
     * @param model 
     * @returns KnDataTable
     */
    public override async getDataRetrieval(context: KnContextInfo, model: KnModel) : Promise<KnDataTable> {
        let db = this.getPrivateConnector(model);
        try {
            let rs =  await this.performRetrieving(context, model, db);
            if(rs.rows.length>0) {
                let row = this.transformData(rs.rows[0]);
                let dt = await this.performCategories(context, model, db);
                return this.createDataTable(KnOperation.RETRIEVAL, row, dt.entity, this.progid+"/"+this.progid+"_dialog");
            }
            return this.recordNotFound();
        } catch(ex: any) {
            this.logger.error(this.constructor.name,ex);
            return Promise.reject(this.getDBError(ex));
		} finally {
			if(db) db.close();
        }
    }

    /**
     * Override for add new record action (prepare screen for add)
     * @param context 
     * @param model 
     * @returns KnDataTable
     */
    public override async getDataAdd(context: KnContextInfo, model: KnModel) : Promise<KnDataTable> {
        let dt = await this.doCategories(context, model);
        dt.action = KnOperation.ADD;
        dt.renderer = this.progid+"/"+this.progid+"_dialog";
		dt.dataset["langcode"] = "EN";
        return dt;
    }
    
    /* override doExecute to handle launch router when invoked from menu */
    protected override async doExecute(context: KnContextInfo, model: KnModel) : Promise<KnDataTable> {
        let dt = await this.doCategories(context, model);
        let ds = this.emptyDataSet();
        dt.action = KnOperation.EXECUTE;
        dt.dataset = ds;
		dt.dataset["langcode"] = "EN";
        return dt;
    }
    
}
