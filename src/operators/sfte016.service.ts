import KnService from "@willsofts/will-db";
import { ServiceSchema } from "moleculer";
import { RocketSfte016Handler } from "../sfte016/RocketSfte016Handler";

const Sfte016Service : ServiceSchema = {
    name: "sfte016",
    mixins: [KnService],
    handler: new RocketSfte016Handler(), 
}
export = Sfte016Service;
