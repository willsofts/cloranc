import { KnModel, KnOperation } from "@willsofts/will-db";
import { HTTP } from "@willsofts/will-api";
import { KnContextInfo, KnValidateInfo } from '@willsofts/will-core';
import { TknOperateHandler } from '@willsofts/will-serv';
import { CHAT_ADMIN_USER, CHAT_ADMIN_TOKEN, META_INFO, ROCKET_CHAT_URL } from "../utils/EnvironmentVariable";
import { VerifyError } from "@willsofts/will-core";
import { PasswordLibrary } from "@willsofts/will-lib";
import { KnDBConnector, KnSQL, KnResultSet, KnRecordSet } from "@willsofts/will-sql";
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
        fields: {
            username: { type: "STRING", key: true },
            userpassword: { type: "STRING" },
        }
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

    public createNewPassword() : string {
        return PasswordLibrary.createNewPassword();
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
                            password: texts[2] || this.createNewPassword(),
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
                        results.push({
                            username: username, 
                            email: username+"@gmail.com", 
                            name: username, 
                            password: this.createNewPassword(), 
                            active: true
                        });
                    }
                }
            }
        }
        return results;
    }

    public override async doInserting(context: KnContextInfo, model: KnModel = this.model): Promise<ChatInfo | ChatInfo[]> {
        let users = await this.composeUserListFromFile(context);
        if(!users || users.length == 0) users = this.composeUserListFromParameter(context);
        return this.performInserting(context,users,model);
    }

    public async performInserting(context: KnContextInfo, users: ChatUserInfo[], model: KnModel = this.model): Promise<ChatInfo | ChatInfo[]> {
        let vi = await this.validateConfigure();
        if(!vi.valid) {
            return Promise.reject(new VerifyError(""+vi.info,HTTP.NOT_ACCEPTABLE,-16086));
        }
        let result = { success: false };
        if(users && users.length > 0) {
            let results : ChatInfo[] = [];
            let db = this.getPrivateConnector(model);
            try {
                for(let user of users) {
                    let reply : ChatInfo;
                    try {                
                        let response = await this.createChatUser(user);
                        response.username = user.username;
                        results.push(response);
                        reply = response;
                    } catch(ex: any) {
                        this.logger.error(this.constructor.name+".performInserting",ex);
                        reply = ex.response ? { ...ex.response.data, username: user.username } : { success: false, username: user.username, error: ex.message };
                        results.push(reply);
                    }
                    try {
                        if(reply.success) {
                            await this.insertChatUser(context,db,user);
                        }
                    } catch(ex: any) {
                        this.logger.error(this.constructor.name+".performInserting",ex);
                    }
                }
            } catch(ex: any) {
                this.logger.error(this.constructor.name,ex);
            } finally {
                if(db) db.close();
            }
            return results;
        }
        return result;
    }

    public override async doRemoving(context: KnContextInfo, model: KnModel = this.model): Promise<ChatInfo | ChatInfo[]> {
        let users = await this.composeUserListFromFile(context);
        if(!users || users.length == 0) users = this.composeUserListFromParameter(context);
        return this.performRemoving(context,users,model);
    }

    public async performRemoving(context: KnContextInfo, users: ChatUserNameInfo[], model: KnModel = this.model): Promise<ChatInfo | ChatInfo[]> {
        let vi = await this.validateConfigure();
        if(!vi.valid) {
            return Promise.reject(new VerifyError(""+vi.info,HTTP.NOT_ACCEPTABLE,-16086));
        }
        let result = { success: false };
        if(users && users.length > 0) {
            let results : ChatInfo[] = [];
            let db = this.getPrivateConnector(model);
            try {
                for(let user of users) {
                    let reply : ChatInfo;
                    try {                
                        let response = await this.deleteChatUser(user);
                        response.username = user.username;
                        results.push(response);
                        reply = response;
                    } catch(ex: any) {
                        this.logger.error(this.constructor.name+".performRemoving",ex);
                        reply = ex.response ? { ...ex.response.data, username: user.username } : { success: false, username: user.username, error: ex.message };
                        results.push(reply);
                    }
                    try {
                        if(reply.success) {
                            await this.removeChatUser(context,db,user);
                        }
                    } catch(ex: any) {
                        this.logger.error(this.constructor.name+".performRemoving",ex);
                    }
                }
            } catch(ex: any) {
                this.logger.error(this.constructor.name,ex);
            } finally {
                if(db) db.close();
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
        const response : any = await axios.post(`${chathost}/api/v1/users.delete`, { username: user.username }, { headers });
        return response.data;
    }

    public async insertChatUser(context: KnContextInfo, db: KnDBConnector, user: ChatUserInfo) : Promise<KnResultSet> {
        let knsql = new KnSQL();
        knsql.append("insert into tchatuser (username,userpassword) values(?username,?userpassword) ");
        knsql.set("username",user.username);
        knsql.set("userpassword",user.password);
        return await knsql.executeUpdate(db,context);
    }

    public async removeChatUser(context: KnContextInfo, db: KnDBConnector, user: ChatUserNameInfo) : Promise<KnResultSet> {
        let knsql = new KnSQL();
        knsql.append("delete from tchatuser where username = ?username ");
        knsql.set("username",user.username);
        return await knsql.executeUpdate(db,context);
    }

    public async getChatUser(context: KnContextInfo,user: ChatUserNameInfo) : Promise<ChatInfo> {
        context.params.username = user.username;
        try {
            let rs = await this.doRetrieving(context);
            if(rs.rows.length>0) {
                return { success: true, ...rs.rows[0] };
            }
        } catch(ex: any) {
            this.logger.error(this.constructor.name+".getChatUser",ex);
        }
        return { success: false };
    }

    protected override async doRetrieving(context: KnContextInfo, model: KnModel = this.model, action: string = KnOperation.RETRIEVE): Promise<KnRecordSet> {
        let db = this.getPrivateConnector(model);
        try {
            let rs = await this.performRetrieving(context, db, context.params.username);
            if(rs.rows.length>0) {
                return rs;
            }
            return this.recordNotFound();
        } catch(ex: any) {
            this.logger.error(this.constructor.name+".doRetrieving",ex);
            return Promise.reject(this.getDBError(ex));
		} finally {
			if(db) db.close();
        }
    }

    public async performRetrieving(context: KnContextInfo, db: KnDBConnector, username: string): Promise<KnRecordSet> {
        if(!username || username.trim().length == 0) return this.createRecordSet();
        let knsql = new KnSQL();
        knsql.append("select * from tchatuser ");
        knsql.append("where username = ?username ");
        knsql.set("username",username);
        let rs = await knsql.executeQuery(db,context);
        return this.createRecordSet(rs);
    }

}
