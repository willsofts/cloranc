## Cloranc Project

This is project introduce to node application with http server and express framework under moleculer engine

## Installation

With npm installed (comes with [node](https://nodejs.org/en/)), run the following commands into a terminal in the root directory of this project:

```shell
npm install
npm run build
npm run start
```

## How To Install
This project need [@willsofts](https://github.com/willsofts) libraries to run that is private access, then you have to gain access key from administrator and setting in your own environment before start installation. \
ex. \
Window

    set NPM_TOKEN=your access token key here

Linux

    export NPM_TOKEN=your access token key here


The project will run at http://localhost:8080/

## Setup
Since this project required database setup before starting you have to create database schema by run sql file under folder `/database/assuredb_mysql.sql` this sql snippet file come with MySQL. Example user access existing in `/database/readme.txt`.

## Configuration
After setup database you may change configuration setting to access your database by `/config/default.json`. see more detail [will-sql](https://github.com/willsofts/will-sql)

In case of setting http connection especially port (default at 8080) can be config by `/config/default.json` or environment setting in command prompt \
ex. \
Window 

    set HTTP_PORT=8888 

Linux 

    export HTTP_PORT=8888 

## Example

This project contains examples API that can invoke by [curl](https://curl.se/download.html):

* curl http://localhost:8080/api/health/check
* curl http://localhost:8080/api/fetch/info 
* curl http://localhost:8080/api/fetch/hello 
* curl http://localhost:8080/api/fetch/hello?name=test  (query parameter)
* curl -X POST http://localhost:8080/api/fetch/hello -d name=test  (post parameter)
* curl -X POST -H "Content-Type: application/json" "http://localhost:8080/api/fetch/hello" -d "{\"name\":\"testing\"}"
* curl http://localhost:8080/api/fetch/hi/test (RESTful api with path parameter)
* curl -v http://localhost:8080/api/fetch/error (with http status 500)
* curl -X POST http://localhost:8080/api/fetch/time/current (RESTful api return current time milliseconds)

## Features

#### Data Discover Service

1. Predefined data categories service by `category` that support `groups` and `lists` actions to discover. This need `config/setting.json` configuration settings.

    - curl -X POST http://localhost:8080/api/category/groups -d "names=tactive"
    - curl -X POST http://localhost:8080/api/category/groups -d "names=tactive&names=tlanguage"
    - curl -X POST -H "Content-Type: application/json" http://localhost:8080/api/category/groups -d "{\"names\":\"tactive\"}"
    - curl -X POST -H "Content-Type: application/json" http://localhost:8080/api/category/groups -d "{\"names\":[\"tactive\",\"tlanguage\"]}"
    - curl -X POST http://localhost:8080/api/category/lists -d "names=tactive"
    - curl -X POST http://localhost:8080/api/category/lists -d "names=tactive&names=tlanguage"

2. Data table service by `datatable` that support `list`, `get` and `category` actions to discover. This is dynamic fetching data set from specified table schema.
    - curl -X POST http://localhost:8080/api/datatable/get -d "tablename=tactive&keyfield=activeid"
    - curl -X POST http://localhost:8080/api/datatable/category -d "tablename=tactive&keyfield=activeid&valuefield=nameen"
    - curl -X POST http://localhost:8080/api/datatable/list -d "tablename=kt_marrystatus&orderfield=seqno"
    - curl -X POST http://localhost:8080/api/datatable/list -d "tablename=kt_marrystatus&tablename=kt_languages&orderfield=seqno"
    - curl -X POST http://localhost:8080/api/datatable/get -d "tablename=kt_marrystatus&keyfield=statusid"
    - curl -X POST http://localhost:8080/api/datatable/category -d "tablename=kt_marrystatus&keyfield=statusid&valuefield=nameen"
    - curl -X POST -H "Content-Type: application/json" http://localhost:8080/api/datatable/list -d "{\"tablename\": [\"kt_marrystatus\", \"kt_languages\"], \"orderfield\": \"seqno\"}"

3. Data service by `dataservice` that support `lookup` and `lists` actions to discover. This is dynamic fetching data set from custom setting via table `api_config`.
    
    - get data using lookup with api name & parameters
        - curl "http://localhost:8080/api/dataservice/lookup?apiname=api_role&site=FWS"
    - get data array using lists for multiple api names
        - curl -X POST http://localhost:8080/api/dataservice/lists -d "apiname=api_prog&apiname=api_prod"
    - get data array using lists for multiple api name with json parameters
        - curl -X POST -H "Content-Type: application/json" http://localhost:8080/api/dataservice/lists -d "{\"apiname\":[\"api_prog\",\"api_prod\"]}"
    - in case of parameters setting need to defined for all parameters sending too
        - curl -X POST -H "Content-Type: application/json" http://localhost:8080/api/dataservice/lists -d "{\"apiname\":[\"api_prog\",\"api_role\"],\"site\":\"FWS\"}"


#### Auto Routing

Since express framework need to defined routing path to process request, this feature using `gui` service to dynamic discover application and execute handler class to be launched. 

How to provide application service.

1. make folder and create handler class under `src` path ex. `src/demo001`

    1.1. Demo001Handler.ts - this is handler class to manipulate by user actions    
    1.2. demo001.ts - this is the executer service class need to export as default that invoked when application open

2. make folder and create renderer under `views` path ex. `views/demo001`, under this folder contains `ejs` file to be render
3. make folder and create browser supporter under `public` path ex. `public/demo001`, under this folder contains html, js, css etc. files.
4. make service class under folder `operators` path ex. `operators/demo001.service.ts`, this is important thing in order to be load into framework and invoked by broker service and caller \
(naming convension have to defined file name as xxxx.service.ts)
5. after startup then invoke `gui/xxxx` ex. http://localhost:8080/gui/demo001

#### Broadcasting

This project support broadcasting message using [socket.io](https://socket.io/) which receive incomming message from server handle by [chat](https://github.com/willsofts/chat) project.

How to implementation.

1. run [chat](https://github.com/willsofts/chat) project on specified port allowance. ex. http://localhost:9000
2. obtain url from 1. to define as a configuration parameter or environment variable `CHAT_URL` before running. ex. 
    
    CHAT_URL=http://localhost:9000

3. after login try out broadcast by
    
    curl -X POST http://localhost:9000/bc -d "message=System Broadcast"


## How to work with Rocket Chat
1. install and run rocket chat server 

    See [Rocket Chat Setting](https://github.com/willsofts/rocketchat)

2. change setting on `config/default.json` to enable and configure to rocket chat server with `META_INFO` attribute. ex.

```json
    "META_INFO": {"chat": true, "ROCKET_HOST": "http://localhost:3000", "ROCKET_WEBSOCKET": "ws://localhost:3000/websocket"}
```

| Attribute | Description |
| -------- | ----------- |
| chat | `true` to enable using rocket chat |
| ROCKET_HOST | this point to rocket chat server url |
| ROCKET_WEBSOCKET | this point to web socket rocket chat server url |

(In case of using CSP, try to allow rocket host and rocket websocket too)

## How to work with SignalR notification
1. change setting on `config/default.json` to enable and configure to SignalR notification server with `META_INFO` attribute. ex.

```json
    "META_INFO": {
        "notify": true, 
        "NOTIFY_HUB_URL": "https://api-dev-cloranc.freewillsolutions.com/notify/notificationHub",
        "NOTIFY_API_URL": "https://api-dev-cloranc.freewillsolutions.com",
        "NOTIFY_WEB_URL": "https://dev-cloranc.freewillsolutions.com"
    }
```

| Attribute | Description |
| -------- | ----------- |
| notify | `true` to enable using SignalR notification |
| NOTIFY_HUB_URL | this point to SignalR connection hub server url (to get alert message) |
| NOTIFY_API_URL | this point to notification api server url (to get notify info such as latest, weekly, monthly) |
| NOTIFY_WEB_URL | this point to notification web server url (to open and launch web page) |

(In case of using CSP, try to allow notification host and hub too)

## How to customize menu
1. Server Side Render (SSR) ex. `http://localhost:8080/index`
    
    Like chat setting by customize on `config/default.json` with `META_INFO` attribute ex.

```json
    "META_INFO": {"chat": true, "notify": true, "language": true }
```

| Attribute | Description |
| -------- | ----------- |
| chat | `true` to enable display chat menu, default `false`. |
| notify | `true` to enable display notification menu, default `false`. |
| language | `false` to disable display language menu, default `true`. |

2. Single Page Application (SPA) ex. `http://localhost:8080/login`
    
    As same as setting SSR but customize on `public/config/default.js` with `META_INFO` attribute ex.

```javascript
    var appVariables = {
        ALLOW_AUTHEN_SAML: "true",
        MULTI_LANGUAGES: ["EN","TH"],
        DEFAULT_LANGUAGE: "EN",
        META_INFO: { 
            chat: true, notify: true, language: true, 
        }
    };
```

| Attribute | Description |
| -------- | ----------- |
| chat | `true` to enable display chat menu, default `false`. |
| notify | `true` to enable display notification menu, default `false`. |
| language | `false` to disable display language menu, default `true`. |

(These settings need to corresponding configure with SSR)

## Login Configuration Variables
Both platform using same tag but `config/default.json` for SSR and `public/config/default.js` for SPA.

| Attribute | Description |
| -------- | ----------- |
| ALLOW_AUTHEN_SAML | `true` to enable authenticate via SSO with Azure Active Directory by SAML protocol, default `false`. |
| ALLOW_AUTHEN_SAML_ONLY | `true` to enable authenticate with SAML only, default `false`. |
| MULTI_LANGUAGES | array of supported language codes |
| DEFAULT_LANGUAGE | to set default language, default `EN`. |

## Application Configuration Variables
Single page application (SPA) can customize more setting via `public/config/app.config.js`.

| Attribute | Description |
| -------- | ----------- |
| BASE_CSS | to change supported theme of application. |
| BASE_URL | to change base url. |
| API_URL | to change API url. |
| CDN_URL | to change CDN url. |
| IMG_URL | to change Image url. |

with `META_INFO` attribute can settings.

```javascript
        META_INFO: { 
            DISPLAY_PAGE_HEADER: false, LOAD_LABEL: true, LOAD_MESSAGE_CODE: true 
        }
```

| Attribute | Description |
| -------- | ----------- |
| DISPLAY_PAGE_HEADER | `false` to disable display page header title, default `true`. |
| LOAD_LABEL | `true` to enable load program lable, default `false`. |
| LOAD_MESSAGE_CODE | `true` to enable load message code, default `false`. |

