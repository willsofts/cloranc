import KnService from "@willsofts/will-db";
import { ServiceSchema } from "moleculer";
import { TknCaptchaHandler } from "@willsofts/will-serv";

const CaptchaService : ServiceSchema = {
    name: "captcha",
    mixins: [KnService],
    handler: new TknCaptchaHandler(), 
}
export = CaptchaService;
