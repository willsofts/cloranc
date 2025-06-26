import { KnModel, KnOperation } from "@willsofts/will-db";
import { HTTP } from "@willsofts/will-api";
import { KnContextInfo, KnDataTable } from '@willsofts/will-core';
import { TknOperateHandler } from '@willsofts/will-serv';
import { VerifyError } from "@willsofts/will-core";
import { NOTIFY_USER } from "../utils/EnvironmentVariable";

class NotifyHandler extends TknOperateHandler {
    public progid = "notify";
    public model : KnModel = { 
        name: "tnotify", 
        alias: { privateAlias: this.section }, 
    }

    protected override async doExecute(context: KnContextInfo, model: KnModel) : Promise<KnDataTable> {
        if(!this.userToken) this.userToken = await this.getUserTokenInfo(context);
        let notiuser = this.userToken?.userid || context.params.username || NOTIFY_USER;
        if(!notiuser || notiuser.trim().length==0) {
            return Promise.reject(new VerifyError("User not found",HTTP.NOT_ACCEPTABLE,-16084));
        }
        let usernames = notiuser.split("@");
        let username = usernames[0];
        let ds = { username: username, tokenkey: this.getTokenKey(context) };
        this.logger.debug(this.constructor.name+".doExecute: ds",ds);
        return this.createDataTable(KnOperation.EXECUTE, ds, {}, "notify/notify");
    }

}

export = new NotifyHandler();
