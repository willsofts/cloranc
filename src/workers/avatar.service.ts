import { ServiceSchema } from "moleculer";
import fs from "fs";
import { AVATAR_IMAGE_PATH_RANDOM } from "../utils/EnvironmentVariable";

const crypto = require('crypto');

const AvatarService : ServiceSchema = {
    name: "avatar",
    actions: {
        image(ctx: any) {
            this.logger.debug("ctx",ctx);
            let userid = ctx.params.userid;
            let photoimage = ctx.params.photoimage;
            if(!userid || userid.trim().length==0) userid = "anonymous";
            let path = AVATAR_IMAGE_PATH_RANDOM || "assets/metronic/media/users";
            let directory = "./public/"+path;
            let avatar = "";
            try {
                let found = false;
                //check if photo image is exist?
                if(photoimage && photoimage.trim().length>0) {
                    let imgpath = "img/avatar";
                    let imgfile = "./public/"+imgpath+"/"+photoimage;
                    if (fs.existsSync(imgfile)) {
                        found = true;
                        avatar = "/"+imgpath+"/"+photoimage;
                    }
                }
                if(!found) {
                    //find out number of files in random directory
                    if (fs.existsSync(directory)) {
                        const files = fs.readdirSync(directory);
                        for(let file of files) {
                            if(file.indexOf(userid)>=0) {
                                found = true;
                                avatar = "/"+path+"/"+file;
                            }
                        }
                        if(!found) {
                            //try to random user image file with userid hash mod with number of files in random dir
                            if(files && files.length > 1) {
                                const hash = crypto.createHash('sha256').update(userid).digest();
                                const hint = hash.readUInt32BE(0);
                                let index = hint % files.length;
                                avatar = "/"+path+"/"+files[index];
                                found = true;
                            } else {
                                avatar = "/"+path+"/"+files[0];
                                found = true;
                            }
                        }
                    } else {
                        this.logger.error("Directory does not exist "+directory);
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
