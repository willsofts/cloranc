import KnAPI from "@willsofts/will-api";
import { ServiceSchema } from "moleculer";
import { KnExpress, KnRunner } from "@willsofts/will-run";
import { TknAssureHandler } from "@willsofts/will-core";
import { TknRouteManager, TknSAMLManager, TknReportManager, TknUploadFileManager, TknDocumentManager, TknExportManager } from '@willsofts/will-serv';
import { UPLOAD_FILE_SIZE, UPLOAD_FILE_COUNT } from "./utils/EnvironmentVariable";
import "express-async-errors";

const ExpressService : ServiceSchema = {
    name: "api",
    mixins: [KnAPI],
    settings: {
        //when using express need to defined server = false
        server: false,
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
                    "GET fetch/hi/:name": "fetch.hi",
                    "GET fetch/time/:name": "fetch.time",
                    "GET fetch/config/:name": "fetch.config",

                    "POST sign/fetchtoken/:useruuid": "sign.fetchtoken",
                    "GET sign/fetchtoken/:useruuid": "sign.fetchtoken",

                    "POST dataservice/lookup/:apiname": "dataservice.lookup",
                    "GET dataservice/lookup/:apiname": "dataservice.lookup",

                    "POST upload/file": { type: "multipart", action: "upload.file" },
                    "POST upload/files": { type: "multipart", action: "upload.file" },
                }
            }
        ]
    },
    methods: {
        async authorize(ctx, route, req, res) {
            return TknAssureHandler.doAuthorizeFilter(ctx, req);
        }
    }
};
async function startServer() {
    const runner = new KnRunner(ExpressService);
    await runner.start(process.argv);
    if(runner.service) {
        let app = KnExpress.createApplication(runner.service);
        runner.service.logger.info("working directory",__dirname);
        new TknRouteManager(runner.service, __dirname).route(app);
        //this for SAML login supported
        new TknSAMLManager(runner.service, __dirname).route(app);
        //this is report operator
        new TknReportManager(runner.service, __dirname).route(app);
        //this is private upload file router
        new TknUploadFileManager(runner.service, __dirname).route(app);
        //this is an api documentary router
        new TknDocumentManager(runner.service, __dirname).route(app);
        //this is export operator
        new TknExportManager(runner.service, __dirname).route(app);
    }
    if(runner.broker) {
        const services: any[] = await runner.broker.call("$node.services");
        const servicenames = services
            .filter(s => s.name !== "$node" && s.name !== "api")
            .map(s => s.name);
        runner.broker.logger.debug("service names",servicenames);
        runner.broker.logger.debug("number of services",servicenames.length);
    }
}
// Entry point uses CommonJS; top-level await is not supported
startServer().catch(err => { // NOSONAR typescript:S7785
    console.error(err);
    process.exit(1);
});
