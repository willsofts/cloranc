import { KnModel, KnOperation, KnActionQuery, KnPageSetting } from "@willsofts/will-db";
import { KnDBConnector, KnSQLInterface, KnRecordSet, KnSQL } from "@willsofts/will-sql";
import { HTTP } from "@willsofts/will-api";
import { VerifyError, KnValidateInfo, KnContextInfo, KnDataTable, KnPageUtility, KnUtility } from '@willsofts/will-core';
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
        let page = new KnPageUtility(this.progid, context);
        const vi = page.isInsertMode(action)
            ? this.validateParameters(context.params,"msgcode","langcode","msgtext")
            : this.validateParameters(context.params,"msgcode","langcode");        
        if(!vi.valid) {
            return Promise.reject(new VerifyError("Parameter not found ("+vi.info+")",HTTP.NOT_ACCEPTABLE,-16061));
        }
        return Promise.resolve(vi);
    }

    protected override buildFiltersQuery(context: any, model: KnModel, knsql: KnSQLInterface, actions: KnActionQuery, pageSetting?: KnPageSetting) : KnSQLInterface {
        if(!this.isCollectMode(actions.action)) {
            return super.buildFiltersQuery(context, model, knsql, actions, pageSetting);
        }
        let conditions : string[] = [];
        let params = context.params;
        let counting = KnOperation.COUNT==actions.subaction;
        let eng = KnUtility.isEnglish(context);
        knsql.append(actions.selector);
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
        if(params.msgcode && params.msgcode!="") {
            conditions.push(model.name+".msgcode = ?msgcode");
            knsql.set("msgcode",params.msgcode);
        }
        if(params.langcode && params.langcode!="") {
            conditions.push(model.name+".langcode = ?langcode");
            knsql.set("langcode",params.langcode);
        }
        if(params.msgtext && params.msgtext!="") {
            conditions.push(model.name+".msgtext LIKE ?msgtext");
            knsql.set("msgtext","%"+params.msgtext+"%");
        }
        if (conditions.length > 0) {
            knsql.append(" where ").append(conditions.join(" and "));
        }
        return knsql;    
    }

    protected override async doCategories(context: KnContextInfo, model: KnModel) : Promise<KnDataTable> {
        let db = this.getPrivateConnector(model,context);
        try {
            return await this.performCategories(context, model, db);
        } catch(ex: any) {
            this.logger.error(this.constructor.name,ex);
            throw this.getDBError(ex);
		} finally {
			this.closeConnector(db,context);
        }
    }

    protected async performCategories(context: KnContextInfo, model: KnModel, db: KnDBConnector) : Promise<KnDataTable> {
        let settings = this.getCategorySetting(context, "tklanguage");
        return await this.getDataCategories(context, db, settings);
    }

    protected override async doRetrieving(context: KnContextInfo, model: KnModel, action: string = KnOperation.RETRIEVE): Promise<KnDataTable> {
        let db = this.getPrivateConnector(model,context);
        try {
            let rs = await this.performRetrieving(context, model, db);
            if(rs.rows.length>0) {
                let row = this.transformData(rs.rows[0]);
                return this.createDataTable(KnOperation.RETRIEVE, row);
            }
            return this.recordNotFound();
        } catch(ex: any) {
            this.logger.error(this.constructor.name,ex);
            throw this.getDBError(ex);
		} finally {
			this.closeConnector(db,context);
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
        let db = this.getPrivateConnector(model,context);
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
            throw this.getDBError(ex);
		} finally {
			this.closeConnector(db,context);
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
