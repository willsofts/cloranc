function resolveAuthToken(ctx) {
    const sources = [
        ctx.params?.req?.headers,
        ctx.params,
        ctx.params?.req?.params,
        ctx.params?.req?.body,
        ctx.params?.req?.query
    ];
    for (const src of sources) {
        if (!src) continue;
        const token = src.authtoken || src.tokenkey;
        if (token) return token;
    }
    return undefined;
}

module.exports = {
    name: "MiddlewareTracing",
    localAction(next, action) {
        return async function (ctx) {
            const tags = ctx?.span?.tags;
            if (!tags) {
                return next(ctx);
            }
            if (!tags.sessionID && ctx.params?.req?.session?.id) {
                tags.sessionID = ctx.params.req.session.id;
            }
            if (!tags.authToken) {
                tags.authToken = resolveAuthToken(ctx);
            }
            return next(ctx);
        };
    }
};
