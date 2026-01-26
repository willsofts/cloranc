import { KnModel, KnOperation, KnActionQuery, KnPageSetting } from "@willsofts/will-db";
import { KnDBConnector, KnSQLInterface, KnRecordSet, KnSQL } from "@willsofts/will-sql";
import { HTTP } from "@willsofts/will-api";
import { VerifyError, KnValidateInfo, KnContextInfo, KnDataTable, KnPageUtility } from '@willsofts/will-core';
import { Utilities } from "@willsofts/will-util";
import { TknOperateHandler, OPERATE_HANDLERS, KnDataResult } from '@willsofts/will-serv';

export class Sftu003Handler extends TknOperateHandler {

    public progid = "sftu003";
    public model : KnModel = { 
        name: "api_config", 
        alias: { privateAlias: this.section }, 
        fields: {
            apiname: { type: "STRING", key: true, created: true },
            apiquery: { type: "STRING" },
            apiparams: { type: "STRING" },
            apisection: { type: "STRING", updated: true, defaultValue: null },
            inactive: { type: "STRING", created: true, defaultValue: "0" },
            createdate: { type: "DATE", created: true },
            createtime: { type: "TIME", created: true },
            createuser: { type: "STRING", created: true },
            editdate: { type: "DATE", selected: false, created: true, updated: true },
            edittime: { type: "TIME", selected: false, created: true, updated: true },
            edituser: { type: "STRING", selected: false, created: true, updated: true },
        },
        //prefix naming with table name when select ex. table.column1,table.column2,...
        prefixNaming: true
    };

    public handlers = OPERATE_HANDLERS.concat([{name: "run"}]);

    public async run(context: KnContextInfo) : Promise<any> {
        return this.callFunctional(context, {operate: "run", raw: false}, this.doRun);
    }

    /* try to assign individual parameters under this context */
    protected override async assignParameters(context: KnContextInfo, sql: KnSQLInterface, action?: string, mode?: string) {
        let now = Utilities.now();
        if(KnOperation.COLLECT!=action) {
            sql.set("createdate",now,"DATE");
            sql.set("createtime",now,"TIME");
            sql.set("createuser",this.userToken?.userid);        
        }
        sql.set("editdate",now,"DATE");
        sql.set("edittime",now,"TIME");
        sql.set("edituser",this.userToken?.userid);
    }

    /* try to validate fields for insert, update, delete, retrieve */
    protected override validateRequireFields(context: KnContextInfo, model: KnModel, action: string) : Promise<KnValidateInfo> {
        let page = new KnPageUtility(this.progid, context);
        const vi = page.isInsertMode(action)
            ? this.validateParameters(context.params,"apiname","apiquery")
            : this.validateParameters(context.params,"apiname");        
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
        knsql.append(actions.selector);
        knsql.append(" from ");
        knsql.append(model.name);
        if(params.apiname && params.apiname!="") {
            conditions.push("apiname LIKE ?apiname");
            knsql.set("apiname","%"+params.apiname+"%");
        }
        if(params.fromdate && params.fromdate!="") {
            let fromdate = Utilities.parseDate(params.fromdate);
            if(fromdate) {
                conditions.push("createdate >= ?fromdate");
                knsql.set("fromdate",fromdate);
            }
        }
        if(params.todate && params.todate!="") {
            let todate = Utilities.parseDate(params.todate);
            if(todate) {
                conditions.push("createdate <= ?todate");
                knsql.set("todate",todate);
            }
        }
        if(params.inactive && params.inactive!="") {
            conditions.push("inactive = ?inactive");
            knsql.set("inactive",params.inactive);
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
			try { this.closeConnector(db,context); } catch(error) { console.error(error); }
        }
    }

    protected async performCategories(context: KnContextInfo, model: KnModel, db: KnDBConnector) : Promise<KnDataTable> {
        let settings = this.getCategorySetting(context, "tkactive");
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
			try { this.closeConnector(db,context); } catch(error) { console.error(error); }
        }
    }

    protected async performRetrieving(context: KnContextInfo, model: KnModel, db: KnDBConnector): Promise<KnRecordSet> {
        let knsql = new KnSQL();
        knsql.append("select * from api_config ");
        knsql.append("where apiname = ?apiname ");
        knsql.set("apiname",context.params.apiname);
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
        return this.createDataTable(KnOperation.COLLECT, this.createRecordSet(rs), {}, "sftu003/sftu003_data");
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
                return this.createDataTable(KnOperation.RETRIEVAL, row, dt.entity, "sftu003/sftu003_dialog");
            }
            return this.recordNotFound();
        } catch(ex: any) {
            this.logger.error(this.constructor.name,ex);
            throw this.getDBError(ex);
		} finally {
			try { this.closeConnector(db,context); } catch(error) { console.error(error); }
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
        dt.renderer = "sftu003/sftu003_dialog";
        return dt;
    }

    public async doRun(context: KnContextInfo, model: KnModel) : Promise<KnDataResult> {
        let apiname = context.params.apiname;
        let apiquery = context.params.apiquery;
        if(apiname && apiname.trim().length > 0 && apiquery && apiquery.trim().length > 0) {
            let apisection = context.params.apisection;
            let db;
            if(apisection) {
                db = this.getConnector(apisection);
                delete context.params.apisection;
            } else {
                db = this.getPrivateConnector(model,context);
            }
            try {    
                delete context.params.apiname;
                delete context.params.apiquery;
                let knsql = new KnSQL();
                knsql.append(apiquery);
                for(let p in context.params) {
                    knsql.set(p,context.params[p]);
                }
                let rs = await knsql.executeQuery(db,context);
                return {name: apiname, result: this.createRecordSet(rs) };
            } catch(ex: any) {
                this.logger.error(this.constructor.name,ex);
                throw this.getDBError(ex);
            } finally {
                try { this.closeConnector(db,context); } catch(error) { console.error(error); }
            }
        }
        return {name: apiname, result: this.createRecordSet() };
    }
    
}
