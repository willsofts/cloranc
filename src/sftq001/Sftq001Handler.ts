import { KnModel, KnOperation, KnActionQuery, KnPageSetting } from "@willsofts/will-db";
import { KnSQLInterface } from "@willsofts/will-sql";
import { Utilities } from "@willsofts/will-util";
import { KnContextInfo, KnDataTable } from "@willsofts/will-core";
import { TknOperateHandler } from '@willsofts/will-serv';

export class Sftq001Handler extends TknOperateHandler {

    public progid = "sftq001";
    public model : KnModel = { 
        name: "tuserlog", 
        alias: { privateAlias: this.section }, 
        fields: {
            curtime: { type: "DATETIME" },
            userid: { type: "STRING" },
            useralias: { type: "STRING" },
            progid: { type: "STRING" },
            handler: { type: "STRING" },
            action: { type: "STRING" },
            remark: { type: "STRING" },
            progname: { type: "STRING", calculated: true },
            username: { type: "STRING", calculated: true },
        },
        //prefix naming with table name when select ex. table.column1,table.column2,...
        prefixNaming: true
    };

    private appendSelect(knsql: KnSQLInterface, counting: boolean) {
        if (counting) return;
        knsql.append(", tprog.progname ");
        knsql.append(", tuser.username ");
    }

    private appendJoin(knsql: KnSQLInterface, counting: boolean, params: any, model: KnModel) {
        if (!counting) {
            knsql.append(" left join tprog on tprog.programid = ").append(model.name).append(".progid ");    
        }
        if(Utilities.hasValue(params.userid)) {
            knsql.append(" join tuser on tuser.userid = ").append(model.name).append(".userid ");    
            knsql.append("and tuser.username LIKE ?username ");
            knsql.set("username","%"+params.userid+"%");
        } else {
            knsql.append(" left join tuser on tuser.userid = ").append(model.name).append(".userid ");    
        }
    }

    private buildConditions(params: any, model: KnModel, knsql: KnSQLInterface): string[] {
        const conditions: string[] = [];
        if(Utilities.hasValue(params.progid)) {
            conditions.push(model.name+".progid LIKE ?progid");
            knsql.set("progid","%"+params.progid+"%");
        }
        if(Utilities.hasValue(params.datefrom)) {
            let fromdate = Utilities.parseDate(params.datefrom);
            if(fromdate) {
                conditions.push(model.name+".curtime >= ?datefrom ");                
                knsql.set("datefrom",fromdate);
            }
        }
        if(Utilities.hasValue(params.dateto)) {
            let todate = Utilities.parseDate(params.dateto+" 23:59:59");
            if(todate) {
                conditions.push(model.name+".curtime <= ?dateto ");
                knsql.set("dateto",todate);
            }
        }
        return conditions;
    }

    protected override buildFiltersQuery(context: any, model: KnModel, knsql: KnSQLInterface, actions: KnActionQuery, pageSetting?: KnPageSetting) : KnSQLInterface {
        if(!this.isCollectMode(actions.action)) {
            return super.buildFiltersQuery(context, model, knsql, actions, pageSetting);
        }
        let params = context.params;
        let counting = KnOperation.COUNT==actions.subaction;
        knsql.append(actions.selector);
        this.appendSelect(knsql, counting);
        knsql.append(" from ");
        knsql.append(model.name);
        this.appendJoin(knsql, counting, params, model);
        const conditions = this.buildConditions(params, model, knsql);
        if (conditions.length > 0) {
            knsql.append(" where ").append(conditions.join(" and "));
        }
        return knsql;    
    }

    public override async getDataSearch(context: KnContextInfo, model: KnModel) : Promise<KnDataTable> {
        let rs = await this.doCollecting(context, model);
        return this.createDataTable(KnOperation.COLLECT, rs, {}, "sftq001/sftq001_data");
    }
    
}
