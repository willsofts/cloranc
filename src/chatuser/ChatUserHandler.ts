import { KnModel } from "@willsofts/will-db";
import { HTTP } from "@willsofts/will-api";
import { KnContextInfo, KnValidateInfo } from '@willsofts/will-core';
import { TknOperateHandler } from '@willsofts/will-serv';
import { CHAT_ADMIN_USER, CHAT_ADMIN_TOKEN, META_INFO, ROCKET_CHAT_URL } from "../utils/EnvironmentVariable";
import { VerifyError } from "@willsofts/will-core";
import LineByLine from "n-readlines";
import axios from 'axios';

export interface ChatUserNameInfo {
    username: string;
}

export interface ChatUserInfo extends ChatUserNameInfo {
    email: string;
    name: string;
    password: string;
    active: boolean;
}

export interface ChatInfo {
    success: boolean;
    [key: string]: any;
}

export class ChatUserHandler extends TknOperateHandler {
    public progid = "chatuser";
    public model : KnModel = { 
        name: "tchatuser", 
        alias: { privateAlias: this.section }, 
    }

    public getChatHost() : string {
        return META_INFO.ROCKET_HOST || ROCKET_CHAT_URL;
    }

    public async validateConfigure() : Promise<KnValidateInfo> {
        let host = this.getChatHost();
        if(!host || host.trim().length==0) {
            return { valid: false, info: "Configuration host not defined" };
        }
        if(!CHAT_ADMIN_USER || CHAT_ADMIN_USER.trim().length == 0 || !CHAT_ADMIN_TOKEN || CHAT_ADMIN_TOKEN.trim().length == 0) {
            return { valid: false, info: "Configuration admin not defined properly" };                
        }
        return { valid: true };
    }

    protected async composeUserListFromFile(context: KnContextInfo) : Promise<ChatUserInfo[]> {
        let results : ChatUserInfo[] = [];
        let file = context.params?.file;
        let filename = file;
        if(typeof file === "object") {
            filename = file.path;
        }
        if(filename && filename.trim().length>0) {
            let decoding : BufferEncoding = "utf-8";
            let lineByLine = new LineByLine(filename);
            let line;
            while(line = lineByLine.next()) {
                let text = line.toString(decoding); 
                if(text.trim().length > 0) {
                    let texts = text.split(",");
                    if(texts.length>0) {
                        //username,email,password
                        let username = texts[0];
                        let user = {
                            username: username,                         
                            name: username,
                            email: texts[1] || username+"@gmail.com", 
                            password: texts[2] || username,
                            active: true
                        };
                        results.push(user);
                    }
                }
            }
        }
        return results;
    }

    protected composeUserListFromParameter(context: KnContextInfo) : ChatUserInfo[] {
        let results : ChatUserInfo[] = [];
        let usernames = this.getParameterArray("username",context.params);
        if(usernames && usernames.length > 0) {            
            for(let usertext of usernames) {
                let userary = usertext.split(",");
                for(let username of userary) {
                    if(username && username.trim().length > 0) {
                        results.push({username: username, email: username+"@gmail.com", name: username, password: username, active: true});
                    }
                }
            }
        }
        return results;
    }

    public override async doInserting(context: KnContextInfo, model: KnModel = this.model): Promise<ChatInfo | ChatInfo[]> {
        let users = await this.composeUserListFromFile(context);
        if(!users || users.length == 0) users = this.composeUserListFromParameter(context);
        return this.performInserting(users);
    }

    public async performInserting(users: ChatUserInfo[]): Promise<ChatInfo | ChatInfo[]> {
        let vi = await this.validateConfigure();
        if(!vi.valid) {
            return Promise.reject(new VerifyError(""+vi.info,HTTP.NOT_ACCEPTABLE,-16086));
        }
        let result = { success: false };
        if(users && users.length > 0) {
            let results : ChatInfo[] = [];
            for(let user of users) {
                try {                
                    let response = await this.createChatUser(user);
                    results.push(response);
                } catch(ex: any) {
                    this.logger.error(this.constructor.name+".performInserting",ex);
                    results.push(ex.response ? ex.response.data : { success: false, error: ex.message });
                }
            }
            return results;
        }
        return result;
    }

    public override async doRemoving(context: KnContextInfo, model: KnModel = this.model): Promise<ChatInfo | ChatInfo[]> {
        let users = await this.composeUserListFromFile(context);
        if(!users || users.length == 0) users = this.composeUserListFromParameter(context);
        return this.performRemoving(users);
    }

    public async performRemoving(users: ChatUserNameInfo[]): Promise<ChatInfo | ChatInfo[]> {
        let vi = await this.validateConfigure();
        if(!vi.valid) {
            return Promise.reject(new VerifyError(""+vi.info,HTTP.NOT_ACCEPTABLE,-16086));
        }
        let result = { success: false };
        if(users && users.length > 0) {
            let results : ChatInfo[] = [];
            for(let user of users) {
                try {                
                    let response = await this.deleteChatUser(user);
                    results.push(response);
                } catch(ex: any) {
                    this.logger.error(this.constructor.name+".performRemoving",ex);
                    results.push(ex.response ? ex.response.data : { success: false, error: ex.message });
                }
            }
            return results;
        }
        return result;
    }

    public async createChatUser(user: ChatUserInfo) : Promise<ChatInfo> {
        const headers = { 'X-User-Id': CHAT_ADMIN_USER, 'X-Auth-Token': CHAT_ADMIN_TOKEN };
        let chathost = this.getChatHost();
        const response : any = await axios.post(`${chathost}/api/v1/users.create`, user, { headers });
        return response.data;
    }

    public async deleteChatUser(user: ChatUserNameInfo) : Promise<ChatInfo> {
        const headers = { 'X-User-Id': CHAT_ADMIN_USER, 'X-Auth-Token': CHAT_ADMIN_TOKEN };
        let chathost = this.getChatHost();
        const response : any = await axios.post(`${chathost}/api/v1/users.delete`, user, { headers });
        return response.data;
    }

}
