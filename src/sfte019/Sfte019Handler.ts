import { KnModel, KnOperation, KnActionQuery, KnPageSetting } from "@willsofts/will-db";
import { KnDBConnector, KnSQLInterface, KnRecordSet, KnSQL, KnResultSet } from "@willsofts/will-sql";
import { HTTP } from "@willsofts/will-api";
import { VerifyError, KnValidateInfo, KnContextInfo, KnDataTable, KnPageUtility, KnUtility } from '@willsofts/will-core';
import { Utilities } from "@willsofts/will-util";
import { TknOperateHandler } from '@willsofts/will-serv';

export class Sfte019Handler extends TknOperateHandler {

    public progid = "sfte019";
    public model : KnModel = { 
        name: "tcompbranch", 
        alias: { privateAlias: this.section }, 
        fields: {
            site: { type: "STRING", created: true, key: true },
            branch: { type: "STRING", created: true, key: true },
            branchtype: { type: "STRING", created: true, },
            nameen: { type: "STRING", created: true, updated: true },
            nameth: { type: "STRING", created: true, updated: true },
            addressen: { type: "STRING", updated: true },
            addressth: { type: "STRING", updated: true },
            gpsflag: { type: "STRING", created: true, defaultValue: "0" },
            inactive: { type: "STRING", created: true, defaultValue: "0" },
            effectdate: { type: "DATE" },
            editdate: { type: "DATE", selected: false, created: true, updated: true },
            edittime: { type: "TIME", selected: false, created: true, updated: true },
            edituser: { type: "STRING", selected: false, created: true, updated: true },
            branchtypename: { type: "STRING", calculated: true },
        },
        //prefix naming with table name when select ex. table.column1,table.column2,...
        prefixNaming: true
    };

    /* try to assign individual parameters under this context */
    protected override async assignParameters(context: KnContextInfo, sql: KnSQLInterface, action?: string, mode?: string) {
        let now = Utilities.now();
        sql.set("editdate",now,"DATE");
        sql.set("edittime",now,"TIME");
        sql.set("edituser",this.userToken?.userid);
    }

    /* try to validate fields for insert, update, delete, retrieve */
    protected override validateRequireFields(context: KnContextInfo, model: KnModel, action: string) : Promise<KnValidateInfo> {
        let page = new KnPageUtility(this.progid, context);
        const vi = page.isInsertMode(action) 
            ? this.validateParameters(context.params,"branch","nameen","nameth")
            : this.validateParameters(context.params,"branch");        
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
                knsql.append(", tconstant.nameen as branchtypename ");
            } else {
                knsql.append(", tconstant.nameth as branchtypename ");
            }
        }
        knsql.append(" from ");
        knsql.append(model.name);
        if(!counting) {
            knsql.append(" left join tconstant on tconstant.typename = 'tbranchtype' and tconstant.typeid = tcompbranch.branchtype ");
        }
        let site = context.params.site || this.userToken?.site;
        knsql.append(" where site = ?site ");
        knsql.set("site",site);
        if(params.nameen && params.nameen!="") {
            conditions.push(model.name+".nameen LIKE ?nameen");
            knsql.set("nameen","%"+params.nameen+"%");
        }
        if(params.nameth && params.nameth!="") {
            conditions.push(model.name+".nameth LIKE ?nameth");
            knsql.set("nameth","%"+params.nameth+"%");
        }
        if(params.inactive && params.inactive!="") {
            conditions.push(model.name+".inactive = ?inactive");
            knsql.set("inactive",params.inactive);
        }
        if(params.branchtype && params.branchtype!="") {
            conditions.push(model.name+".branchtype = ?branchtype");
            knsql.set("branchtype",params.branchtype);
        }
        if (conditions.length > 0) {
            knsql.append(" and ").append(conditions.join(" and "));
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
        let settings = this.getCategorySetting(context, "tkbranchtype");
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
        let site = context.params.site || this.userToken?.site;
        let eng = KnUtility.isEnglish(context);
        let knsql = new KnSQL();
        knsql.append("select ").append(this.buildSelectField(context,model)).append(",");
        if(eng) {
            knsql.append("tconstant.nameen as branchtypename ");
        } else {
            knsql.append("tconstant.nameth as branchtypename ");
        }
        knsql.append("from tcompbranch ");
        knsql.append("left join tconstant on tconstant.typename = 'tbranchtype' and tconstant.typeid = tcompbranch.branchtype ");
        knsql.append("where tcompbranch.site = ?site and tcompbranch.branch = ?branch ");
        knsql.set("site",site);
        knsql.set("branch",context.params.branch);
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
        return this.createDataTable(KnOperation.COLLECT, this.createRecordSet(rs), {}, "sfte019/sfte019_data");
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
                return this.createDataTable(KnOperation.RETRIEVAL, row, dt.entity, "sfte019/sfte019_dialog");
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
        dt.renderer = "sfte019/sfte019_dialog";
        return dt;
    }
    
    /* override doExecute to handle launch router when invoked from menu */
    protected override async doExecute(context: KnContextInfo, model: KnModel) : Promise<KnDataTable> {
        let dt = await this.doCategories(context, model);
        let ds = this.emptyDataSet();
        dt.action = KnOperation.EXECUTE;
        dt.dataset = ds;
        return dt;
    }

    protected override async doCreating(context: KnContextInfo, model: KnModel): Promise<KnResultSet> {
        let site = context.params.site;
        if(!site || site.trim().length ==0) {
            context.params.site = this.userToken?.site;
        }
        return await super.doCreating(context,model);
    }
    
}
