import { KnModel, KnOperation, KnActionQuery, KnPageSetting } from "@willsofts/will-db";
import { KnSQLInterface, KnSQL, KnDBConnector, KnRecordSet } from "@willsofts/will-sql";
import { Utilities } from "@willsofts/will-util";
import { HTTP } from "@willsofts/will-api";
import { TknOperateHandler, OPERATE_HANDLERS } from "@willsofts/will-serv";
import { VerifyError, KnContextInfo, KnDataTable, KnValidateInfo, KnUtility } from "@willsofts/will-core";

export class Sftq003Handler extends TknOperateHandler {

    public progid = "sftq003";
    public model : KnModel = { 
        name: "trxlog", 
        alias: { privateAlias: this.section }, 
        fields: {
            keyid: { type: "STRING", key: true },
            editdate: { type: "DATE" },
            edittime: { type: "TIME" },
            transtime: { type: "DATETIME" },
            owner: { type: "STRING" },
            sender: { type: "STRING" },
            trxstatus: { type: "STRING" },
            quotable: { type: "STRING" },
            refer: { type: "STRING" },
            package: { type: "STRING" },
            grouper: { type: "STRING" },
            note: { type: "STRING" },
            remark: { type: "STRING" },
            contents: { type: "STRING" },
            statusname: { type: "STRING", calculated: true },
        },
        //prefix naming with table name when select ex. table.column1,table.column2,...
        prefixNaming: true
    };
    public handlers = OPERATE_HANDLERS.concat([ {name: "resend"} ]);

    public async resend(context: KnContextInfo) : Promise<KnRecordSet> {
        return this.callFunctional(context, {operate: "resend", raw: false}, this.doResend);
    }

    protected override validateRequireFields(context: KnContextInfo, model: KnModel, action: string) : Promise<KnValidateInfo> {
        let vi = this.validateParameters(context.params,"keyid");
        if(!vi.valid) {
            return Promise.reject(new VerifyError("Parameter not found ("+vi.info+")",HTTP.NOT_ACCEPTABLE,-16061));
        }
        return Promise.resolve(vi);
    }

    private appendSelect(knsql: KnSQLInterface, counting: boolean, isEnglish: boolean) {
        if (counting) return;
        knsql.append(isEnglish ? ",tconstant.nameen as statusname " : ",tconstant.nameth as statusname ");
    }

    private appendJoin(knsql: KnSQLInterface, counting: boolean) {
        if (!counting) {
            knsql.append(" left join tconstant on tconstant.typename = 'trxstatus' and tconstant.typeid = trxlog.trxstatus ");   
        }
    }

    private buildConditions(params: any, model: KnModel, knsql: KnSQLInterface): string[] {
        const conditions: string[] = [];
        if(Utilities.hasValue(params.datefrom)) {
            let fromdate = Utilities.parseDate(params.datefrom);
            if(fromdate) {
                conditions.push(model.name+".editdate >= ?datefrom ");                
                knsql.set("datefrom",fromdate);
            }
        }
        if(Utilities.hasValue(params.dateto)) {
            let todate = Utilities.parseDate(params.dateto);
            if(todate) {
                conditions.push(model.name+".editdate <= ?dateto ");
                knsql.set("dateto",todate);
            }
        }
        if(Utilities.hasValue(params.trxstatus)) {
            conditions.push(model.name+".trxstatus = ?trxstatus ");
            knsql.set("trxstatus",params.trxstatus);
        }
        if(Utilities.hasValue(params.owner)) {
            conditions.push(model.name+".owner LIKE ?owner ");
            knsql.set("owner","%"+params.owner+"%");
        }
        if(Utilities.hasValue(params.quotable)) {
            conditions.push(model.name+".quotable LIKE ?quotable ");
            knsql.set("quotable","%"+params.quotable+"%");
        }
        return conditions;
    }
    
    protected override buildFiltersQuery(context: any, model: KnModel, knsql: KnSQLInterface, actions: KnActionQuery, pageSetting?: KnPageSetting) : KnSQLInterface {
        if(!this.isCollectMode(actions.action)) {
            return super.buildFiltersQuery(context, model, knsql, actions, pageSetting);
        }
        let eng = KnUtility.isEnglish(context);
        let params = context.params;
        let counting = KnOperation.COUNT==actions.subaction;
        knsql.append(actions.selector);
        this.appendSelect(knsql, counting, eng);
        knsql.append(" from ");
        knsql.append(model.name);
        this.appendJoin(knsql, counting);
        knsql.append(" where processtype = 'mail' ");
        const conditions = this.buildConditions(params, model, knsql);
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
        let settings = this.getCategorySetting(context, "tkrxstatus");
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
        let eng = KnUtility.isEnglish(context);
        let knsql = new KnSQL();
        knsql.append("select ").append(this.buildSelectField(context,model)).append(",");
        if(eng) {
            knsql.append("tconstant.nameen as statusname ");
        } else {
            knsql.append("tconstant.nameth as statusname ");
        }        
        knsql.append("from trxlog ");
        knsql.append("left join tconstant on tconstant.typename = 'trxstatus' and tconstant.typeid = trxlog.trxstatus ");
        knsql.append("where trxlog.keyid = ?keyid ");
        knsql.set("keyid",context.params.keyid);
        let rs = await knsql.executeQuery(db,context);
        return this.createRecordSet(rs);
    }

    protected override async doExecute(context: KnContextInfo, model: KnModel) : Promise<KnDataTable> {
        let dt = await this.doCategories(context, model);
        dt.action = KnOperation.EXECUTE;
        return dt;
    }

    public override async getDataSearch(context: KnContextInfo, model: KnModel) : Promise<KnDataTable> {
        let rs = await this.doCollecting(context, model);
        return this.createDataTable(KnOperation.COLLECT, rs, {}, "sftq003/sftq003_data");
    }
    
    public override async getDataRetrieval(context: KnContextInfo, model: KnModel) : Promise<KnDataTable> {
        let db = this.getPrivateConnector(model,context);
        try {
            let rs =  await this.performRetrieving(context, model, db);
            if(rs.rows.length>0) {
                let row = this.transformData(rs.rows[0]);
                return this.createDataTable(KnOperation.RETRIEVAL, row, {}, "sftq003/sftq003_dialog");
            }
            return this.recordNotFound();
        } catch(ex: any) {
            this.logger.error(this.constructor.name,ex);
            throw this.getDBError(ex);
		} finally {
			this.closeConnector(db,context);
        }
    }

    public async getDataView(context: KnContextInfo, model: KnModel) : Promise<KnDataTable> {
        let dt = await this.getDataRetrieval(context, model);
        dt.renderer = "sftq003/sftq003_dialog_refer";
        return dt;
    }

    public async doResend(context: KnContextInfo, model: KnModel) : Promise<KnRecordSet> {
        let db = this.getPrivateConnector(model,context);
        try {
            let rs = await this.performRetrieving(context, model, db);
            if(rs && rs.rows.length>0) {
                let row = rs.rows[0];
                let info = {email: row.owner, subject: row.quotable, message: row.contents, refer: context.params.keyid, package: row.package, note: row.note, grouper: row.grouper};
                this.mailing(context, info);
                return rs;
            }
            return this.recordNotFound();
        } catch(ex: any) {
            this.logger.error(this.constructor.name,ex);
            throw this.getDBError(ex);
        } finally {
            this.closeConnector(db,context);
        }
    }

}
