import { ServiceSchema } from "moleculer";
import fs from "node:fs";
import path from "node:path";
import mime from "mime-types";
import { createCanvas } from 'canvas';
import randomColor from 'randomcolor';
import { AVATAR_IMAGE_PATH_RANDOM, AVATAR_IMAGE_BASE64, AVATAR_IMAGE_FROM_TEXT, AVATAR_IMAGE_PATH } from "../utils/EnvironmentVariable";

const crypto = require('node:crypto');

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
function findAvatarFromPhoto(photoimage?: string) {
    if (!photoimage) return null;
    const imgpath = AVATAR_IMAGE_PATH || "img/avatar";
    const photofile = path.join(".", "public", imgpath, photoimage);
    if (!fs.existsSync(photofile)) return null;
    return {
        avatar: `/${imgpath}/${photoimage}`,
        imgfile: photofile
    };
}
function findAvatarFromRandomDir(userid: string, directory: string, ranpath: string) {
    if (!fs.existsSync(directory)) return null;
    const files = fs.readdirSync(directory);
    if (!files.length) return null;
    const matched = files.find(f => f.includes(userid));
    if (matched) {
        return {
            avatar: `/${ranpath}/${matched}`,
            imgfile: path.join(directory, matched)
        };
    }
    const index = files.length > 1
        ? crypto.createHash("sha256").update(userid).digest().readUInt32BE(0) % files.length
        : 0;
    return {
        avatar: `/${ranpath}/${files[index]}`,
        imgfile: path.join(directory, files[index])
    };
}
function convertToBase64(imgfile: string) {
    const mimeType = mime.lookup(imgfile);
    const imageData = fs.readFileSync(imgfile);
    return `data:${mimeType};base64,${imageData.toString("base64")}`;
}
const AvatarService : ServiceSchema = {
    name: "avatar",
    actions: {
        image(ctx: any) {
            let userid = ctx.params.userid?.trim() || "anonymous";
            const photoimage = ctx.params.photoimage;
            const ranpath = AVATAR_IMAGE_PATH_RANDOM || "img/users";
            const directory = path.join(".","public",ranpath);
            let avatar = "";
            let imgfile = "";
            try {
                const photoResult = findAvatarFromPhoto(photoimage);
                const randomResult = photoResult ? null : findAvatarFromRandomDir(userid, directory, ranpath);
                const result = photoResult || randomResult;
                if (result) {
                    avatar = result.avatar;
                    imgfile = result.imgfile;
                }
                if (imgfile && AVATAR_IMAGE_BASE64) {
                    avatar = convertToBase64(imgfile);
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
