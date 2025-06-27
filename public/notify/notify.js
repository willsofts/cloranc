var defaultContentType = "application/x-www-form-urlencoded; charset=UTF-8";
const notification_actions = {
    READY: 'READY',
    NOTI_SELECT: 'NOTI_SELECT'
};
var connection;
$(function() {
    if (!connection) {
        signalRHubConnection();
    }
    setupNotificationComponents();
});
function getTokenKey() {
    return NOTIFY_TOKEN || getAccessorToken();
}
function getCurrentUser() {
    return NOTIFY_USER || getAccessorInfo()?.userid;
}
function getCurrentLanguage() {
    return fs_default_language || "EN";
}
function createNotifyConfigure() {
    let token = getTokenKey();
    return { url: NOTIFY_HUB_URL, username: getCurrentUser(), token: token, headers: { "Authorization": token } };
}
async function signalRHubConnection() {
    let cfg = createNotifyConfigure();
    console.log('signalRHubConnection:',cfg);
    if(!cfg.url) return;
    connection = await new signalR.HubConnectionBuilder()
        .withAutomaticReconnect([0, 1000, 5000, 15000])
        .withUrl(cfg.url+"?fskey="+encodeURIComponent(cfg.token), { headers: cfg.headers })
        .configureLogging(signalR.LogLevel.Debug)
        .build();
    await startSignalR();
}
async function startSignalR() {
    try {
        await connection.start();
        console.log("SignalR Connected.");
        connection.onclose(() => { console.warn("Disconnected!"); });
        connection.onreconnected(() => { console.log("Reconnected!"); });
        setupBroadcasting();
    } catch (err) {
        console.log(err);
        setTimeout(() => startSignalR(), 5000);
    }
}
async function setupBroadcasting() {
    let username = getCurrentUser();
    if (username) {
        connection.on('broadcastNotification', function (group, message) {
            let objNoti = JSON.parse(message);
            console.log("-notiMessage:", objNoti);
            showBroadcastNotification(objNoti);
        });
        connection.on('connect', function (message) {
            console.log("-connect:", message);
        });
        try {
            console.log('signalR connection state ==> ',connection.state);
            if (connection.state === signalR.HubConnectionState.Connected) {
                await connection.invoke('connect', username, 'latest');
            }
        } catch (err) {
            console.error(err);
        }
    }
}
function setupNotificationComponents() {
    window.parent.$("#noti_tab_lastest").on("click",function () {
        console.log("noti_tab_lastest: click");
        getNewNotification(notification_actions.NOTI_SELECT);
    }).trigger("click");
    window.parent.$("#noti_tab_weeks").on("click",function () {
        console.log("noti_tab_weeks: click");
        getNewNotificationWeeks();
    });
    window.parent.$("#noti_tab_months").on("click",function () {
        console.log("noti_tab_months: click");
        getNewNotificationMonths();
    });
}
function showBroadcastNotification(datanotification) {
    console.log("@broadcastNotification:", datanotification);
    if (datanotification) {
        let notinumber = window.parent.$("#noti_number");
        notinumber.hide().html("");
        let unReadN = datanotification.rOutputData.newMessage;
        unReadN = parseInt(!unReadN ? '0' : unReadN);
        console.log("-new unReadN", unReadN);
        if (unReadN > 0) {
            let counter = (unReadN > 99) ? '+99' : unReadN;
            notinumber.show().html(""+counter);
            var tnotimessege = datanotification.rOutputData?.transaction[0]?.t_Notimessege;
            var enotimessege = datanotification.rOutputData?.transaction[0]?.e_NotiMessege;
            var msg = getFsText(enotimessege, tnotimessege);
            var key = datanotification.rOutputData?.transaction[0]?.keyId ? datanotification.rOutputData.transaction[0].keyId : new Date().getTime();
            if (datanotification.rOutputData.isShow) {
                createAlert({
                    icon: 'kt-header__topbar-icon kt-pulse kt-pulse--brand flaticon2-notification',
                    title: msg,
                    color: 'alert-info',
                    duration: 10,
                    isFade: true,
                    serial: key
                });
            }
            getNewNotification(notification_actions.NOTI_SELECT);
            /// Refresh todolist
        }
    }
}
async function getNewNotification(action, isAlert) {
    let cfg = createNotifyConfigure();
    let username = getCurrentUser();
    let urlstr = NOTIFY_API_URL + "/notify/api/Junt/GetNotificationLatest/" + username;
    window.parent.startWaiting();
    $.ajax({
        type: "GET",
        url: urlstr,
        headers: cfg.headers,
        dataType: "json",
        contentType: defaultContentType,
		error : function(transport,status,errorThrown) {
            console.error("getNewNotification: error",errorThrown," response",transport.responseText);
            window.parent.stopWaiting();
		},        
        success: (data, status, transport) => {
            console.log("getNewNotification: success",data);
            window.parent.stopWaiting();
            if (data?.header?.errorflag == "Y") {
                console.error('getNewNotification:', data);
            } else if (action == notification_actions.READY) {
                showNotification({data: data}, isAlert);
            } else {
                showNotification({data: data});
            }
        },
    });
}
function showNotification(datanotification, isAlert) {
    var unReadN = datanotification.data.rOutputData.newMessage;
    unReadN = parseInt(!unReadN ? '0' : unReadN);
    let notinumber = window.parent.$("#noti_number");
    notinumber.hide().html("");
    let container = window.parent.$('#nn_alert_container');
    if (container.hasClass('first-push')) {
        isAlert = false;
    }
    let noti_container = window.parent.$("#noti_lastest").empty();
    if (datanotification.data.rOutputData.transaction.length > 0) {
        for (var i = 0; i < datanotification.data.rOutputData.transaction.length; i++) {
            var progParam = datanotification.data.rOutputData.transaction[i].progParam == null ? '' : datanotification.data.rOutputData.transaction[i].progParam;
            var progId = datanotification.data.rOutputData.transaction[i].progId == null ? '' : datanotification.data.rOutputData.transaction[i].progId;
            var notimessege = getFsText(datanotification.data.rOutputData.transaction[i].e_NotiMessege, datanotification.data.rOutputData.transaction[i].t_Notimessege);
            var lastestupdate = getFsText(datanotification.data.rOutputData.transaction[i].lastestUpdate_EN, datanotification.data.rOutputData.transaction[i].lastestUpdate);
            var lTransactionKeyStr = getFsTransactionKeys(datanotification.data.rOutputData.transaction[i].transactionKey);
            var programName = "&ProgramName=" + (datanotification.data.rOutputData.transaction[i].programName ? datanotification.data.rOutputData.transaction[i].programName : '');
            var workflowId = datanotification.data.rOutputData.transaction[i].workflowId == null ? '' : datanotification.data.rOutputData.transaction[i].workflowId;
            var linkto = datanotification.data.rOutputData.transaction[i].linkto == null ? '' : datanotification.data.rOutputData.transaction[i].linkto;
            var currentstep = datanotification.data.rOutputData.transaction[i].currentstep == null ? '' : datanotification.data.rOutputData.transaction[i].currentstep;
            var params = [datanotification.data.rOutputData.transaction[i].keyId
                , datanotification.data.rOutputData.transaction[i].insuranceStatus
                , datanotification.data.rOutputData.transaction[i].policyStatus
                , workflowId
                , linkto
                , datanotification.data.rOutputData.transaction[i].readFlag
                , currentstep
                ];
            var elem_data = ['data-transactionkey="' + lTransactionKeyStr + '"'];
            elem_data.push('data-namesubheader="' + progId + '"');
            elem_data.push('data-parameter="' + (progParam + programName) + '"');

            if (datanotification.data.rOutputData.transaction[i].readFlag == 'N') {
                if (datanotification.data.rOutputData.isShow == 'Y') {
                    createAlert({
                        icon: 'kt-header__topbar-icon kt-pulse kt-pulse--brand flaticon2-notification',
                        title: notimessege,
                        color: 'alert-info',
                        duration: 10,
                        isFade: isAlert,
                        serial: datanotification.data.rOutputData.transaction[i].keyId
                    });
                }
                let lastesthtml = '<a href="#" class="kt-notification__item" ' + (elem_data.join(" ")) + '>' +
                    '<div class="kt-notification__item-details">' +
                    '<div class="kt-notification__item-title font-size-custom-h-14-b">' + notimessege + '</div>' +
                    '<div class="kt-notification__item-time font-size-custom-d">' + lastestupdate + '</div>' +
                    '</div></a>';
                let alink = $(lastesthtml).on("click",() => {
                    notificationOpen(params,this);
                });
                noti_container.append(alink);
            } else {
                let lastesthtml = '<a href="#" class="kt-notification__item" ' + (elem_data.join(" ")) + '>' +
                    '<div class="kt-notification__item-details">' +
                    '<div class="kt-notification__item-title font-size-custom-h3-14">' + notimessege + '</div>' +
                    '<div class="kt-notification__item-time font-size-custom-d3">' + lastestupdate + '</div>' +
                    '</div></a>';
                let alink = $(lastesthtml).on("click",() => {
                    notificationOpen(params,this);
                });
                noti_container.append(alink);
            }
        }
    } else {
        let lastesthtml = ' <div class="kt-grid kt-grid--ver" style="min-height: 200px;">' +
            '<div class="kt-grid kt-grid--hor kt-grid__item kt-grid__item--fluid kt-grid__item--middle">' +
            '<div class="kt-grid__item kt-grid__item--middle kt-align-center font-size-custom-h2">All caught up!<br>No new notifications.</div>' +
            '</div>' +
            '</div>';
        noti_container.append($(lastesthtml));
    }
    container.removeClass('first-push');
    if (unReadN > 0) {
        notinumber.show().html(((unReadN > 99) ? '+99' : unReadN));
    }
    window.parent.$("#noti_numberlist").text((unReadN > 999) ? '+999' : unReadN);
}
async function getNewNotificationWeeks() {
    let notiweeks = window.parent.$("#noti_weeks");
    notiweeks.html("");
    window.parent.$("#noti_months").html("");
    let cfg = createNotifyConfigure();
    let username = getCurrentUser();
    let urlstr = NOTIFY_API_URL + "/notify/api/Junt/GetNotificationWeeks/" + username;
    window.parent.startWaiting();
    $.ajax({
        type: "GET",
        url: urlstr,
        headers: cfg.headers,
        dataType: "json",
        contentType: defaultContentType,
		error : function(transport,status,errorThrown) {
            console.error("getNewNotificationWeeks: error",errorThrown," response",transport.responseText);
            window.parent.stopWaiting();
		},        
        success: (data, status, transport) => {
            console.log("getNewNotificationWeeks: success",data);
            window.parent.stopWaiting();
            if (data?.rResultSet?.rResult == "SCUN0000") {
                showNotificationWeeks({data: data});
            } else {
                notiweeks.html(data?.rResultSet?.rErrorDesc_eng);
            }
        },
    });
}
function showNotificationWeeks(datanotificationweeks) {
    let noti_container = window.parent.$("#noti_weeks");
    if (datanotificationweeks.data.rOutputData.transaction.length > 0) {
        for (var i = 0; i < datanotificationweeks.data.rOutputData.transaction.length; i++) {
            var progParam = datanotificationweeks.data.rOutputData.transaction[i].progParam == null ? '' : datanotificationweeks.data.rOutputData.transaction[i].progParam;
            var progId = datanotificationweeks.data.rOutputData.transaction[i].progId == null ? '' : datanotificationweeks.data.rOutputData.transaction[i].progId;
            var notimessege = getFsText(datanotificationweeks.data.rOutputData.transaction[i].e_NotiMessege, datanotificationweeks.data.rOutputData.transaction[i].t_Notimessege);
            var lastestupdate = datanotificationweeks.data.rOutputData.transaction[i].notiDate; 
            var lTransactionKeyStr = getFsTransactionKeys(datanotificationweeks.data.rOutputData.transaction[i].transactionKey);
            var programName = "&ProgramName=" + (datanotificationweeks.data.rOutputData.transaction[i].programName ? datanotificationweeks.data.rOutputData.transaction[i].programName : '');
            var workflowId = datanotificationweeks.data.rOutputData.transaction[i].workflowId == null ? '' : datanotificationweeks.data.rOutputData.transaction[i].workflowId;
            var linkto = datanotificationweeks.data.rOutputData.transaction[i].linkto == null ? '' : datanotificationweeks.data.rOutputData.transaction[i].linkto;
            var currentstep = datanotificationweeks.data.rOutputData.transaction[i].currentstep == null ? '' : datanotificationweeks.data.rOutputData.transaction[i].currentstep;
            var params = [datanotificationweeks.data.rOutputData.transaction[i].keyId 
                , datanotificationweeks.data.rOutputData.transaction[i].insuranceStatus 
                , datanotificationweeks.data.rOutputData.transaction[i].policyStatus 
                , workflowId 
                , linkto 
                , datanotificationweeks.data.rOutputData.transaction[i].readFlag 
                , currentstep 
                ];
            var elem_data = ['data-transactionkey="' + lTransactionKeyStr + '"'];
            elem_data.push('data-namesubheader="' + progId + '"');
            elem_data.push('data-parameter="' + (progParam + programName) + '"');

            if (datanotificationweeks.data.rOutputData.transaction[i].readFlag.toUpperCase() === 'N') {
                let weekshtml = '<a href="#" class="kt-notification__item" ' + (elem_data.join(" ")) + '>' +
                    '<div class="kt-notification__item-details">' +
                    '<div class="kt-notification__item-title font-size-custom-h-14-b">' + notimessege + '</div>' +
                    '<div class="kt-notification__item-time font-size-custom-d">' + lastestupdate + '</div>' +
                    '</div></a>';
                let alink = $(weekshtml).on("click",() => {
                    notificationOpen(params,this);
                });
                noti_container.append(alink);
            } else {
                let weekshtml = '<a href="#" class="kt-notification__item" ' + (elem_data.join(" ")) + '>' +
                    '<div class="kt-notification__item-details">' +
                    '<div class="kt-notification__item-title font-size-custom-h3-14">' + notimessege + '</div>' +
                    '<div class="kt-notification__item-time font-size-custom-d3">' + lastestupdate + '</div>' +
                    '</div></a>';
                let alink = $(weekshtml).on("click",() => {
                    notificationOpen(params,this);
                });
                noti_container.append(alink);
            }
        }
    } else {
        let weekshtml = ' <div class="kt-grid kt-grid--ver" style="min-height: 200px;">' +
            '<div class="kt-grid kt-grid--hor kt-grid__item kt-grid__item--fluid kt-grid__item--middle">' +
            '<div class="kt-grid__item kt-grid__item--middle kt-align-center font-size-custom-h2">All caught up!<br>No new notifications.</div>' +
            '</div>' +
            '</div>';
        noti_container.append($(weekshtml));
    }
}
async function getNewNotificationMonths() {
    window.parent.$("#noti_weeks").html("");
    let notimonths = window.parent.$("#noti_months");
    notimonths.html("");
    let cfg = createNotifyConfigure();
    let username = getCurrentUser();
    let urlstr = NOTIFY_API_URL + "/notify/api/Junt/GetNotificationMonths/" + username;
    window.parent.startWaiting();
    $.ajax({
        type: "GET",
        url: urlstr,
        headers: cfg.headers,
        dataType: "json",
        contentType: defaultContentType,
		error : function(transport,status,errorThrown) {
            console.error("getNewNotificationMonths: error",errorThrown," response",transport.responseText);
            window.parent.stopWaiting();
		},        
        success: (data, status, transport) => {
            console.log("getNewNotificationMonths: success",data);
            window.parent.stopWaiting();
            if (data?.rResultSet?.rResult == "SCUN0000") {
                showNotificationMonths({data: data});
            } else {
                notimonths.html(data?.rResultSet?.rErrorDesc_eng);
            }
        },
    });
}
function showNotificationMonths(datanotificationmonths) {
    let noti_container = window.parent.$("#noti_months");
    if (datanotificationmonths.data.rOutputData.transaction.length > 0) {
        for (var i = 0; i < datanotificationmonths.data.rOutputData.transaction.length; i++) {
            var progParam = datanotificationmonths.data.rOutputData.transaction[i].progParam == null ? '' : datanotificationmonths.data.rOutputData.transaction[i].progParam;
            var progId = datanotificationmonths.data.rOutputData.transaction[i].progId == null ? '' : datanotificationmonths.data.rOutputData.transaction[i].progId;
            var notimessege = getFsText(datanotificationmonths.data.rOutputData.transaction[i].e_NotiMessege, datanotificationmonths.data.rOutputData.transaction[i].t_Notimessege);
            var lastestupdate = datanotificationmonths.data.rOutputData.transaction[i].notiDate; 
            var lTransactionKeyStr = getFsTransactionKeys(datanotificationmonths.data.rOutputData.transaction[i].transactionKey);
            var programName = "&ProgramName=" + (datanotificationmonths.data.rOutputData.transaction[i].programName ? datanotificationmonths.data.rOutputData.transaction[i].programName : '');
            var workflowId = datanotificationmonths.data.rOutputData.transaction[i].workflowId == null ? '' : datanotificationmonths.data.rOutputData.transaction[i].workflowId;
            var linkto = datanotificationmonths.data.rOutputData.transaction[i].linkto == null ? '' : datanotificationmonths.data.rOutputData.transaction[i].linkto;
            var currentstep = datanotificationmonths.data.rOutputData.transaction[i].currentstep == null ? '' : datanotificationmonths.data.rOutputData.transaction[i].currentstep;
            var params = [ datanotificationmonths.data.rOutputData.transaction[i].keyId 
                , datanotificationmonths.data.rOutputData.transaction[i].insuranceStatus
                , datanotificationmonths.data.rOutputData.transaction[i].policyStatus 
                , workflowId 
                , linkto 
                , datanotificationmonths.data.rOutputData.transaction[i].readFlag 
                , currentstep 
                ];
            var elem_data = ['data-transactionkey="' + lTransactionKeyStr + '"'];
            elem_data.push('data-namesubheader="' + progId + '"');
            elem_data.push('data-parameter="' + (progParam + programName) + '"');

            if (datanotificationmonths.data.rOutputData.transaction[i].readFlag.toUpperCase() === 'N') {
                let monthhtml = '<a href="#" class="kt-notification__item" ' + (elem_data.join(" ")) + '>' +
                    '<div class="kt-notification__item-details">' +
                    '<div class="kt-notification__item-title font-size-custom-h-14-b">' + notimessege + '</div>' +
                    '<div class="kt-notification__item-time font-size-custom-d">' + lastestupdate + '</div>' +
                    '</div></a>';
                let alink = $(monthhtml).on("click",() => {
                    notificationOpen(params,this);
                });
                noti_container.append(alink);
            } else {
                let monthhtml = '<a href="#" class="kt-notification__item" ' + (elem_data.join(" ")) + '>' +
                    '<div class="kt-notification__item-details">' +
                    '<div class="kt-notification__item-title font-size-custom-h3-14">' + notimessege + '</div>' +
                    '<div class="kt-notification__item-time font-size-custom-d3">' + lastestupdate + '</div>' +
                    '</div></a>';
                let alink = $(monthhtml).on("click",() => {
                    notificationOpen(params,this);
                });
                noti_container.append(alink);
            }
        }
    } else {
        let monthhtml = ' <div class="kt-grid kt-grid--ver" style="min-height: 200px;">' +
            '<div class="kt-grid kt-grid--hor kt-grid__item kt-grid__item--fluid kt-grid__item--middle">' +
            '<div class="kt-grid__item kt-grid__item--middle kt-align-center font-size-custom-h2">All caught up!<br>No new notifications.</div>' +
            '</div>' +
            '</div>';
        noti_container.append($(monthhtml));
    }
}
async function notificationOpen(params, ths) {
    console.log("notificationOpen: params",params,", this",this);
    if (!params) {
        return false;
    }
    var lNameSubheader = $(ths).attr("data-namesubheader");
    checkAccessTask(params[3],(checkAccess) => {
        if (!checkAccess) {
            updateNotificationReaded(params, () => {
                window.parent.alertmsg("BCUN0039","This transaction is already complete.");
            });
        } else if (!params[3] || !lNameSubheader) { //
            updateNotificationReaded(params, () => {
                if (params[4]) {
                    load_url_content(params[4]);
                }
            });
        } else {
            updateNotificationReaded(params, () => {
                //editToDoList(ths);
            });
        }
    });
    return false;
}

async function checkAccessTask(workflowId, callback) {
    let data = {
        "pSessionID": getTokenKey(),
        "pUsername": "",
        "pInputData": {
            "action": "93",
            "workflowId": workflowId
        }
    }
    window.parent.startWaiting();
    $.ajax({
        type: "POST",
        url: NOTIFY_API_URL + "/workflow/api/workflow/callworkflow",
        dataType: "json",
        contentType: "application/json; charset=UTF-8",
        data: JSON.stringify(data),
		error : function(transport,status,errorThrown) {
            console.error("checkAccessTask: error",errorThrown,", response",transport.responseText);
		    window.parent.submitFailure(transport,status,errorThrown);
            if(callback) callback(false);
		},        
        success: function (data, status, transport) {
            console.log("checkAccessTask: success",data);
            window.parent.stopWaiting();
            let checkTask = false;
            if (data?.rResultSet?.rResult == "SCUN0000") {
                checkTask = data?.rOutputData?.taskInfo[0]?.checkAccessTask;
            }
            if(callback) callback(checkTask);
        },
    });
}
function updateNotificationReaded(params, callback) {
    if (!params) {
        return false;
    }
    if (params[5] !== 'N') {
        getNewNotification(notification_actions.READY, false, 0, true);
        getNewNotificationWeeks();
        getNewNotificationMonths();
        if (callback) {
            callback();
        }
        return;
    } else {
        let cfg = createNotifyConfigure();
        let urlstr = NOTIFY_API_URL + "/notify/api/Junt/UpdateRead";
        let data = { 'keyid': params[0] };
        window.parent.startWaiting();
        $.ajax({
            type: "POST",
            url: urlstr,
            headers: cfg.headers,
            dataType: "json",
            contentType: "application/json; charset=UTF-8",
            data: JSON.stringify(data),
            success: function (data, status, transport) {
                console.log("updateNotificationReaded: success", data);
                window.parent.stopWaiting();
                if (data?.header?.errorflag == "Y") {
                    window.parent.alertDialog("<strong>Error</strong> : " + data.header.errordesc);
                } else {
                    getNewNotification(notification_actions.READY, false, 0, true);
                    getNewNotificationWeeks();
                    getNewNotificationMonths();
                    if (callback) {
                        callback();
                    }
                }
            },
            error: function (resp) {
                console.error('updateNotificationReaded: error', resp);
                window.parent.stopWaiting();
            }
        });
    }
}
function load_url_content(url) {
    console.log("load_url_content: url",url);
    if (!url) return false;
    let tokenkey = getTokenKey();
    let language = getCurrentLanguage();
    let linkto = `${NOTIFY_WEB_URL}/elastic/${url}&fskey=${tokenkey}&culture=${language}`;
    window.parent.displayWorkingFrame(linkto);
}
function getFsText(texten, textth) {
    let language = getCurrentLanguage();
    return (language && "TH" == language.toUpperCase()) ? textth : texten;
}
function fsLocaleString(val, digits) {
    return val.toLocaleString('en-US', { minimumIntegerDigits: digits ? digits : val.length, useGrouping: false });
}
function getFsNotiDateDisplay(strDate) {
    try {
        let lastestupdate = new Date(strDate);
        return fsLocaleString(lastestupdate.getDate(), 2) + "/" + (fsLocaleString(lastestupdate.getMonth() + 1, 2)) + "/" + (getFsText(0, 543) + lastestupdate.getFullYear());
    } catch (ex) {
        console.error(ex);
    }
    return strDate;
}
function getFsTransactionKeys(transactionKeyArr) {
    let lTransactionKeyStr = '';
    for (let j = 0; j < transactionKeyArr.length; j++) {
        lTransactionKeyStr += "@@@" + transactionKeyArr[j].keyField + "=" + transactionKeyArr[j].keyValue;
    }
    return lTransactionKeyStr;
}
