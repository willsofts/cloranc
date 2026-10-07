const serviceAccessTracker = new Map();

module.exports = {
    name: "MiddlewareTracker",
    serviceAccessTracker,
    localAction(next, action) {
        return async function (ctx) {
            const serviceName = action.service?.name;
            if (serviceName && serviceName !== "$node" && serviceName !== "api" && serviceName !== "monitor") {
                serviceAccessTracker.set(serviceName, Date.now());
            }
            return next(ctx);
        };
    }
};
