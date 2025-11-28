FROM node:20.19.0

ENV NODE_ENV=production

RUN mkdir -p /usr/node/app
WORKDIR /usr/node/app

COPY package.json /usr/node/app/

RUN --mount=type=secret,id=npmrc,target=/root/.npmrc \
    npm install --omit=dev && \
    npm cache clean --force && \
    rm -rf /root/.npm 

COPY . /usr/node/app

EXPOSE 8080

CMD ["npm", "start"]
