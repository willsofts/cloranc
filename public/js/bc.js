function startReceiveBroadcast() {
    console.log("start receive bc: ",CHAT_URL);
    if(CHAT_URL && CHAT_URL.trim().length > 0) {
        var socket = io.connect(CHAT_URL);
        socket.on('broadcast-message', function(msg) {
            console.log("broadcast-message:",msg);
            let div = $("<div class='bc-layer'></div>");
            let link = $("<a href=\"javascript:void(0)\" class=\"bc-close\" aria-label=\"close\"></a>").html("<em class='fa fa-close'></em>");
            link.click(function() { div.remove(); });
            let span = $("<span></span>").html(msg.message);
            let body = $("body");
            let isz = body.find("div.bc-layer").length;
            if(isz > 0 && isz < 10) {
                let bottom = isz * 50;
                div.css({bottom: bottom});
            }
            div.append(link).append(span).appendTo(body);
            if(!(String(META_INFO.BC_AUTO_HIDE)=="false")) {
                let interval = META_INFO.BC_AUTO_HIDE_INTERVAL || 3000;
                setTimeout(function() { div.hide(1000, function() { div.remove(); }); },interval);
            }
        });
    }
}
function openChatRoom(roomname,callback) {
    console.log("bc: openChatRoom",roomname);
    if(roomname && roomname.trim().length > 0) {
        let chatingframe = document.getElementById("chatingframe");
        let chatingwindow = chatingframe.contentWindow;
        if(chatingwindow) {
            try { 
                chatingwindow.openChatRoom(roomname);
                $("#fschatinglayer").show();
                if(callback) callback();
            } catch(ex) { console.error(ex); }
        }
    }
}
function createChatRoom(roomname,callback) {
    console.log("bc: createChatRoom",roomname);
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
function handleIncommingMessage(payload) {
    if(payload.archetype=="willsofts" && payload.type=="chat") {
        if(payload.method=="openChatRoom") {
            openChatRoom(payload.roomname,() => {
                if(payload.callback) {
                    sendMessageToFrame({...payload});
                }
            });
        } else if(payload.method=="createChatRoom") {
            createChatRoom(payload.roomname,() => {
                if(payload.callback) {
                    sendMessageToFrame({...payload});
                }
            });
        }
    }
}
