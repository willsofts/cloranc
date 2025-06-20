var appVariables = {    
    MULTI_LANGUAGES: ["EN","TH"],
    BASE_CSS: "",
    META_INFO: { DISPLAY_PAGE_HEADER: false }
};
function getAppConfigs() {
    return appVariables;
}
function getAppConfig(key) {
    return appVariables[key];
}
console.log("appVariables",appVariables);
