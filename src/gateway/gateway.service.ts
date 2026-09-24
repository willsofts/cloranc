import KnAPI from "@willsofts/will-api";
import { ServiceSchema } from "moleculer";
import { TknAssureHandler } from "@willsofts/will-core";
import { UPLOAD_FILE_SIZE, UPLOAD_FILE_COUNT } from "../utils/EnvironmentVariable";

const GatewayService : ServiceSchema = {
    name: "api",
    mixins: [KnAPI],
    settings: {
        //when using express must defined server = false
        //server: false,
        path: "/api",
        routes: [
            {
                busboyConfig: {
                    limits: {
                        files: UPLOAD_FILE_COUNT,        
                        fileSize: UPLOAD_FILE_SIZE,
                    },
                },
                authorization: true,
                aliases: {
                    "POST sign/fetchtoken/:useruuid": "sign.fetchtoken",
                    "GET sign/fetchtoken/:useruuid": "sign.fetchtoken",

                    "POST dataservice/lookup/:apiname": "dataservice.lookup",
                    "GET dataservice/lookup/:apiname": "dataservice.lookup",

                    "POST upload/file": { type: "multipart", action: "upload.file" },
                    "POST upload/files": { type: "multipart", action: "upload.file" },
                }
            },
            {
                path: "/fetch",
                aliases: {
                    "GET /info": "fetch.info",
                    "GET /time/:name?": "fetch.time",
                    "GET /config/:name": "fetch.config",
                },
            },
            {
                path: "/health",
                aliases: {
                    "GET /": "$node.health",
                    "GET /ready": "$node.health",
                    "GET /live": "$node.health",
                },
            },
            {
                path: "/metrics",
                aliases: {
                    "GET /": "$node.metrics",
                },
            },
        ],
		assets: {
			folder: "public",
		}
    },
    methods: {
        async authorize(ctx, route, req, res) {
            return TknAssureHandler.doAuthorizeFilter(ctx, req);
        }
    },
    started() {
        (this as any).broker.call("$node.services").then((services: any) => {
            let servicenames = [];
            for(let s of services) {
                if(s.name!="$node" && s.name!="api") {
                    servicenames.push(s.name);
                }
            }
            console.log("service names",servicenames);
            console.log("number of services",servicenames.length);
        });
    }
};

export = GatewayService;
