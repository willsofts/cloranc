FROM node:20.19.0

ENV NODE_ENV=production

RUN mkdir -p /usr/node/app
WORKDIR /usr/node/app

COPY package.json ./

# npm install without --ignore-scripts is required
# because native modules especially bcrypt and canvas need postinstall scripts
# NOSONAR - npm install scripts are required and reviewed
RUN --mount=type=secret,id=npmrc,target=/root/.npmrc \
    npm install --omit=dev && \
    npm cache clean --force && \
    rm -rf /root/.npm 

COPY config/ ./config/
COPY dist/ ./dist/
COPY label/ ./label/
COPY public/ ./public/
COPY src/ ./src/
COPY views/ ./views/
COPY middleware.tracing.js ./
COPY moleculer.config.js ./
COPY moleculer.formatter.js ./
COPY swagger.json ./

EXPOSE 8080
USER node
CMD ["npm", "start"]
