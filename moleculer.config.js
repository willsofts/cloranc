const os = require("node:os");
const formatting = require("./moleculer.formatter")

module.exports = {
    nodeID: "cloranc-"+os.hostname().toLowerCase() + "-" + process.pid,
    logger: [
        {
            type: "Console",
            options: {
                level: "debug",
                color: true,
                formatter: formatting,
            } 
        },
    ],
    registry: {
        strategy: "RoundRobin",
        preferLocal: false,
    },
};
