import { KnModel, KnOperation } from "@willsofts/will-db";
import { HTTP } from "@willsofts/will-api";
import { KnContextInfo, KnDataTable } from '@willsofts/will-core';
import { TknOperateHandler } from '@willsofts/will-serv';
import { CHAT_USER, CHAT_PASSWORD } from "../utils/EnvironmentVariable";
import { VerifyError } from "@willsofts/will-core";

class ChatHandler extends TknOperateHandler {
    public progid = "chat";
    public model : KnModel = { 
        name: "tchat", 
        alias: { privateAlias: this.section }, 
    }

    protected override async doExecute(context: KnContextInfo, model: KnModel) : Promise<KnDataTable> {
        if(!this.userToken) this.userToken = await this.getUserTokenInfo(context);
        let chatuser = this.userToken?.userid || CHAT_USER;
        if(!chatuser || chatuser.trim().length==0) {
            return Promise.reject(new VerifyError("User not found",HTTP.NOT_ACCEPTABLE,-16084));
        }
        let usernames = chatuser.split("@");
        let username = usernames[0];
        let userpassword = CHAT_PASSWORD || username;
        let ds = { username: username, userpassword: userpassword };
        this.logger.debug(this.constructor.name+".doExecute: ds",ds);
        return this.createDataTable(KnOperation.EXECUTE, ds, {}, "chat/chat");
    }

}

export = new ChatHandler();
