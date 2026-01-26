import { v4 as uuid } from 'uuid';
import { KnModel } from "@willsofts/will-db";
import { KnRecordSet, KnResultSet } from "@willsofts/will-sql";
import { Sfte005Handler } from "./Sfte005Handler";
import { ChatUserInfo, ChatUserNameInfo, ChatUserHandler } from "../chatuser/ChatUserHandler";
import { CREATE_USER_UUID } from "../utils/EnvironmentVariable";

export class RocketSfte005Handler extends Sfte005Handler {

    protected override createUserId(username: string) : string {
        if(CREATE_USER_UUID) return uuid();
        //rocket chat user do not accept @ sign in user name
        return username.replaceAll("@",".");
    }

    protected override async doCreating(context: any, model: KnModel): Promise<KnResultSet> {
        let rs = await super.doCreating(context,model);
        if(rs.rows.length > 0) {
            let handler = new ChatUserHandler();
            handler.obtain(this.broker,this.logger);
            let vi = await handler.validateConfigure();
            if(vi.valid) {
                let row = rs.rows[0];
                let userid = row.userid;
                let usernames = row.username.split("@");
                let username = usernames[0];
                let email = row.email || username + (usernames[1] ? "@"+usernames[1] : "@gmail.com");
                let chatuser : ChatUserInfo = {
                    username: userid, name: username, email: email, password: handler.createNewPassword(), active: true 
                };
                handler.performInserting(context,[chatuser])
                .then(rs => this.logger.info(this.constructor.name+".doCreating",rs))
                .catch(ex => this.logger.error(ex));
            }
        }
        return rs;
    }

    protected override async doClearing(context: any, model: KnModel): Promise<KnRecordSet> {
        let rs = await super.doClearing(context,model);
        if(rs.records > 0) {
            let userid = context.params.userid;
            if(userid && userid.trim().length > 0) {
                let handler = new ChatUserHandler();
                handler.obtain(this.broker,this.logger);
                let vi = await handler.validateConfigure();
                if(vi.valid) {
                    let chatuser : ChatUserNameInfo = { username: userid };
                    handler.performRemoving(context,[chatuser])
                    .then(rs => this.logger.info(this.constructor.name+".doClearing",rs))
                    .catch(ex => this.logger.error(ex));
                }
            }
        }
        return rs;
    }

}
