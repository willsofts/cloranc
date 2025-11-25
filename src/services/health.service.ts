import { ServiceSchema } from "moleculer";
const os = require("os");
const dns = require("dns");

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

function getLocalAddress() {
    return new Promise((resolve, reject) => {
        dns.lookup(os.hostname(), { family: 4 }, (err:any, address:string) => {
            if (err) reject(err);
            resolve(address);
        });
    });
}

const HealthCheckService : ServiceSchema = {
    name: "health",
    actions: {
        async check(ctx: any) {
            ctx.meta.$responseRaw = true; 
            ctx.meta.$responseType = "application/json";
            let addr = await getLocalAddress();
            let ip = getLocalIP();
            let info = {hostname: os.hostname(), ip: [addr,ip], pid: process.pid};
            ctx.service?.logger?.info("health/check:",info);
            return {status: "OK", ...info};
        },
    },
};

export = HealthCheckService;
