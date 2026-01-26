import { KnModel, KnOperation, KnActionQuery, KnPageSetting } from "@willsofts/will-db";
import { KnDBConnector, KnSQLInterface, KnRecordSet, KnSQL } from "@willsofts/will-sql";
import { HTTP } from "@willsofts/will-api";
import { TknDataTableHandler, VerifyError, KnValidateInfo, KnContextInfo, KnDataTable } from '@willsofts/will-core';
import { Utilities } from "@willsofts/will-util";
import { TknOperateHandler } from '@willsofts/will-serv';
import { IMG_URL } from "../utils/EnvironmentVariable";

export class Sfte001Handler extends TknOperateHandler {

    public progid = "sfte001";
    public model : KnModel = { 
        name: "tprog", 
        alias: { privateAlias: this.section }, 
        fields: {
            programid: { type: "STRING", key: true },
            product: { type: "STRING" },
            progname: { type: "STRING" },
            prognameth: { type: "STRING" },
            progtype: { type: "STRING" },
            appstype: { type: "STRING" },
            description: { type: "STRING", updated: true, defaultValue: null },
            parameters: { type: "STRING", updated: true, defaultValue: null },
            progsystem: { type: "STRING" },
            iconfile: { type: "STRING" },
            iconstyle: { type: "STRING" },
            shortname: { type: "STRING" },
            shortnameth: { type: "STRING" },
            progpath: { type: "STRING", updated: true, defaultValue: null },
            newflag: { type: "STRING", updated: true, defaultValue: "0" },
            openmethod: { type: "STRING", updated: true, defaultValue: null },
            editdate: { type: "DATE", selected: false, created: true, updated: true, defaultValue: null },
            edittime: { type: "TIME", selected: false, created: true, updated: true, defaultValue: null },
            edituser: { type: "STRING", selected: false, created: true, updated: true, defaultValue: null }
        },
        //prefix naming with table name when select ex. table.column1,table.column2,...
        prefixNaming: true
    };

    /* try to assign individual parameters under this context */
    protected override async assignParameters(context: KnContextInfo, sql: KnSQLInterface, action?: string, mode?: string) {
        sql.set("editdate",Utilities.now(),"DATE");
        sql.set("edittime",Utilities.now(),"TIME");
        sql.set("edituser",this.userToken?.userid);
    }

    /* try to validate fields for insert, update, delete, retrieve */
    protected override validateRequireFields(context: KnContextInfo, model: KnModel, action: string) : Promise<KnValidateInfo> {
        let vi = this.validateParameters(context.params,"programid");
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
        knsql.append(actions.selector);
        if(!counting) {
            knsql.append(", tconstant.nameen as progtypedesc ");
        }
        knsql.append(" from ");
        knsql.append(model.name);
        if(!counting) {
            knsql.append(" left join tconstant on tconstant.typename = 'tprogtype' and tconstant.typeid = tprog.progtype ");    
        }
        if(params.product && params.product!="") {
            conditions.push(model.name+".product = ?product");
            knsql.set("product",params.product);
        }
        if(params.programid && params.programid!="") {
            conditions.push(model.name+".programid LIKE ?programid");
            knsql.set("programid","%"+params.programid+"%");
        }
        if(params.progname && params.progname!="") {
            conditions.push(model.name+".progname LIKE ?progname");
            knsql.set("progname","%"+params.progname+"%");
        }
        if(params.progtype && params.progtype!="") {
            conditions.push(model.name+".progtype = ?progtype");
            knsql.set("progtype",params.progtype);
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
        let settings = this.getCategorySetting(context, "tprod", "tkappstype", "tkprogtype", "tkprogsystem");
        return await this.getDataCategories(context, db, settings);
    }

    /* override to handle launch router when invoked from menu */
    protected override async doExecute(context: KnContextInfo, model: KnModel) : Promise<KnDataTable> {
        let db = this.getPrivateConnector(model,context);
        try {
            let settings = this.getCategorySetting(context, "tkprogtype");
            let handler = new TknDataTableHandler();
            let dt = await handler.getDataCategory(db, settings, true, context);
            let ds = this.emptyDataSet();
            return this.createDataTable(KnOperation.EXECUTE, ds, dt);
        } catch(ex: any) {
            this.logger.error(this.constructor.name,ex);
            throw this.getDBError(ex);
		} finally {
			this.closeConnector(db,context);
        }
    }

    protected getIconImage(iconfile?: string) : string {
        let iconimage = IMG_URL+"/img/apps/apps.png";
        if(iconfile && iconfile.trim().length>0) {
            iconimage = IMG_URL+"/img/apps/"+iconfile;
        }
        return iconimage;
    }

    protected override async doRetrieving(context: KnContextInfo, model: KnModel, action: string = KnOperation.RETRIEVE): Promise<KnDataTable> {
        let db = this.getPrivateConnector(model,context);
        try {
            let rs = await this.performRetrieving(context, model, db);
            if(rs.rows.length>0) {
                let row = this.transformData(rs.rows[0]);
                row["iconimage"] = this.getIconImage(row.iconfile);
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
        let knsql = new KnSQL();
        knsql.append("select * from tprog where programid = ?programid ");
        knsql.set("programid",context.params.programid);
        let rs = await knsql.executeQuery(db);
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
        return this.createDataTable(KnOperation.COLLECT, this.createRecordSet(rs), {}, "sfte001/sfte001_data");
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
                row["iconimage"] = this.getIconImage(row.iconfile);
                let dt = await this.performCategories(context, model, db);
                return this.createDataTable(KnOperation.RETRIEVAL, row, dt.entity, "sfte001/sfte001_dialog");
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
        dt.renderer = "sfte001/sfte001_dialog";
        dt.dataset["iconimage"] = this.getIconImage();
        return dt;
    }

}
