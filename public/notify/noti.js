var connection;
$(function() {
    $("#sendbutton").on("click",function() { sendMessage(); });
    $("#bcbutton").on("click",function() { broadcastMessage(); });
    $("#clearbutton").on("click",function() { $("#messageInput").val(""); });
    $("#removebutton").on("click",function() { $("#messagesList").empty(); });
    startConnect();
});

function startConnect() {
    connection = new signalR.HubConnectionBuilder()
        .withUrl(NOTI_URL+"?fskey=my-key", { headers: { "Authorization": "my-key" } })
        .build();

    connection.on("ReceiveMessage", function (user, message) {
        const li = document.createElement("li");
        li.textContent = `${user}: ${message}`;
        document.getElementById("messagesList").appendChild(li);
    });
    connection.on("broadcastNotification", function (user, message) {
        const li = document.createElement("li");
        li.textContent = `${user}: ${message}`;
        document.getElementById("messagesList").appendChild(li);
    });
    connection.start().catch(err => console.error(err.toString()));
}
function sendMessage() {
    const user = document.getElementById("userInput").value;
    const message = document.getElementById("messageInput").value;
    connection.invoke("SendMessage", user, message).catch(err => console.error(err.toString()));
}
function broadcastMessage() {
    const user = document.getElementById("userInput").value;
    const message = document.getElementById("messageInput").value;
    connection.invoke("BroadcastMessage", user, message).catch(err => console.error(err.toString()));
}
