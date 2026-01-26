import { v4 as uuid } from 'uuid';
import { ServiceSchema } from "moleculer";
import { JSONReply } from "@willsofts/will-api";
import { Utilities, Configure } from "@willsofts/will-util";
const os = require("node:os");

const packageconfig = require("../../package.json");

function getLocalIP() {
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === "IPv4" && !net.internal) {
        return net.address;
      }
    }
  }
}

const FetchService : ServiceSchema = {
    name: "fetch",
    actions: {
        greet(ctx: any) {
            let pname = ctx.params.name;
            let response: JSONReply = new JSONReply();
            response.head.modeling("ensure","greet");
            response.head.composeNoError();
            response.body = { message : "Greet "+(pname ?? "world") };
            return response;
        },
        hello(ctx: any) {
            let pname = ctx.params.name;
            let response: JSONReply = new JSONReply();
            response.head.modeling("ensure","hello");
            response.head.composeNoError();
            response.body = { message : "Hello "+(pname ?? "world") };
            return response;
        },
        hi(ctx: any) {
            let pname = ctx.params.name;
            let response: JSONReply = new JSONReply();
            response.head.modeling("ensure","hi");
            response.head.composeNoError();
            response.body = { "message" : "hi "+(pname ?? "world") };
            return response;
        },
        error(ctx: any) {            
            throw new Error("Test Error");
        },
        time(ctx: any) {
            let pname = ctx.params.name;
            let response: JSONReply = new JSONReply();
            response.head.modeling("ensure","fetch");
            response.head.composeNoError();
            let body : Map<string,string> = new Map();
            let d = new Date();
            body.set("datetime", Utilities.getDateNow(d)+" "+Utilities.getTimeNow(d) );
            if(pname && pname=="current") {
                body.set("result", ""+d.getTime());
            } else if(pname && pname=="date") {
                body.set("result", ""+Utilities.getDateNow(d));
            } else if(pname && pname=="time") {
                body.set("result", ""+Utilities.getTimeNow(d));		
            } else if(pname && pname=="datetime") {
                body.set("result", Utilities.getDateNow(d)+" "+Utilities.getTimeNow(d)); 
            }
            response.body = Object.fromEntries(body);
            return response;
        },
        config(ctx: any) {
            let pname = ctx.params.name;
            let response: JSONReply = new JSONReply();
            response.head.modeling("ensure","config");
            response.head.composeNoError();
            let body : Map<string,string> = new Map();
            if("reload"==pname) {
                Configure.reloadConfig();		
            } else {
                let result = Configure.getConfig(pname);
                if(result) {
                    body.set("config",result);
                } else {
                    response.head.composeError("-1000","Configuration not found");
                }
            }
            response.body = Object.fromEntries(body);
            return response;
        },
        session(ctx: any) {
            let sid = ctx.meta?.session?.id ?? uuid();            
            return {id: sid};
        },
        version(ctx: any) {
            ctx.meta.$responseRaw = true; 
            ctx.meta.$responseType = "application/json";    
            return { name: packageconfig.name, version: packageconfig.version, description: packageconfig.description };
        },
        async info(ctx: any) {
            let sid = ctx.meta?.session?.id ?? uuid();
            const result = await ctx.call("fetch.version");
            ctx.meta.$responseRaw = true; 
            ctx.meta.$responseType = "application/json"; 
            let ip = getLocalIP();   
            return { sid: sid, hostname: os.hostname(), ip: ip, ...result };
        },
    },
};
export = FetchService;
