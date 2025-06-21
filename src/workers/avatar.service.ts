import { ServiceSchema } from "moleculer";
import fs from "fs";
const crypto = require('crypto');

const AvatarService : ServiceSchema = {
    name: "avatar",
    actions: {
        image(ctx: any) {
            this.logger.debug("ctx",ctx);
            let userid = ctx.params.userid;
            if(!userid || userid.trim().length==0) userid = "anonymous";
            let path = "assets/metronic/media/users";
            let directory = "./public/"+path;
            let avatar = "";
            try {
                const files = fs.readdirSync(directory);
                let found = false;
                for(let file of files) {
                    if(file.indexOf(userid)>=0) {
                        found = true;
                        avatar = "/"+path+"/"+file;
                    }
                }
                if(!found) {
                    if(files && files.length > 1) {
                        const hash = crypto.createHash('sha256').update(userid).digest();
                        const hint = hash.readUInt32BE(0);
                        let index = hint % files.length;
                        avatar = "/"+path+"/"+files[index];
                    } else {
                        avatar = "/"+path+"/"+files[0];
                    }
                }
            } catch(ex) { this.logger.error(ex); }
            ctx.meta.$responseRaw = true; 
            ctx.meta.$responseType = "application/json";    
            return { avatar };
        },
    },
};
export = AvatarService;
