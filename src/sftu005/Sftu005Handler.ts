import { KnModel, KnOperation } from "@willsofts/will-db";
import { KnContextInfo, KnDataTable } from '@willsofts/will-core';
import { TknOperateHandler } from '@willsofts/will-serv';

export class Sftu005Handler extends TknOperateHandler {
    public progid = "sftu005";
    public model: KnModel = {
        name: "tmonitor",
        alias: { privateAlias: this.section },
        fields: {
            name: { type: "STRING", key: true },
            status: { type: "STRING" },
            lastAccess: { type: "BIGINT" },
        }
    };

    public override async getDataSearch(context: KnContextInfo, model: KnModel): Promise<KnDataTable> {
        let services: any[] = [];
        try {
            services = await this.call("monitor.services", {});
        } catch (e) {
            this.logger.error(this.constructor.name,"getDataSearch error:", e);
        }
        return this.createDataTable(KnOperation.COLLECT, { rows: services }, {}, "sftu005/sftu005_data");
    }

    protected override async doExecute(context: KnContextInfo, model: KnModel = this.model) : Promise<KnDataTable> {
        let services: any[] = [];
        try {
            services = await this.call("monitor.services", {});
        } catch (e) {
            this.logger.error(this.constructor.name,"doExecute:", e);
        }
        return this.createDataTable(KnOperation.EXECUTE, { rows: services }, {});
    }

    public override async doList(context: KnContextInfo): Promise<KnDataTable> {
        return this.doExecute(context);
    }

}
