import KnService from "@willsofts/will-db";
import { ServiceSchema } from "moleculer";
import { RocketSfte005Handler } from "../sfte005/RocketSfte005Handler";

const Sfte005Service : ServiceSchema = {
    name: "sfte005",
    mixins: [KnService],
    handler: new RocketSfte005Handler(), 
}
export = Sfte005Service;
