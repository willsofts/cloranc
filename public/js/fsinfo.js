let fs_default_raw_parameters = false;
let fs_default_language = "EN";
let API_URL = "";
let BASE_URL = "";
let CDN_URL = "";
let IMG_URL = "";
let CHAT_URL = "";
let BASE_CSS = "";
let API_TOKEN = "";
let BASE_STORAGE = "";
let SECURE_STORAGE = true;
let MULTI_LANGUAGES = ["EN","TH"];
let META_INFO = {};
let TOKEN_KEY = "";
let currentPage = "";
const mouseCoordinate = { mouseX : 0, mouseY : 0 };
function getAppInfos() {
    return {
		DEFAULT_LANGUAGE: fs_default_language, 
		DEFAULT_RAW_PARAMETERS: fs_default_raw_parameters,
		API_URL: API_URL, BASE_URL: BASE_URL, 
        CDN_URL: CDN_URL, IMG_URL: IMG_URL, 
        CHAT_URL: CHAT_URL, BASE_CSS: BASE_CSS, 
		API_TOKEN: API_TOKEN, BASE_STORAGE: BASE_STORAGE, 
		SECURE_STORAGE: SECURE_STORAGE, 
		MULTI_LANGUAGES: MULTI_LANGUAGES, 
        META_INFO: META_INFO 
    };
}
function getCurrentPage() { return currentPage; }
function setCurrentPage(value) { currentPage = value; }
function getMouseCoordinate() { return mouseCoordinate; }
function setMouseCoordinate(value) { 
	if(!value) return;
	mouseCoordinate.mouseX = value.pageX ?? mouseCoordinate.mouseX; 
	mouseCoordinate.mouseY = value.pageY ?? mouseCoordinate.mouseY;
}
function getDefaultLanguage() { return fs_default_language; }
function setDefaultLanguage(language) {
	console.log("set default_language="+language);
	if(language && language.trim().length>0) fs_default_language = language;
}
function isDefaultRawParameters() { return fs_default_raw_parameters; }
function setDefaultRawParameters(value) { fs_default_raw_parameters = value; }
function getMultiLanguages() { return MULTI_LANGUAGES }
function setMultiLanguages(values) { 
	console.info("set MULTI_LANGUAGES",values); 
	if(values) MULTI_LANGUAGES = values; 
}
function getApiToken() { return API_TOKEN; }
function getApiUrl() { return API_URL; }
function getBaseUrl() { return BASE_URL; }
function getCdnUrl() { return CDN_URL; }
function getImgUrl() { return IMG_URL; }
function getChatUrl() { return CHAT_URL; }
function getBaseStorage() { return BASE_STORAGE; }
function setApiToken(value) { API_TOKEN = value; }
function setApiUrl(value) { API_URL = value; }
function setBaseUrl(value) { BASE_URL = value; }
function setCdnUrl(value) { CDN_URL = value; }
function setImgUrl(value) { IMG_URL = value; }
function setChatUrl(value) { CHAT_URL = value; }
function setBaseStorage(value) { BASE_STORAGE = value; }
function setSecureStorage(value) { SECURE_STORAGE = value; }
function isSecureStorage() { return SECURE_STORAGE; }
function getBaseCss() { return BASE_CSS; }
function setBaseCss(value) { BASE_CSS = value; }
function getTokenKey() { return TOKEN_KEY; }
function setTokenKey(value) { TOKEN_KEY = value; }
function getMetaInfo() { return META_INFO; }
function setMetaInfo(value = {}) { META_INFO = value; }
function assignAppConfig(data,callback) {
	console.log("assignAppConfig:",data);
	if(!data) { return; }
    const setters = {
        TOKEN_KEY: setTokenKey,
        API_URL: setApiUrl,
        BASE_URL: setBaseUrl,
        CDN_URL: setCdnUrl,
        IMG_URL: setImgUrl,
        DEFAULT_LANGUAGE: setDefaultLanguage,
        API_TOKEN: setApiToken,
        BASE_STORAGE: setBaseStorage,
        SECURE_STORAGE: setSecureStorage,
        BASE_CSS: setBaseCss,
        CHAT_URL: setChatUrl,
        MULTI_LANGUAGES: setMultiLanguages,
        DEFAULT_RAW_PARAMETERS: setDefaultRawParameters,
        META_INFO: setMetaInfo
    };
    for (const key in setters) {
        if (data[key] !== undefined) {
            setters[key](data[key]);
        }
    }
	console.info("appConfig: DEFAULT_LANGUAGE="+getDefaultLanguage(),", BASE_STORAGE="+getBaseStorage(),", DEFAULT_RAW_PARAMETERS="+isDefaultRawParameters(),", SECURE_STORAGE="+isSecureStorage());
	console.info("appConfig: API_URL="+getApiUrl(),", BASE_URL="+getBaseUrl(),", CDN_URL="+getCdnUrl(),", IMG_URL="+getImgUrl()+", BASE_CSS="+getBaseCss()+", CHAT_URL="+getChatUrl()+", MULTI_LANGUAGES="+getMultiLanguages());
	console.info("appConfig: API_TOKEN="+getApiToken(),", META_INFO=",getMetaInfo()); 
	if(callback) callback(data);
}
