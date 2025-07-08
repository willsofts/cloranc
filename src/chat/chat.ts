import { KnModel, KnOperation } from "@willsofts/will-db";
import { KnContextInfo, KnDataTable } from '@willsofts/will-core';
import { TknOperateHandler } from '@willsofts/will-serv';
import { ChatUserHandler } from "../chatuser/ChatUserHandler";

class ChatHandler extends TknOperateHandler {
    public progid = "chat";
    public model : KnModel = { 
        name: "tchat", 
        alias: { privateAlias: this.section }, 
    }

    protected override async doExecute(context: KnContextInfo, model: KnModel) : Promise<KnDataTable> {
        if(!this.userToken) this.userToken = await this.getUserTokenInfo(context);
        let chatuser = this.userToken?.userid || context.params.username;
        if(!chatuser || chatuser.trim().length==0) {
            return this.createDataTable(KnOperation.EXECUTE, {}, {}, "chat/notfound");
        }
        let usernames = chatuser.split("@");
        let username = usernames[0];
        let userpassword = username;
        let handler = new ChatUserHandler();
        handler.obtain(this.broker,this.logger);
        try {
            let user = await handler.getChatUser(context,{username: username});
            this.logger.debug(this.constructor.name+".doExecute: user",user);
            if(user) {
                if(user.success) {
                    userpassword = user.userpassword;
                } else {
                    return this.createDataTable(KnOperation.EXECUTE, {}, {}, "chat/notfound");
                }
            }
        } catch(ex: any) {
            this.logger.error(this.constructor.name+".doExecute:",ex);
            return this.createDataTable(KnOperation.EXECUTE, {}, {}, "chat/notfound");
        }
        let ds = { username: username, userpassword: userpassword };
        this.logger.debug(this.constructor.name+".doExecute: ds",ds);
        return this.createDataTable(KnOperation.EXECUTE, ds, {}, "chat/chat");
    }

}

export = new ChatHandler();
