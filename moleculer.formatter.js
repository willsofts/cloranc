const kleur = require("kleur");

const formatter = new Intl.DateTimeFormat('en-US',{ year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Asia/Bangkok'});
function getColor(type) {
    switch (type) {
        case "fatal":
            return kleur.red().inverse;
        case "error":
            return kleur.red;
        case "warn":
            return kleur.yellow;
        case "debug":
            return kleur.magenta;
        case "trace":
            return kleur.gray;
        default:
            return kleur.green;
    }
}
function formatting(level, args, bindings, printing) {
    const mod = bindings && bindings.mod ? bindings.mod.toUpperCase() : "";
    const moduleColorName = bindings ? kleur.grey(bindings.nodeID + "/" + mod) : "";
    const now = new Date();
    const parts = formatter.formatToParts(now);
    const getpart = (type) => parts.find(p => p.type === type)?.value;
    const ms = String(now.getMilliseconds()).padStart(3, '0');
    const formattedDate = `${getpart('year')}-${getpart('month')}-${getpart('day')} ${getpart('hour')}:${getpart('minute')}:${getpart('second')}.${ms}`;
    return [
        kleur.grey(`[${formattedDate}]`),
        getColor(level)(level.toUpperCase()),
        moduleColorName + ":",
        ...printing.printArgs(args)
    ];
}

module.exports = formatting;
