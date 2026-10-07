import KnService from "@willsofts/will-db";
import { ServiceSchema } from "moleculer";
import { Sftu005Handler } from "../sftu005/Sftu005Handler";

const Sftu005Service : ServiceSchema = {
    name: "sftu005",
    mixins: [KnService],
    handler: new Sftu005Handler(), 
}
export = Sftu005Service;
