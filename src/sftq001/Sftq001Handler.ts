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

    protected override buildFiltersQuery(context: any, model: KnModel, knsql: KnSQLInterface, actions: KnActionQuery, pageSetting?: KnPageSetting) : KnSQLInterface {
        if(this.isCollectMode(actions.action)) {
            let params = context.params;
            let counting = KnOperation.COUNT==actions.subaction;
            knsql.append(actions.selector);
            if(!counting) {
                knsql.append(", tprog.progname ");
                knsql.append(", tuser.username ");
            }
            knsql.append(" from ");
            knsql.append(model.name);
            if(!counting) {
                knsql.append(" left join tprog on tprog.programid = ").append(model.name).append(".progid ");    
            }
            if(params.userid && params.userid!="") {
                knsql.append(" join tuser on tuser.userid = ").append(model.name).append(".userid ");    
                knsql.append("and tuser.username LIKE ?username ");
                knsql.set("username","%"+params.userid+"%");
            } else {
                knsql.append(" left join tuser on tuser.userid = ").append(model.name).append(".userid ");    
            }
            let filter = " where ";
            /*
            if(params.userid && params.userid!="") {
                knsql.append(filter).append("( ").append(model.name).append(".userid LIKE ?userid ");
                knsql.append("or ").append(model.name).append(".useralias LIKE ?useralias ) ");
                knsql.set("userid","%"+params.userid+"%");
                knsql.set("useralias","%"+params.userid+"%");
                filter = " and ";
            }
            */
            if(params.progid && params.progid!="") {
                knsql.append(filter).append(model.name).append(".progid LIKE ?progid");
                knsql.set("progid","%"+params.progid+"%");
                filter = " and ";
            }
            if(params.datefrom && params.datefrom!="") {
                let fromdate = Utilities.parseDate(params.datefrom);
                if(fromdate) {
                    knsql.append(filter).append(model.name).append(".curtime >= ?datefrom ");                
                    knsql.set("datefrom",fromdate);
                    filter = " and ";
                }
            }
            if(params.dateto && params.dateto!="") {
                let todate = Utilities.parseDate(params.dateto+" 23:59:59");
                if(todate) {
                    knsql.append(filter).append(model.name).append(".curtime <= ?dateto ");
                    knsql.set("dateto",todate);
                    filter = " and ";
                }
            }
            return knsql;    
        }
        return super.buildFiltersQuery(context, model, knsql, actions, pageSetting);
    }

    public override async getDataSearch(context: KnContextInfo, model: KnModel) : Promise<KnDataTable> {
        let rs = await this.doCollecting(context, model);
        return this.createDataTable(KnOperation.COLLECT, rs, {}, "sftq001/sftq001_data");
    }
    
}
