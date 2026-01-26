import { ServiceBroker } from "moleculer";
let args = process.argv.slice(2);
console.log("broker: args",args);
const configure = require("../moleculer.config.js");
const broker = new ServiceBroker(configure);
if(args && args.length>0) {
    for(let arg of args) {
        broker.loadServices(arg);
    }
}
async function startBroker() {
    await broker.start();
    const services: any[] = await broker.call("$node.services");
    const servicenames = services
        .filter(s => s.name !== "$node" && s.name !== "api")
        .map(s => s.name);
    broker.logger.info("service names", servicenames);
    broker.logger.info("number of services", servicenames.length);
}
// Entry point uses CommonJS; top-level await is not supported
startBroker().catch(err => { // NOSONAR typescript:S7785
    broker.logger.error(err);
    process.exit(1);
});
/*
this broker can be run with NATS in order to plugin services on separated node
*/
