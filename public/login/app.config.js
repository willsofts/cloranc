if(!window.appVariables) appVariables = {};
function getAppConfigs() {
    return appVariables;
}
function getAppConfig(key) {
    return appVariables[key];
}
console.log("appConfigs",appVariables);
function openChatRoom(roomname) {
    console.log("app.config: openChatRoom",roomname);
    if(roomname && roomname.trim().length > 0) {
        let chatingframe = document.getElementById("chatingframe");
        let chatingwindow = chatingframe.contentWindow;
        if(chatingwindow) {
            try { 
                chatingwindow.openChatRoom(roomname);
                $("#fschatinglayer").show();
            } catch(ex) { console.error(ex); }
        }
    }
}
function createChatRoom(roomname,callback) {
    console.log("app.config: createChatRoom",roomname);
    if(roomname && roomname.trim().length > 0) {
        let chatingframe = document.getElementById("chatingframe");
        let chatingwindow = chatingframe.contentWindow;
        if(chatingwindow) {
            try { 
                chatingwindow.createChatRoom(roomname,callback);
            } catch(ex) { console.error(ex); }
        }
    }
}
