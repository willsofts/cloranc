import KnService from "@willsofts/will-db";
import { ServiceSchema } from "moleculer";
import { TknSigninHandler } from "@willsofts/will-serv";

const SigninService : ServiceSchema = {
    name: "sign",
    mixins: [KnService],
    handler: new TknSigninHandler(), 
}
export = SigninService;

