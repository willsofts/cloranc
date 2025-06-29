import KnService from "@willsofts/will-db";
import { ServiceSchema } from "moleculer";
import { Sfte015Handler } from "../sfte015/Sfte015Handler";

const Sfte015Service : ServiceSchema = {
    name: "sfte015",
    mixins: [KnService],
    handler: new Sfte015Handler(), 
}
export = Sfte015Service;
