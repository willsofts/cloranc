import { KnModel, KnOperation } from "@willsofts/will-db";
import { KnContextInfo, KnDataTable } from '@willsofts/will-core';
import { TknOperateHandler } from '@willsofts/will-serv';
import { NOTIFY_USER, NOTIFY_TOKEN, NOTIFY_USER_DEFAULT, NOTIFY_TOKEN_DEFAULT } from "../utils/EnvironmentVariable";

class NotifyHandler extends TknOperateHandler {
    public progid = "notify";
    public model : KnModel = { 
        name: "tnotify", 
        alias: { privateAlias: this.section }, 
    }

    protected override async doExecute(context: KnContextInfo, model: KnModel) : Promise<KnDataTable> {
        if(!this.userToken) this.userToken = await this.getUserTokenInfo(context);
        let notiuser = context.params.username || NOTIFY_USER || (NOTIFY_USER_DEFAULT ? this.userToken?.userid : "");
        let usernames = notiuser.split("@");
        let username = usernames[0];
        let ds = { username: username, tokenkey: NOTIFY_TOKEN || (NOTIFY_TOKEN_DEFAULT ? this.getTokenKey(context) : "") };
        this.logger.debug(this.constructor.name+".doExecute: ds",ds);
        return this.createDataTable(KnOperation.EXECUTE, ds, {}, "notify/notify");
    }

}

export = new NotifyHandler();
