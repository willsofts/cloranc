import { ServiceSchema } from "moleculer";
import fs from "fs";
import path from "path";
import mime from "mime-types";
import { createCanvas } from 'canvas';
import randomColor from 'randomcolor';
import { AVATAR_IMAGE_PATH_RANDOM, AVATAR_IMAGE_BASE64, AVATAR_IMAGE_FROM_TEXT } from "../utils/EnvironmentVariable";

const crypto = require('crypto');

function generateImageFromText(text: string, width: number = 50, height: number = 50) {
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, width, height);
    const firstChar = text.charAt(0).toUpperCase();
    ctx.fillStyle = randomColor({ luminosity: 'dark' });
    ctx.font = 'bold 32px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(firstChar, width / 2, height / 2);
    return canvas.toDataURL('image/png');
}

const AvatarService : ServiceSchema = {
    name: "avatar",
    actions: {
        image(ctx: any) {
            this.logger.debug("ctx",ctx);
            let userid = ctx.params.userid;
            let photoimage = ctx.params.photoimage;
            if(!userid || userid.trim().length==0) userid = "anonymous";
            let ranpath = AVATAR_IMAGE_PATH_RANDOM || "assets/metronic/media/users";
            let directory = path.join(".","public",ranpath);
            let avatar = "";
            try {
                let found = false;
                let imgfile = "";
                //check if photo image is exist?
                if(photoimage && photoimage.trim().length>0) {
                    let imgpath = "img/avatar";
                    let photofile = path.join(".","public",imgpath,photoimage);
                    if (fs.existsSync(photofile)) {
                        found = true;
                        avatar = "/"+imgpath+"/"+photoimage;
                        imgfile = photofile;
                    }
                }
                if(!found) {
                    if (fs.existsSync(directory)) {
                        //find out number of files in random directory
                        const files = fs.readdirSync(directory);
                        for(let file of files) {
                            if(file.indexOf(userid)>=0) {
                                found = true;
                                avatar = "/"+ranpath+"/"+file;
                                imgfile = path.join(directory,file);
                            }
                        }
                        if(!found) {
                            //try to random user image file with userid hash mod with number of files in random dir
                            if(files && files.length > 1) {
                                const hash = crypto.createHash('sha256').update(userid).digest();
                                const hint = hash.readUInt32BE(0);
                                let index = hint % files.length;
                                avatar = "/"+ranpath+"/"+files[index];
                                imgfile = path.join(directory,files[index]);
                                found = true;
                            } else {
                                avatar = "/"+ranpath+"/"+files[0];
                                imgfile = path.join(directory,files[0]);
                                found = true;
                            }
                        }
                    } else {
                        this.logger.warn("Directory does not exist "+directory);
                    }
                }
                if(found && imgfile && AVATAR_IMAGE_BASE64) {
                    const mimeType = mime.lookup(imgfile);
                    const imageData = fs.readFileSync(imgfile);
                    const base64Image = imageData.toString('base64');
                    avatar = `data:${mimeType};base64,${base64Image}`;
                }
                if(!avatar && AVATAR_IMAGE_FROM_TEXT) {
                    avatar = generateImageFromText(userid);
                }
            } catch(ex) { this.logger.error(ex); }
            ctx.meta.$responseRaw = true; 
            ctx.meta.$responseType = "application/json";    
            return { avatar };
        },
    },
};

export = AvatarService;
