function requestAccessorInfo() {
    let msg = { type: "accessorinfo", archetype: "willsofts" };
    sendMessageToParent(msg);
}
const ALLOWED_ORIGINS = "*";
function sendMessageToParent(data) {
    if(!data) return;
    try {
        console.log("sendMessageToParent:",data);
        window.parent.postMessage(JSON.stringify(data), ALLOWED_ORIGINS); // NOSONAR - intentional broadcast, validated on receiver
    } catch(ex) { console.log(ex); }
}
function handleRequestMessage(data) {
    if(data && data.type=="storage") {
        assignAppConfig(data);
        if(data.accessorinfo) {
            saveAccessorInfo(data.accessorinfo);
        }
        console.log("saveAccessorInfo",data.accessorinfo);
    }
}
window.onmessage = function(e) {
    console.log("interface: onmessage:",e.data);
    try {
        let payload = JSON.parse(e.data);
        handleRequestMessage(payload);
    } catch(ex) { console.log(ex); }
}
