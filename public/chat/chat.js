
var socket;
var authToken;
var userId;
var roomId;
var soundChime = true;
var subscriptions_list;
var DISABLE_HIDE = true;

$(function() {
    $('#chatform').submit(function() {
        if($('#messageinput').val().trim()=="") {
            resetMessageInputs();
            $('#messageinput').focus();
            return false;
        }
        sendMessage($('#messageinput').val());
        $('#messageinput').val('');
        return false;
    });
    $('#messageinput').bind("keypress",function(e){
        if ((e.keyCode || e.which) == 13) {
            if(!e.shiftKey) {
                $('#chatform').trigger("submit");
                resetMessageInputs();
                return false;
            }
        }
    }).focus();
    $("#imgwhoami").attr("src",HOST+"/avatar/"+USERNAME);
    setupComponents();
    startChat();
});

function resetMessageInputs() {
    $("#chatmessages").removeClass("multiple-texts");
    $("#messageinput").attr("rows","1");
}

function extendMessageInputs() {
    $("#chatmessages").addClass("multiple-texts");
    $("#messageinput").attr("rows","3");
}

function startChat() {
    console.log("startChat: ",SERVER_URL);
    socket = new WebSocket(SERVER_URL);

    socket.onopen = () => {
        console.log("Connected to WebSocket!");
        sendConnectMessage(); // Send "connect" before login
    };

    socket.onmessage = (event) => {
        const message = JSON.parse(event.data);
        console.log("Received:", message);

        if (message.msg === "ping") {
            socket.send(JSON.stringify({ msg: "pong" })); // Reply with "pong"
            return;
        }

        if (message.msg === "connected") {
            console.log("WebSocket connected!");
            login(); // Now we can send the login request
        }

        if (message.msg === "result" && message.id === "login") {
            authToken = message.result.token;
            userId = message.result.id;
            displayWhoami(USERNAME);
            subscribeToAllMessages();
            subscribeToAllUsers();
            getRoomId();
            //getRooms(function() { getOnlineUsers(); displayFirstRoom(); });
            getSubscriptions(function() { 
                getRooms(function() { getOnlineUsers(); displayFirstRoom(); });
            });
        }

        if (message.msg === "result" && message.id === "getRoomId") {
            roomId = message.result;
            console.log("Room ID:", roomId);
        }

        if (message.msg === "changed" && message.collection === "stream-room-messages") {
            const chatMessage = message.fields.args[0];
            if (soundChime && chatMessage.u._id !== userId) {
                try { document.getElementById("sound-chime").play(); } catch(ex) { }
            }
            showMessage(chatMessage.u.username, chatMessage.msg, chatMessage);
        }

        if (message.msg === 'changed' && message.collection === 'stream-notify-logged') {
            const notification = message.fields.args[0];
            console.log("user logged:",notification);
            if (notification) {
                showOnline(notification);
            }
        }                
    };

    socket.onerror = (error) => {
        console.error("WebSocket Error:", error);
    };

    socket.onclose = (event) => {
        console.warn("WebSocket closed! Attempting to reconnect...", event);
        setTimeout(startChat, 3000); // Try reconnecting after 3 seconds
    };            
}

function sendConnectMessage() {
    const connectMessage = {
        msg: "connect",
        version: "1",
        support: ["1", "pre2", "pre1"]
    };
    socket.send(JSON.stringify(connectMessage));
}

// Log in to Rocket.Chat (Use SHA-256 for password hashing)
function login() {
    if(!USERNAME || USERNAME.length == 0 || !PASSWORD || PASSWORD.length ==0) return;
    const hashedPassword = CryptoJS.SHA256(PASSWORD).toString();
    const loginMessage = {
        msg: "method",
        method: "login",
        id: "login",
        params: [
            {
                user: { username: USERNAME },
                password: { digest: hashedPassword, algorithm: "sha-256" }
            }
        ]
    };
    socket.send(JSON.stringify(loginMessage));
    apiLogin();
}

async function resumeLogin() {
    const response = await fetch(`${HOST}/api/v1/login`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ resume: authToken })
    });
    //work
    const data = await response.json();
    console.log("resumeLogin: data",data);
}

async function apiLogin() {
    const response = await fetch(`${HOST}/api/v1/login`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: USERNAME, password: PASSWORD })
    });
    //error: cross origin (login api not allow but other api allow)
    const data = await response.json();
    console.log("apiLogin: data",data);
}

function naiveId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}        

// Get the room ID
function getRoomId() {
    const roomRequest = {
        msg: "method",
        method: "getRoomIdByNameOrId",
        id: "getRoomId",
        params: [ROOM_NAME]
    };
    socket.send(JSON.stringify(roomRequest));
}

function subscribeToAllMessages() {
    let id = naiveId();
    const subscribeMessage = {
        msg: "sub",
        id: id,
        name: "stream-room-messages",
        params: ["__my_messages__", true]
    };
    console.log("subscribe all:",subscribeMessage);
    socket.send(JSON.stringify(subscribeMessage));
}

function subscribeToAllUsers() {
    let id = naiveId();
    const subscribeMessage = {
        msg: 'sub',
        id: id,  
        name: 'stream-notify-logged',
        params: ["user-status",false]  
    };
    console.log("subscribe user logged:",subscribeMessage);
    socket.send(JSON.stringify(subscribeMessage)); 
}

// Send a message
function sendMessage(message) {
    if (!roomId) {
        console.error("Cannot send message: Room ID not set!");
        return;
    }
    if (message.trim().length > 0) {
        const sendMessage = {
            msg: "method",
            method: "sendMessage",
            id: "sendMessage",
            params: [{ rid: roomId, msg: message }]
        };
        console.log("send:",sendMessage);
        socket.send(JSON.stringify(sendMessage));
    }
}

function getTime(now) {
    if(!now) return "";
	let hh = now.getHours(); 
	let mm = now.getMinutes(); 
	let result = ((hh < 10) ? "0":"") + hh; 
	result += ((mm < 10) ? ":0" : ":") + mm; 
	return result; 
}

const options = { day: 'numeric', month: 'long', year: 'numeric' };
const dateFormater = new Intl.DateTimeFormat('en-GB', options);

function getDate(now) {
    if(!now) return "";
    const formattedParts = dateFormater.formatToParts(now);
    const day = formattedParts.find(part => part.type === 'day').value;
    const month = formattedParts.find(part => part.type === 'month').value;
    const year = formattedParts.find(part => part.type === 'year').value;
    return `${day} ${month} ${year}`;    
}
function showMessage(sender, message, noti) {
    //console.log("noti:",noti);
    if(noti && noti.rid !== roomId) {
        let found = false;
        $("a.direct-link",$("#categorylist")).each(function(index,element) {
            let cur_rid = $(element).attr("data-id");
            if(cur_rid == noti.rid) {
                found = true;
                return false;
            }
        });
        if(!found) {
            $("a.channel-link",$("#channellistitems")).each(function(index,element) {
                let e = $(element);
                let cur_id = e.attr("data-id");
                if(cur_id == noti.rid) {
                    found = true;
                    return false;
                }
            });        
        }
        if(!found) {
            getRooms(() => { displayNumOfMsg(noti); });
        } else {
            displayNumOfMsg(noti);
        }
        return;
    }
    if(message.trim().length==0) message = noti?.attachments[0]?.description;
    message = makeMessage(message);
    let username = sender;
    let ts = noti?.ts?.$date ? new Date(noti?.ts?.$date) : null;
    if(!ts) ts = noti?.ts ? new Date(noti?.ts) : new Date();
    let listmsgs = $("#listmessages");
    let time = getTime(ts);
    let date = getDate(ts);
    let timer = time;
    let lastdiv = listmsgs.children(".row-msg").last();
    let lastmsg = lastdiv.data("data-msg");
    //console.log("date:",date,", time:",time,", lastmsg:",lastmsg);
    if(lastmsg) {
        let difdate = lastmsg.date != date;
        if(difdate) {
            showMessageDate(listmsgs,date);    
        }
        if(lastmsg.sender == sender && !difdate) {
            username = "";
            timer = "";
        }
    } else {
        showMessageDate(listmsgs,date);
    }
    let datamsg = {ts:ts, sender: sender, time: time, date: date};
    renderMessage(listmsgs,message,username,timer,datamsg);
    renderAttachments(noti,datamsg);
}

function renderMessage(listmsgs,message,username,timer,datamsg) {
    let div1 = $('<div class="row row-msg d-flex"></div>');
    let div2 = $('<div class="sender col-auto"></div>');
    let table = $('<table class="sender-table"></table>');
    let tr = $('<tr></tr>');
    let td1 = $('<td valign="top"></td>');
    if(username!="") {
        let avatar = $('<img class="avatar-img"></img>"');
        avatar.attr("src",HOST+"/avatar/"+USERNAME);
        td1.append(avatar);
    }
    let td2 = $('<td></td>');
    let sender_row = $('<div class="row"></div>');
    let sender_col = $('<div class="col-md sender-col"></div>');
    sender_row.append(sender_col);
    let timer_row = $('<div class="row"></div>');
    let timer_col = $('<div class="col-md time-col"></div>');
    timer_row.append(timer_col);
    sender_col.html(username);
    timer_col.html(timer);
    td2.append(sender_row).append(timer_row);    
    tr.append(td1).append(td2);
    table.append(tr);
    div2.append(table);    
    let div3 = $('<div class="message flex-grow-1"></div>');
    div3.html(message);
    div1.append(div2).append(div3);
    listmsgs.append(div1);
    listmsgs.scrollTop(listmsgs[0].scrollHeight);
    div1.data("data-msg",datamsg);
}
function showMessageDate(listmsgs,date) {
    let div_row = $('<div class="row row-timer"></div>');
    let div_col = $('<div class="timer col-md"></div>');
    let span = $('<span class="msg-date"></span>');
    span.html(date);
    div_col.append(span);
    div_row.append(div_col);
    listmsgs.append(div_row);
}
async function getSubscriptions(callback) {
    const response = await fetch(`${HOST}/api/v1/subscriptions.get`, {
        method: 'GET',
        headers: {
            'X-Auth-Token': authToken,
            'X-User-Id': userId,
        }
    });
    const data = await response.json();
    console.log("getSubscriptions: data",data);
    subscriptions_list = data.update;
    if(callback) callback();
}
async function getRooms(callback) {
    const response = await fetch(`${HOST}/api/v1/rooms.get`, {
        method: 'GET',
        headers: {
            'X-Auth-Token': authToken,
            'X-User-Id': userId,
        }
    });
    const data = await response.json();
    //console.log("getRooms: data",data);
    clearingRooms();
    data?.update.forEach((item,index) => {
        //console.log("item",item);
        //t=c - channel, d - direct message, t=p - private group
        if(item.t=="d") {
            renderRoomDirect(item);
        } else if(item.t=='c') {
            renderRoomChannel(item);
        } else {
            renderRoomChannel(item);
        }
    });
    if(callback) callback();
}

function getRoomHistory(alink) {
    let t = alink.attr("data-type");
    if(t=="c") {
        getChannelRoomHistory(alink);
    } else {
        getChannelGroupHistory(alink);
    }
}

async function getChannelRoomHistory(alink) {
    let roomid = alink.attr("data-id");
    console.log("get channel room history:", roomid);
    const params = new URLSearchParams({
        roomId: roomid,
        //count: 50
    });
    try {
        const response = await fetch(`${HOST}/api/v1/channels.history?${params.toString()}`, {
            method: 'GET',
            headers: {
                'X-Auth-Token': authToken,
                'X-User-Id': userId,
            }
        });
        const data = await response.json();
        console.log("getChannelRoomHistory: data",data);
        if (data.success) {
            clearingMessages();
            console.log('Chat history fetched for', roomid);
            data.messages.reverse().forEach((msg) => {
                //console.log(`[${msg.ts}] ${msg.u.username}: ${msg.msg}`);
                showMessage(msg.u.username,msg.msg,msg);
            });
        } else {
            console.error('Failed to fetch history:', data);
        }
    } catch (error) {
        console.error('Error fetching chat history of room', roomid, "error:", error);
    }
}

async function getChannelGroupHistory(alink) {
    let roomid = alink.attr("data-id");
    console.log("get channel group history:", roomid);
    const params = new URLSearchParams({
        roomId: roomid,
        //count: 50
    });
    try {
        const response = await fetch(`${HOST}/api/v1/groups.history?${params.toString()}`, {
            method: 'GET',
            headers: {
                'X-Auth-Token': authToken,
                'X-User-Id': userId,
            }
        });
        const data = await response.json();
        console.log("getChannelGroupHistory: data",data);
        if (data.success) {
            clearingMessages();
            console.log('Chat history fetched for', roomid);
            data.messages.reverse().forEach((msg) => {
                //console.log(`[${msg.ts}] ${msg.u.username}: ${msg.msg}`);
                showMessage(msg.u.username,msg.msg,msg);
            });
        } else {
            console.error('Failed to fetch history:', data);
        }
    } catch (error) {
        console.error('Error fetching chat history of room', roomid, "error:", error);
    }
}

async function getIMHistory(roomid) {
    console.log("get im history: ",roomid);
    const params = new URLSearchParams({
        roomId: roomid,
        //count: 50
    });
    try {
        const response = await fetch(`${HOST}/api/v1/im.history?${params.toString()}`, {
            method: 'GET',
            headers: {
                'X-Auth-Token': authToken,
                'X-User-Id': userId,
            }
        });
        const data = await response.json();
        console.log("getIMHistory: data",data);
        if (data.success) {
            clearingMessages();
            console.log('IM history fetched for', roomid);
            data.messages.reverse().forEach((msg) => {
                console.log(`[${msg.ts}] ${msg.u.username}: ${msg.msg}`);
                showMessage(msg.u.username,msg.msg,msg);
            });
        } else {
            console.error('Failed to fetch IM history:', data);
        }
    } catch (error) {
        console.error('Error fetching IM history: of room',roomid, "error:",error);
    }
}

function isRoomHiding(rid) {
    if(rid && subscriptions_list) {
        let sub = subscriptions_list.find(item => item.rid == rid);
        if(sub && sub.open == false) return true;
    }
    return false;
}
function confirmHiding(menulink) {
    let rid = menulink.attr("data-id");
    console.log("confirmHiding: rid",rid);
    let span = $("span.account-label",menulink.closest(".direct-layer")).eq(0);
    $("#confirmheader").html("Confirm Hide Discussion");
    $("#confirmationlabel").html("Do you want to hide this discussion with '"+span.html()+"' ?");
    $('#fsconfirmdialog_layer').modal({
        backdrop: true,
        keyboard: true,
        focus: false
    });
    $("#confirmbutton").unbind("click").bind("click",function() {
        hideRoomDirect(rid,function() { refreshRooms(); });
        $('#fsconfirmdialog_layer').modal("hide");
    });
}
function createUserMenuLayer(item) {
    let userdiv = $('<div class="user-menu-layer dropdown show"></div>');
    let userlink = $('<a href="javascript:void(0)" class="dropdown-toggle link-item user-menu-link" role="button" data-toggle="dropdown"></a>');
    let userem = $('<em class="fa fa-ellipsis-v"></em>');
    userlink.append(userem);
    let menudiv = $('<div class="dropdown-menu dropdown-menu-right"></div>');
    let menulink = $('<a href="javascript:void(0)" class="dropdown-item hide-linker"></a>');
    let menuem = $('<em class="fa fa-eye-slash"></em>');
    let menuspan = $('<span class="hide-span"> Hide</span>');
    menulink.attr("data-id",item._id);
    menulink.on("click",function() {
        confirmHiding(menulink);
    });
    menulink.append(menuem).append(menuspan);
    menudiv.append(menulink);
    userdiv.append(userlink).append(menudiv);
    return userdiv;
}

function renderRoomDirect(item) {
    if(isRoomHiding(item._id)) return;
    console.log("render room direct: uid:",userId,", item",item);
    let div = $('<div class="list-item direct-layer"></div>');    
    let alink = $('<a href="javascript:void(0)" class="link-item direct-link"></a>');
    let name = item?.name;
    if(!name) {
        name = item.usernames.find(usr => usr != USERNAME);
    }
    let img = $('<img class="avatar-img"></img>');
    img.attr("src",HOST+"/avatar/"+name);
    let spanname = $('<span class="account-label"></span>');
    spanname.html(name);
    alink.append(img).append(spanname);
    alink.attr("data-id",item._id);
    alink.attr("data-type","d");
    alink.attr("data-name",name);
    alink.attr("data-username",item.username);
    alink.on("click",function() {
        roomId = alink.attr("data-id");
        selectRoom(alink); 
        getIMHistory(roomId);
    });
    let span = $('<span class="numof-msg"></span>');
    if(DISABLE_HIDE) {
        div.append(alink).append(span);
    } else {
        let userdiv = createUserMenuLayer(item);    
        div.append(alink).append(userdiv).append(span);
    }
    $("#directlistitems").append(div);
}

function renderRoomChannel(item) {
    let div = $('<div class="list-item channel-layer"></div>');
    let img = $('<img class="avatar-img"></img>');
    img.attr("src",HOST+"/avatar/room/"+item.name);
    let spanname = $('<span class="room-label"></span>');
    spanname.html(item.name);
    let alink = $('<a href="javascript:void(0)" class="link-item channel-link"></a>');    
    alink.append(img).append(spanname);
    alink.attr("data-id",item._id);
    alink.attr("data-type",item.t);
    alink.attr("data-name",item.name);
    alink.on("click",function() {
        roomId = alink.attr("data-id");
        selectRoom(alink); 
        getRoomHistory(alink);
    });
    let userdiv = createRoomMenuLayer(item);    
    let span = $('<span class="numof-msg"></span>');
    div.append(alink).append(userdiv).append(span);
    $("#channellistitems").append(div);
}
function createRoomMenuLayer(item) {
    let userdiv = $('<div class="user-menu-layer dropdown show"></div>');
    let userlink = $('<a href="javascript:void(0)" class="dropdown-toggle link-item user-menu-link" role="button" data-toggle="dropdown"></a>');
    let userem = $('<em class="fa fa-ellipsis-v"></em>');
    userlink.append(userem);
    let menudiv = $('<div class="dropdown-menu dropdown-menu-right"></div>');
    let menulink = $('<a href="javascript:void(0)" class="dropdown-item leave-linker"></a>');
    let menuem = $('<em class="fa fa-sign-out"></em>');
    let menuspan = $('<span class="leave-span"> Leave</span>');
    menulink.attr("data-id",item._id);
    menulink.attr("data-type",item.t);
    menulink.on("click",function() {
        confirmLeaving(menulink);
    });
    menulink.append(menuem).append(menuspan);
    menudiv.append(menulink);
    userdiv.append(userlink).append(menudiv);
    return userdiv;
}
function clearingRooms() {
    $("#directlistitems").empty();
    $("#channellistitems").empty();
}

function clearingMessages() {
    $("#listmessages").empty();
}

function displayWhoami(name) {
    $("#whoami").html(name);
}

function selectRoom(alink) {
    $("div.list-item").removeClass("list-item-selected");
    $("a.link-item").removeClass("link-item-selected");
    alink.addClass("link-item-selected");
    alink.parent().find("span.numof-msg").html("");
    alink.parent().addClass("list-item-selected");
    renderTopic(alink);
}

function renderTopic(alink) {
    $("#closememberslistlinker").trigger("click");
    let type = alink.attr("data-type");
    let name = alink.attr("data-name");
    let img = $('<img class="avatar-img"></img>');
    console.log("renderTopic: alink type",type,", name",name);
    if(type=='d') {
        img.attr("src",HOST+"/avatar/"+name);
        $("#groupsettingslinker").hide();
    } else {
        let id = alink.attr("data-id");
        img.attr("src",HOST+"/avatar/room/"+name);
        let g = $("#groupsettingslinker");
        g.attr("data-id",id);
        g.attr("data-type",type);
        g.attr("data-name",name);
        g.show();
    }
    let spanname = $('<span class="account-label"></span>');
    spanname.html(name);
    $("#topiclabel").empty().append(img).append(spanname);
}

function displayNumOfMsg(noti) {
    if(noti && noti.rid) {
        let alink = $("a.link-item[data-id="+noti.rid+"]",$("#categorylist"));
        let span = $("span.numof-msg",alink.parent()).eq(0);
        let txt = span.html();
        let num = 0;
        if(txt && txt.trim().length>0 && !isNaN(txt)) num = parseInt(txt);
        num++;
        span.html(""+num);
    }
}

function displayFirstRoom() {
    let room = roomId;
    let found = false;
    $("a.channel-link",$("#channellistitems")).each(function(index,element) {
        let e = $(element);
        let cur_id = e.attr("data-id");
        if(cur_id == room) {
            found = true;
            e.trigger("click");
            return false;
        }
    });        
    if(found) return;
    $("#channellistitems").find("a.channel-link").first().trigger("click");
}

function renderAttachments(noti,datamsg) {
    if(noti && noti.attachments) {
        let att = noti.attachments[0];
        console.log("attach:",att);
        if(att) {
            let dim = att.image_dimensions || {width: 128, height: 128 };
            let img_url = att.image_url;
            let video_url = att.video_url;
            let video_type = att.video_type || "video/mp4";
            let listmsgs = $("#listmessages");
            let div1 = $('<div class="row row-msg d-flex"></div>');
            let div2 = $('<div class="sender col-auto"></div>');
            let div2_1 = $('<div class="row"></div>');
            let div2_sender = $('<div class="col-md sender-col"></div>');
            let div2_timer = $('<div class="col-md time-col"></div>');
            div2_1.append(div2_sender).append(div2_timer);
            let div2_2 = $('<div class="row"></div>');
            div2.append(div2_1).append(div2_2);
            let div3 = $('<div class="message flex-grow-1"></div>');
            div1.data("data-msg",datamsg);

            if(img_url) {
                let cors = !hasProtocol(img_url);
                if(cors) img_url = HOST + img_url;
                let img = $('<img></img>');
                img.css(dim);
                img.attr("src",img_url);
                div3.append(img);
                div1.append(div2).append(div3);
                listmsgs.append(div1);
                listmsgs.scrollTop(listmsgs[0].scrollHeight);                                        
                return;
            }
            if(video_url) {
                let cors = !hasProtocol(video_url);
                if(cors) video_url = HOST + video_url;
                let video = $("<video controls></video>");
                video.css({width: 300, height: 350});
                let src = $("<source></source>");
                src.attr("type",video_type);
                src.attr("src",video_url);
                video.append(src);
                div3.append(video);
                div1.append(div2).append(div3);
                listmsgs.append(div1);
                listmsgs.scrollTop(listmsgs[0].scrollHeight);
                return;
            }
            let title_url = att.title_link;
            if(title_url) {
                let cors = !hasProtocol(title_url);
                if(cors) title_url = HOST + title_url;
                let link = $('<a target="_blank"></a>');
                link.attr("href",title_url);
                link.attr("title",title_url);
                link.html(att.title || title_url);
                div3.append(link);
                div1.append(div2).append(div3);
                listmsgs.append(div1);
                listmsgs.scrollTop(listmsgs[0].scrollHeight);
                return;                                        
            }
        }
    }
}

function hasProtocol(url) {
    try {
        const parsedUrl = new URL(url);
        return !!parsedUrl.protocol;
    } catch (error) {
        return false;
    }
}

function downloadImage(src,url) {
    console.log("downloadImage:",url);
    const headers = {
        'X-Auth-Token': authToken,
        'X-User-Id': userId,
        'Content-Type': 'application/json'
    };
    fetch(url, { method: 'GET', headers: headers })
        .then(response => response.blob())  
        .then(blob => {
            const imgUrl = URL.createObjectURL(blob);
            src.attr("src",imgUrl);
        })
        .catch(error => console.error('Error loading:', error));
}

function downloadVideo(src,url) {
    console.log("downloadVideo:",url);
    const headers = {
        'X-Auth-Token': authToken,
        'X-User-Id': userId,
        'Content-Type': 'application/json'
    };
    fetch(url, { method: 'GET', headers: headers })
        .then(response => response.blob())  
        .then(blob => {
            const imgUrl = URL.createObjectURL(blob);
            src.attr("src",imgUrl);
        })
        .catch(error => console.error('Error loading:', error));    
}

function downloadImage(src,url) { }
function downloadVideo(src,url) { }

function makeMessage(msg) {
    if(!msg) return msg;
    //console.log("makeMessage: msg",msg);
    let blank = msg.match(/^\s*/)[0];
    msg = msg.trim();
    let len = msg.length;
    let first = msg.charAt(0);
    let last = msg.charAt(len-1);
    if(first == '*' && last == "*") {
        //bold
        msg = msg.replace(/\*/g,'');
        return blank + "<strong>"+makeMessage(msg)+"</strong>";
    }
    if(first == '_' && last == "_") {
        //italic
        msg = msg.replace(/_/g,'');
        return blank + "<em>"+makeMessage(msg)+"</em>";
    }
    if(first == '~' && last == "~") {
        //strikethrough
        msg = msg.replace(/~/g,'');
        msg = msg.replace(/\n/g, '<br/>');
        return blank + "<del>"+makeMessage(msg)+"</del>";
    }
    if(first == '`' && last == "`") {
        //multiple inline code
        if(msg.indexOf('```')>=0) {
            msg = msg.replace(/`/g,'');
            msg = msg.trim().replace(/\n/g, '<br/>');
            return blank + "<pre>"+makeMessage(msg)+"</pre>";
        } else {
            //inline code
            msg = msg.replace(/`/g,'');
            msg = msg.trim().replace(/\n/g, '<br/>');
            return blank + "<code>"+makeMessage(msg)+"</code>";
        }
    }
    //link
    if(first == '[' && last == ')') {
        let result = msg.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" title="$2" target="_blank">$1</a>');
        return blank + result;
    }
    //emoji
    if(first == ':') { 
        let txt = msg.substring(1);
        let idx = txt.indexOf(':');
        if(idx>0) {
            let icon = txt.substring(0,idx);            
            msg = txt.substring(idx+1);
            return blank + makeEmoji(icon) + makeMessage(msg);
        }
    }
    msg = msg.trim().replace(/\n/g, '<br/>');
    return blank + msg;
}
function makeEmoji(icon) {
    if(!icon) return "";
    icon = ":"+icon+":";
    let emoji = emoji_icons.find(item => item.title == icon);
    //console.log("makeEmoji:",emoji);
    if(emoji) {
        let name = emoji.category || emoji.group;
        return '<span class="emoji joypixels-40-'+name+' '+emoji.icon+'"></span>';
    }
    return "";
}
function insertAtCursor(textarea, text, centered=true) {
    let start = textarea.selectionStart;
    let end = textarea.selectionEnd;
    let currentValue = textarea.value;
    let newValue = currentValue.slice(0, start) + text + currentValue.slice(end);
    textarea.value = newValue;
    if(centered) {
        let cursorPos = start + Math.floor(text.length / 2);
        textarea.selectionStart = cursorPos;
        textarea.selectionEnd = cursorPos;
    } else {
        let cursorPos = start + Math.floor(text.length);
        textarea.selectionStart = cursorPos;
        textarea.selectionEnd = cursorPos;
    }
    textarea.focus();
}

function insertMessageAtCursor(text,centered) {
    let textarea = document.getElementById("messageinput");
    insertAtCursor(textarea, text, centered);
}

function setupComponents() {
    $("#btnaddbold").on("click",function() {
        insertMessageAtCursor("**");
    });
    $("#btnadditalic").on("click",function() {
        insertMessageAtCursor("__");
    });
    $("#btnaddstrike").on("click",function() {
        insertMessageAtCursor("~~");
    });
    $("#btnaddinline").on("click",function() {
        insertMessageAtCursor("``");
    });
    $("#btnaddmultiline").on("click",function() {
        insertMessageAtCursor("```\n\n```");
        extendMessageInputs();
    });
    $("#btnaddlink").on("click",function() {
        $("#fieldtext").val("");
        $("#fieldlink").val("");
        $("#fslinkdialog_layer").modal("show");
    });
    $('#fslinkdialog_layer').on('shown.bs.modal',function() {
        $("#fieldtext").trigger('focus')
    });
    $("#btnaddimage").on("click",function() {
        $("#fieldmsg").val("");
        $("#fsfiledialog_layer").modal("show");
    });
    $("#btnaddvideo").on("click",function() {
        $("#videofilename").trigger("click");
    });
    $("#btnclearmsg").on("click",function() { 
        resetMessageInputs();
        $("#messageinput").val("");
    });
    $("#addlinkbutton").on("click",function() {
        let text = $("#fieldtext").val();
        let link = $("#fieldlink").val();
        let isTextBlank = $.trim(text).length==0;
        let isLinkBlank = $.trim(link).length==0;
        if(isTextBlank || isLinkBlank) {
            if(isTextBlank) $("#fieldtext").trigger("focus");
            else if(isLinkBlank) $("#fieldlink").trigger("focus");
            return;
        }
        $("#fslinkdialog_layer").modal("hide");
        $("#messageinput").val("["+text+"]("+link+")");
    });
    $("#addfilebutton").on("click",function() {
        let file = $("#fieldfile").val();
        let desc = $("#fieldmsg").val();
        let isFileBlank = $.trim(file).length==0;
        let isDescBlank = $.trim(desc).length==0;
        if(isFileBlank || isDescBlank) {
            if(isFileBlank) $("#fieldfile").trigger("focus");
            else if(isDescBlank) $("#fieldmsg").trigger("focus");
            return;
        }
        sendFileUpload(roomId,desc,function() { 
            $("#fsfiledialog_layer").modal("hide");
        });
    });
    $("#btnaddemoji").on("click",function() {
        $('#fsemojidialog_layer').modal("show");
    });    
    buildEmoji("emojiheaderlayer","emojilists");
    $('[data-toggle="tooltip"]').tooltip({trigger: 'hover'});
    $("#userslinker").on("click",function() {
        $("#categorylayer").toggle();
    });
    $("#alertlinker").on("click",function() { 
        soundChime = !soundChime;
        if(soundChime) {
            $("#togglealert").removeClass("fa-bell-slash-o").addClass("fa-bell-o")
        } else {
            $("#togglealert").removeClass("fa-bell-o").addClass("fa-bell-slash-o");
        }
    });
    $("#userslistlinker").on("click",function() {
        if($("#usercategorylist").is(":visible")) {
            $("#usercategorylist").hide();
            $("#categorylist").show();
        } else {
            $("#usercategorylist").show();
            $("#categorylist").hide();
            //getUsersList();
            showUsersListForDirectMessage();
        }
    });
    $("#closeuserslistlinker").on("click",function() { 
        $("#usercategorylist").hide();
        $("#categorylist").show();
    });
    $("#newgrouplinker").on("click",function() {
        $("#groupname").val("");
        $('#fsgroupdialog_layer').modal("show");
    });
    $('#fsgroupdialog_layer').on('shown.bs.modal', function () {
        $('#groupname').trigger('focus')
    });
    $("#addgroupbutton").on("click",function() {
        startAddNewGroup();
    });
    $("#groupsettingslinker").on("click",function() {
        if($("#grouperlayer").is(":visible")) {
            $("#grouperlayer").hide();
        } else {
            getCurrentMemberList();
            $("#memberlistslayer").show();
            $("#addmembergrouperlayer").hide();
            $("#grouperlayer").show();
        }        
    });
    $("#closememberslistlinker").on("click",function() {
        $("#grouperlayer").hide();
    });
    $("#closeaddmemberslistlinker").on("click",function() {
        $("#grouperlayer").hide();
    });
    $("#addmemberslistlinker").on("click",function() {
        $("#memberlistslayer").hide();
        $("#addmembergrouperlayer").show();
        showUsersListForAddMember();
    });
    $("#backmemberslistlinker").on("click",function() {
        $("#memberlistslayer").show();
        $("#addmembergrouperlayer").hide();
    });
    $("#addmemberbutton").on("click",function() {
        startAddMemberGroup();
    });
}

function parseErrorThrown(xhr,status,errorThrown) {
	if (!errorThrown) {
		errorThrown = xhr.responseText;
	} else {
		if(errorThrown==xhr.status) {
			errorThrown = xhr.responseText;
		}
	}
	if($.trim(errorThrown)=="") errorThrown = "Unknown error or network error";
	return errorThrown;
}

function submitFailure(xhr, status, errorThrown) {
	errorThrown = parseErrorThrown(xhr, status, errorThrown);
	alert(errorThrown);
}

function sendFileUpload(roomid,desc,callback) {
    let url = `${HOST}/api/v1/rooms.media/${roomid}`;
	let fd = new FormData(fileuploadform);
	$.ajax({
		url: url,
		type: "POST",
		dataType: "json",
        headers: { 'X-Auth-Token': authToken, 'X-User-Id': userId },
		data: fd,
		enctype: "multipart/form-data",
		processData: false, 
		contentType: false, 
		error : function(transport,status,errorThrown) { 
			submitFailure(transport,status,errorThrown); 
		},
		success: function(data,status,transport){ 
			console.log("response : "+transport.responseText);
            if(data?.success) {
                sendFileMessage(roomid,desc,data);
            }
            callback();
		}
	});	

}

function isValidUrl(url) {
    try {
        return new URL(url);
    } catch (ex) {
        return null;
    }
}

function getFileNameFromUrl(urlstr,host=HOST) {
    let urlobj = isValidUrl(urlstr);
    if(!urlobj) urlobj = isValidUrl(host+urlstr);
    if(!urlobj) return urlstr;
    return urlobj.pathname.split('/').pop();
}
  
function sendFileMessage(roomid,message,data) {
    let file = data.file;
    let fileurl = file.url;
    let filename = getFileNameFromUrl(fileurl);
    let video_extension = ["mp4"];
    let image_extension = ['png','jpg','jpeg','svg','gif'];
    let extension = fileurl.split('.').pop().toLowerCase();
    let imgext = image_extension.find((item) => item == extension);
    let videoext = video_extension.find((item) => item == extension);
    let attach = {
        title: filename,
        title_link: file.url,
        title_link_download: true,
        type: 'file',
    };
    if(imgext) {
        attach.image_url = HOST+file.url;
        attach.image_dimensions = { width: 128, height: 128 };
    }
    if(videoext) {
        attach.video_url = HOST+file.url;
    }
    let body = { 
        roomId: roomid, text: message, 
        attachments: [attach],
    };      
    const headers = {
        'X-Auth-Token': authToken,
        'X-User-Id': userId,
        'Content-Type': 'application/json'
    };
    let url = `${HOST}/api/v1/chat.postMessage`;
    console.log("sendFileMessage: body",body);
    fetch(url, { method: 'POST', headers: headers, body: JSON.stringify(body) })
        .then(response => console.log(response))  
        .catch(error => console.error(error));
}

function showOnline(noti) {
    //0=userid,1=username,2=status(0=offline,1=online)
    console.log("show online:",noti);
    if(noti) {
        let noti_id = noti[0];
        let noti_name = noti[1];
        let noti_status = noti[2];
        //console.log("id:",noti_id,", status:",noti_status);
        $("a.direct-link",$("#directlistitems")).each(function(index,element) {
            let alink = $(element);
            let id = alink.attr("data-id");
            let name = alink.attr("data-name");
            console.log("id:",id,", name:",name,", noti: id",noti_id,", name:",noti_name);
            if(name==noti_name) {
                let span = alink.find("span.account-label");
                if("0"==noti_status) {
                    span.removeClass("account-online");
                } else if("1"==noti_status) {
                    span.addClass("account-online");
                }
            }
        });
    }
}

async function getOnlineUsers() {
    //const response = await fetch(`${HOST}/api/v1/users.list?query={"status":"online"}`, {
    const response = await fetch(`${HOST}/api/v1/users.listByStatus?status=active`, {
        method: 'GET',
        headers: {
            'X-Auth-Token': authToken,
            'X-User-Id': userId,
        }
    });
    const data = await response.json();
    console.log("getOnlineUsers: data",data);
    if(data?.success) {
        data?.users.forEach((item,index) => {
            if(item.status!="offline") {
                showOnline([item._id,item.username,1]);
            }
        });
    }
}

function buildEmoji(header,layer) {
    let head = $("#"+header).empty();
    let div = $("#"+layer).empty();
    for(let grp of emoji_groups) {
        let btn = $('<button class="btn btn-light btn-icon" data-toggle="tooltip"></button>');
        btn.attr("title",grp.title);
        btn.html('<em class="'+grp.class+'"></em>');
        btn.data("data-group",grp);
        btn.on("click",function() {
            //console.log("click:",btn.data("data-group"));
            const container = document.getElementById("fsemojientry_layer");
            const target = document.getElementById("emoji_"+grp.group);
            container.scrollTo({ top: target.offsetTop - container.offsetTop + 55, behavior: 'smooth' });
        });
        head.append(btn);

        let labeldiv = $('<div class="emoji-label"></div>');
        let label = $('<a href="javascript:void(0)" id="emoji_'+grp.group+'" class="emoji-link-label"></a>');
        label.html(grp.title);
        labeldiv.append(label);
        div.append(labeldiv);

        let icondiv = $('<div class="emoji-item"></div>');
        let icons = emoji_icons.filter(item => item.group == grp.group);
        if(icons) {
            for(let ico of icons) {
                let name = ico.category || ico.group;
                let iconbtn = $('<button class="btn btn-emoji" data-toggle="tooltip"></button>');
                iconbtn.attr("title",ico.title);
                iconbtn.html('<em class="emojione joypixels-24-'+name+' '+ico.icon+'"></em>');
                iconbtn.data("data-icon",ico);
                iconbtn.on("click",function() {
                    addEmojiToMessage(iconbtn.data("data-icon"));
                    $('#fsemojidialog_layer').modal("hide");
                    $("#messageinput").trigger("focus");
                });
                icondiv.append(iconbtn);
            }
        }
        div.append(icondiv);
    }
}

function addEmojiToMessage(icon) {
    if(icon) {
        insertMessageAtCursor(icon.title,false);
    }
}

async function showUsersListForDirectMessage() {
    $("#userdirectlistitems").empty();
    fetchUserList((lists) => {
        lists.forEach((item) => {
            showUsersListSearch(item);            
        });
    });
}
async function fetchUserList(callback) {
    let lists = [];
    try {
        const response = await fetch(`${HOST}/api/v1/users.list`, {
            method: 'GET',
            headers: {
                'X-Auth-Token': authToken,
                'X-User-Id': userId,
            }
        });
        const data = await response.json();
        console.log("fetchUserList: data",data);
        if(data?.success) {
            lists = data?.users;
        }
    } catch(ex) {
        console.error(ex);
    }
    if(callback) callback(lists);
}
function showUsersListSearch(item) {
    if(item._id == userId) return;
    let div = $('<div class="list-item direct-layer"></div>');    
    let alink = $('<a href="javascript:void(0)" class="link-item direct-link"></a>');
    let name = item?.name;
    if(!name) name = item.username;
    let img = $('<img class="avatar-img"></img>');
    img.attr("src",HOST+"/avatar/"+name);
    let spanname = $('<span class="account-label"></span>');
    spanname.html(name);
    alink.append(img).append(spanname);
    //alink.html(name);
    alink.attr("data-id",item._id);
    alink.attr("data-type","d");
    alink.attr("data-name",name);
    alink.attr("data-username",item.username);
    alink.on("click",function() {
        createRoomDirect(alink.attr("data-id"),alink.attr("data-username"));
    });
    let span = $('<span class="numof-msg"></span>');
    div.append(alink).append(span);
    $("#userdirectlistitems").append(div);
}
function createRoomDirect(userid,username) {
     let body = { 
        username: username
    };      
    const headers = {
        'X-Auth-Token': authToken,
        'X-User-Id': userId,
        'Content-Type': 'application/json'
    };
    let url = `${HOST}/api/v1/im.create`;
    console.log("createRoomDirect: body",body);
    fetch(url, { method: 'POST', headers: headers, body: JSON.stringify(body) })
        .then(response => {
            return response.json(); 
        }).then(data => {
            console.log("createRoomDirect: data",data);
            let rid = data.room.rid;
            if(rid) {
                gotoNewRoom(rid);
            }
        }).catch(error => console.error(error));
}
function gotoNewRoom(rid) {
    console.log("gotoNewRoom: rid",rid);
    getRooms(function() { displayNewRoom(rid); });
}
function displayNewRoom(rid) {
    console.log("displayNewRoom: rid",rid);
    if(rid) {
        $("#usercategorylist").hide();
        $("#categorylist").show();
        $("a.direct-link",$("#directlistitems")).each(function(index,element) {
            let e = $(element);
            let cur_rid = e.attr("data-id");
            if(cur_rid == rid) {
                e.trigger("click");
                return false;
            }
        });
    }
}

function setupDirectMessageUser() {
    $("a.hide-linker",$("#directlisting")).each(function(index,element) {
        let $e = $(element);
        $e.on("click",function() {
            let span = $("span.account-label",$e.closest(".direct-layer")).eq(0);
            $("#confirmationlabel").html("Do you want to hide this discussion with '"+span.html()+"' ?");
            $('#fsconfirmdialog_layer').modal({
                backdrop: true,
                keyboard: true,
                focus: false
            });
        });
    });
}

async function hideRoomDirect(rid,callback) {
     let body = { 
        roomId: rid
    };      
    const headers = {
        'X-Auth-Token': authToken,
        'X-User-Id': userId,
        'Content-Type': 'application/json'
    };
    let url = `${HOST}/api/v1/rooms.hide`;
    console.log("hideRoomDirect: body",body);
    fetch(url, { method: 'POST', headers: headers, body: JSON.stringify(body) })
        .then(response => {
            response.json().then(data => console.log("hideRoomDirect: response data",data)).catch(ex => console.error(ex));
            if(callback) callback();
        }).catch(error => {
            console.error(error);
            if(callback) callback();
        });    
}

function refreshRooms(callback) {
    getSubscriptions(function() { getRooms(callback); });
}

function gotoChatRoom(roomid) {
    console.log("gotoChatRoom: roomid",roomid);
    if(roomid && roomid.trim().length > 0) {
        let found = false;
        $("a.direct-link",$("#directlistitems")).each(function(index,element) {
            let e = $(element);
            let cur_id = e.attr("data-id");
            if(cur_id == roomid) {
                found = true;
                e.trigger("click");
                return false;
            }
        });
        if(found) return;
        $("a.channel-link",$("#channellistitems")).each(function(index,element) {
            let e = $(element);
            let cur_id = e.attr("data-id");
            if(cur_id == roomid) {
                found = true;
                e.trigger("click");
                return false;
            }
        });        
    }
}

function openChatRoom(roomname) {
    console.log("openChatRoom: roomname",roomname);
    if(roomname && roomname.trim().length > 0) {
        let found = false;
        $("#usercategorylist").hide();
        $("#categorylist").show();
        $("a.direct-link",$("#directlistitems")).each(function(index,element) {
            let e = $(element);
            let cur_name = e.attr("data-name");
            let cur_username = e.attr("data-username");
            if(cur_name == roomname || cur_username == roomname) {
                found = true;
                e.trigger("click");
                return false;
            }
        });
        if(found) return;
        $("a.channel-link",$("#channellistitems")).each(function(index,element) {
            let e = $(element);
            let cur_name = e.attr("data-name");
            if(cur_name == roomname) {
                found = true;
                e.trigger("click");
                return false;
            }
        });
        if(!found) {
            gotoChatRoom(roomname);
        }        
    }
}

//------------------ group/channel ------------------
function startAddNewGroup() {
    let name = $("#groupname").val();
    if($.trim(name)!=="") {
        createNewRoom(name,function() { 
            $('#fsgroupdialog_layer').modal("hide");
            getRooms(); 
        });
    }
}

async function createNewRoom(roomname,callback) {
    if(!roomname || roomname.trim().length == 0) return;
    try {
        let body = { 
            name: roomname
        };      
        const headers = {
            'X-Auth-Token': authToken,
            'X-User-Id': userId,
            'Content-Type': 'application/json'
        };
        let url = `${HOST}/api/v1/channels.create`;
        console.log("createNewRoom: body",body);
        fetch(url, { method: 'POST', headers: headers, body: JSON.stringify(body) })
            .then(response => {
                response.json().then(data => console.log("createNewRoom: response data",data)).catch(ex => console.error(ex));
                if(callback) callback(true,response);
            }).catch(error => {
                console.error(error);
                if(callback) callback(false,error);
            });    
    } catch (error) {
        console.error(error);
    }
}

function getCurrentMemberList() {
    $("#addmemberslistlinker").hide();
    getMemberList($("#groupsettingslinker"));
}
var memberrolelisting = [];
var membergrouplisting = [];
function getMemberList(alink) {
    if(alink) {
        let rid = alink.attr("data-id");
        let type = alink.attr("data-type");
        if(rid && type) {
            if("c"==type) {
                getMembersByChannelRole(rid,() => { 
                    let isowner = isOwnerInGroup();
                    if(isowner) $("#addmemberslistlinker").show();
                    getMembersByChannel(rid,() => { displayMembersInGroup(type); } ); 
                });
            } else { //p=type private group
                getMembersByGroupRole(rid,() => { 
                    let isowner = isOwnerInGroup();
                    if(isowner) $("#addmemberslistlinker").show();
                    getMembersByGroup(rid,() => { displayMembersInGroup(type); } ); 
                });
            }
        }
    }
}
async function getMembersByChannelRole(roomid,callback) {
    memberrolelisting = [];
    try {
        if(roomid && roomid.trim().length > 0) {
            const params = new URLSearchParams({
                roomId: roomid,
            });
            const response = await fetch(`${HOST}/api/v1/channels.roles?${params.toString()}`, {
                method: 'GET',
                headers: {
                    'X-Auth-Token': authToken,
                    'X-User-Id': userId,
                }
            });
            const data = await response.json();
            console.log("getMembersByChannelRole: data",data);
            if(data?.success) {
                memberrolelisting = data.roles;
            }
        }
    } catch(ex) { 
        console.error(ex);
    }
    if(callback) callback(memberrolelisting);
}
async function getMembersByGroupRole(roomid,callback) {
    memberrolelisting = [];
    try {
        if(roomid && roomid.trim().length > 0) {
            const params = new URLSearchParams({
                roomId: roomid,
            });
            const response = await fetch(`${HOST}/api/v1/groups.roles?${params.toString()}`, {
                method: 'GET',
                headers: {
                    'X-Auth-Token': authToken,
                    'X-User-Id': userId,
                }
            });
            const data = await response.json();
            console.log("getMembersByGroupRole: data",data);
            if(data?.success) {
                memberrolelisting = data.roles;
            }
        }
    } catch(ex) { 
        console.error(ex);
    }
    if(callback) callback(memberrolelisting);
}
async function getMembersByChannel(roomid,callback) {
    membergrouplisting = [];
    try {
        if(roomid && roomid.trim().length > 0) {
            const params = new URLSearchParams({
                roomId: roomid,
            });
            const response = await fetch(`${HOST}/api/v1/channels.members?${params.toString()}`, {
                method: 'GET',
                headers: {
                    'X-Auth-Token': authToken,
                    'X-User-Id': userId,
                }
            });
            const data = await response.json();
            console.log("getMembersByChannel: data",data);
            if(data?.success) {
                membergrouplisting = data.members;
            }
        }
    } catch(ex) { 
        console.error(ex);
    }
    if(callback) callback(membergrouplisting);
}
async function getMembersByGroup(roomid,callback) {
    membergrouplisting = [];
    try {
        if(roomid && roomid.trim().length > 0) {
            const params = new URLSearchParams({
                roomId: roomid,
            });
            const response = await fetch(`${HOST}/api/v1/groups.members?${params.toString()}`, {
                method: 'GET',
                headers: {
                    'X-Auth-Token': authToken,
                    'X-User-Id': userId,
                }
            });
            const data = await response.json();
            console.log("getMembersByGroup: data",data);
            if(data?.success) {
                membergrouplisting = data.members;
            }
        }
    } catch(ex) { 
        console.error(ex);
    }
    if(callback) callback(membergrouplisting);
}
function isOwnerInGroup(uid) {
    if(!uid) uid = userId;
    return memberrolelisting.some(r => r.u._id === uid && r.roles.includes('owner'));    
}
function displayMembersInGroup(type,layer,data) {
    if(!data) data = membergrouplisting;
    if(!layer) layer = $("#memberslistitems");
    $("#numofmembers").html("("+data.length+")");
    layer.empty();
    let isowner = isOwnerInGroup();
    for(let item of data) {
        showListMembersInGroup(isowner,type,item,layer);
    }
}
function showListMembersInGroup(isowner,type,item,layer) {
    //if(item._id == userId) return;
    if(!layer) layer = $("#memberslistitems");
    let div = $('<div class="list-item direct-layer"></div>');    
    let alink = $('<a href="javascript:void(0)" class="link-item direct-link"></a>');
    let name = item?.name;
    if(!name) name = item.username;
    let img = $('<img class="avatar-img"></img>');
    img.attr("src",HOST+"/avatar/"+name);
    let spanname = $('<span class="account-label"></span>');
    spanname.html(name);
    alink.append(img).append(spanname);
    alink.attr("data-id",item._id);
    alink.attr("data-type",type);
    alink.attr("data-name",name);
    alink.attr("data-username",item.username);
    let span = $('<span class="numof-msg"></span>');
    if(item._id == userId) {
        div.append(alink).append(span);
    } else {
        if(isowner) {
            let userdiv = createRemoveUserMenuLayer(item);        
            div.append(alink).append(userdiv).append(span);
        } else {
            div.append(alink).append(span);
        }
    }
    layer.append(div);
}
function createRemoveUserMenuLayer(item) {
    let userdiv = $('<div class="user-menu-layer dropdown show"></div>');
    let userlink = $('<a href="javascript:void(0)" class="dropdown-toggle link-item user-menu-link" role="button" data-toggle="dropdown"></a>');
    let userem = $('<em class="fa fa-ellipsis-v"></em>');
    userlink.append(userem);
    let menudiv = $('<div class="dropdown-menu dropdown-menu-right"></div>');
    let menulink = $('<a href="javascript:void(0)" class="dropdown-item remove-linker"></a>');
    let menuem = $('<em class="fa fa-remove"></em>');
    let menuspan = $('<span class="remove-span"> Remove</span>');
    menulink.attr("data-id",item._id);
    menulink.attr("data-type",item.t);
    menulink.on("click",function() {
        confirmRemoving(menulink);
    });
    menulink.append(menuem).append(menuspan);
    menudiv.append(menulink);
    userdiv.append(userlink).append(menudiv);
    return userdiv;
}
function showUsersListForAddMember() {
    $("#addmemberslistitems").empty();
    fetchUserList((lists) => {
        lists.forEach((item) => {
            showUsersListSearchForAddMember(item);            
        });
    });
}
function showUsersListSearchForAddMember(item) {
    if(item._id == userId) return;
    let div = $('<div class="list-item direct-layer"></div>');    
    let alink = $('<a href="javascript:void(0)" class="link-item direct-link"></a>');
    let name = item?.name;
    if(!name) name = item.username;
    let img = $('<img class="avatar-img"></img>');
    img.attr("src",HOST+"/avatar/"+name);
    let spanname = $('<span class="account-label"></span>');
    spanname.html(name);
    alink.append(img).append(spanname);
    alink.attr("data-id",item._id);
    alink.attr("data-type","d");
    alink.attr("data-name",name);
    alink.attr("data-username",item.username);
    let box = $('<input type="checkbox" class="member-input-box"/></input>');
    box.attr("data-id",item._id);
    box.attr("data-name",name);
    let span = $('<span class="numof-msg"></span>');
    span.append(box);
    div.append(alink).append(span);
    $("#addmemberslistitems").append(div);
}
function startAddMemberGroup() {
    let users = [];
    $("input.member-input-box",$("#addmemberslistitems")).each(function(index,element) {
        let e = $(element);
        if(e.is(":checked")) {
            users.push({id: e.attr("data-id"), name: e.attr("data-name")});
        }
    });
    let alink = $("#groupsettingslinker");
    let roomid = alink.attr("data-id");
    let type = alink.attr("data-type");
    if(roomid && type) {
        addMemberIntoGroup(roomid,type,users,() => { 
            refreshMembersInList(roomid,type,() => { hideAddMemberGroup(); }); 
        });
    }
}
function refreshMembersInList(roomid,type,callback) {
    if("c"==type) {
        getMembersByChannel(roomid,() => { displayMembersInGroup(type); if(callback) callback(); } );
    } else { //p=type private group
        getMembersByGroup(roomid,() => { displayMembersInGroup(type); if(callback) callback(); } );
    }
}
function hideAddMemberGroup() {
    $("#backmemberslistlinker").trigger("click");
}
async function addMemberIntoGroup(roomid,type,users,callback) {
    if(roomid && type && users && users.length > 0) {
        if("c"==type) {
            for(let usr of users) {
                await addMemberToChannel(roomid,usr.id);
            }
        } else {
            for(let usr of users) {
                await addMemberToGroup(roomid,usr.id);
            }
        }
        if(callback) callback();
    }
}
async function addMemberToChannel(roomid,userid) {
    try {
        let body = { 
            roomId: roomid,
            userId: userid
        };      
        const headers = {
            'X-Auth-Token': authToken,
            'X-User-Id': userId,
            'Content-Type': 'application/json'
        };
        let url = `${HOST}/api/v1/channels.invite`;
        console.log("addMemberToChannel: body",body);
        const response = await fetch(url, { method: 'POST', headers: headers, body: JSON.stringify(body) });
        const data = await response.json();
        console.log("addMemberToChannel: data",data);
        return {success: true, data: data};
    } catch (error) {
        console.error(error);
        return {success: false, data: error};
    }
}
async function addMemberToGroup(roomid,userid) {
    try {
        let body = { 
            roomId: roomid,
            userId: userid
        };      
        const headers = {
            'X-Auth-Token': authToken,
            'X-User-Id': userId,
            'Content-Type': 'application/json'
        };
        let url = `${HOST}/api/v1/groups.invite`;
        console.log("addMemberToGroup: body",body);
        const response = await fetch(url, { method: 'POST', headers: headers, body: JSON.stringify(body) });
        const data = await response.json();
        console.log("addMemberToGroup: data",data);
        return {success: true, data: data};
    } catch (error) {
        console.error(error);
        return {success: false, data: error};
    }
}
function getCurrentRoomId() {
    return $("#groupsettingslinker").attr("data-id");
}
function confirmLeaving(menulink) {
    let rid = menulink.attr("data-id");
    let type = menulink.attr("data-type");
    console.log("confirmLeaving: rid",rid,", type",type);
    let span = $("span.room-label",menulink.closest(".channel-layer")).eq(0);
    $("#confirmheader").html("Confirm Leave");
    $("#confirmationlabel").html("Do you want to leave this group '"+span.html()+"' ?");
    $('#fsconfirmdialog_layer').modal({
        backdrop: true,
        keyboard: true,
        focus: false
    });
    $("#confirmbutton").unbind("click").bind("click",() => {
        leavingRoom(type,rid,() => { 
            refreshRooms(() => {
                hideAddMemberGroup(); 
                if(rid == getCurrentRoomId()) {
                    displayFirstRoom(); 
                }
            }); 
        });
        $('#fsconfirmdialog_layer').modal("hide");
    });
}
function leavingRoom(type,roomid,callback) {
    if("c"==type) {
        leaveRoomChannel(roomid,callback);
    } else {
        leaveRoomGroup(roomid,callback);
    }
}
async function leaveRoomChannel(roomid,callback) {
     let body = { 
        roomId: roomid
    };      
    const headers = {
        'X-Auth-Token': authToken,
        'X-User-Id': userId,
        'Content-Type': 'application/json'
    };
    let url = `${HOST}/api/v1/channels.leave`;
    console.log("leaveRoomChannel: body",body);
    fetch(url, { method: 'POST', headers: headers, body: JSON.stringify(body) })
        .then(response => {
            response.json().then(data => console.log("leaveRoomChannel: response data",data)).catch(ex => console.error(ex));
            if(callback) callback(true,response);
        }).catch(error => {
            console.error(error);
            if(callback) callback(false,error);
        });    
}
async function leaveRoomGroup(roomid,callback) {
     let body = { 
        roomId: roomid
    };      
    const headers = {
        'X-Auth-Token': authToken,
        'X-User-Id': userId,
        'Content-Type': 'application/json'
    };
    let url = `${HOST}/api/v1/groups.leave`;
    console.log("leaveRoomGroup: body",body);
    fetch(url, { method: 'POST', headers: headers, body: JSON.stringify(body) })
        .then(response => {
            response.json().then(data => console.log("leaveRoomGroup: response data",data)).catch(ex => console.error(ex));
            if(callback) callback(true,response);
        }).catch(error => {
            console.error(error);
            if(callback) callback(false,error);
        });    
}
function confirmRemoving(menulink) {
    let uid = menulink.attr("data-id");    
    let g = $("#groupsettingslinker");
    let rid = g.attr("data-id");
    let type = g.attr("data-type");
    let name = g.attr("data-name");
    console.log("confirmRemoving: rid",rid,", name",name,", type",type,", uid",uid);
    $("#confirmheader").html("Confirm Remove");
    $("#confirmationlabel").html("Do you want to remove from '"+name+"' ?");
    $('#fsconfirmdialog_layer').modal({
        backdrop: true,
        keyboard: true,
        focus: false
    });
    $("#confirmbutton").unbind("click").bind("click",() => {
        kickUserInRoom(uid,rid,type,(success) => { 
            if(success) refreshMembersInList(rid,type);
        });
        $('#fsconfirmdialog_layer').modal("hide");
    });
}
function kickUserInRoom(userid,roomid,type,callback) {
    if("c"==type) {
        kickUserInRoomChannel(userid,roomid,callback);
    } else {
        kickUserInRoomGroup(userid,roomid,callback)
    }
}
async function kickUserInRoomChannel(userid,roomid,callback) {
     let body = {
        userId: userid, 
        roomId: roomid
    };      
    const headers = {
        'X-Auth-Token': authToken,
        'X-User-Id': userId,
        'Content-Type': 'application/json'
    };
    let url = `${HOST}/api/v1/channels.kick`;
    console.log("kickUserInRoomChannel: body",body);
    fetch(url, { method: 'POST', headers: headers, body: JSON.stringify(body) })
        .then(async (response) => {
            let data = await response.json();
            console.log("kickUserInRoomChannel: response data",data);
            if(callback) callback(data.success,data);
        }).catch(error => {
            console.error(error);
            if(callback) callback(false,error);
        });    
}
async function kickUserInRoomGroup(userid,roomid,callback) {
     let body = {
        userId: userid, 
        roomId: roomid
    };      
    const headers = {
        'X-Auth-Token': authToken,
        'X-User-Id': userId,
        'Content-Type': 'application/json'
    };
    let url = `${HOST}/api/v1/groups.kick`;
    console.log("kickUserInRoomGroup: body",body);
    fetch(url, { method: 'POST', headers: headers, body: JSON.stringify(body) })
        .then(async (response) => {
            let data = await response.json();
            console.log("kickUserInRoomGroup: response data",data);
            if(callback) callback(data.success,data);
        }).catch(error => {
            console.error(error);
            if(callback) callback(false,error);
        });    
}

function createChatRoom(roomname,callback) {
    if(roomname.trim().length > 0) {
        createNewRoom(roomname,() => { 
            getRooms(callback); 
        });
    }
}
