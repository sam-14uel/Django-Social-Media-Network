/*const ChatroomId = document.getElementById('room_id_value').value;
const chatSocket = new WebSocket('ws://' + window.location.host + '/ws/chats/c/' + ChatroomId + '/');
chatSocket.onopen = function (e) {
    console.log("The connection was set up successfully!");
};
chatSocket.onclose = function (e) {
    console.log("Something unexpected happened!");
};
document.querySelector("#id_message_send_input").focus();
document.querySelector("#id_message_send_input").onkeyup = function (e) {
    if (e.keyCode == 13) {
        document.querySelector("#id_message_send_button").click();
    }
};
document.querySelector("#id_message_send_button").onclick = function (e) {
    var messageInput = document.querySelector("#id_message_send_input").value;
    var currentTime = new Date();
    var time = currentTime.toLocaleTimeString();
    chatSocket.send(JSON.stringify({
        message: messageInput,
        username: "{{request.user.username}}",
        time: time,
    }));
};
chatSocket.onmessage = function (e) {
    const data = JSON.parse(e.data);
    var messageContainer = document.querySelector("#id_chat_item_container");
    var div = document.createElement("div");
    div.className = (data.username === "{{request.user.username}}") ? "my_message" : "response_message";
    div.innerHTML =
    `
        <p class="p_message">${data.message}</p>
    `
    ;
    document.querySelector("#id_message_send_input").value = "";
    messageContainer.appendChild(div);
    // Scroll to the bottom of the chat container
    messageContainer.scrollTop = messageContainer.scrollHeight;
};*/


const ChatroomId = document.getElementById('room_id_value').value;
const request_username = document.getElementById('request_user_username').value;
const fileInput = document.getElementById('fileInput');
const messageInput = document.getElementById('id_message_send_input');
const chatSocket = new WebSocket('ws://' + window.location.host + '/ws/chats/c/' + ChatroomId + '/');

chatSocket.onopen = function (e) {
    console.log("The connection was set up successfully!");
};
chatSocket.onclose = function (e) {
    console.log("Something unexpected happened!");
};

document.querySelector("#id_message_send_input").focus();
document.querySelector("#id_message_send_input").onkeyup = function (e) {
    if (e.keyCode == 13) {
        document.querySelector("#id_message_send_button").click();
    }
};

document.querySelector("#id_message_send_button").onclick = function (e) {
    const message = messageInput.value;
    //const file = fileInput.files[0];
    const file = ""
    var currentTime = new Date();
    var time = currentTime.toLocaleTimeString();

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            chatSocket.send(JSON.stringify({
                'message': message,
                'attachment': e.target.result,
                'username': request_username,
                'time': time,
                'file_name': file.name,
                'file_type': file.type,
            }));
        };
        reader.readAsDataURL(file);
    } else {
        chatSocket.send(JSON.stringify({
            'message': message,
            'attachment': null,
            'username': request_username,
            'time': time,
        }));
    }
    messageInput.value = '';
    fileInput.value = '';
};

chatSocket.onmessage = function(e) {
    const data = JSON.parse(e.data);
    const message = data.message;
    const attachment = data.attachment;
    const username = data.username;
    const chat_id = data.chat_id

    var messageContainer = document.querySelector("#id_chat_item_container");
    var div = document.createElement("div");
    div.className = (username === request_username) ? "my_message" : "response_message";
    div.id = "chat_id_" + chat_id
    

    if (attachment) {
        const fileType = attachment.split(';')[0].split(':')[1];

        if (fileType.startsWith('image/')) {
            div.innerHTML = `<img src="${attachment}" alt="">`
        } else if (fileType.startsWith('video/')) {
            div.innerHTML = ``
        } else if (fileType.startsWith('audio/')) {
            div.innerHTML = ``
        } else if (fileType.startsWith('application/')) {
            div.innerHTML = ``
        } else {
            div.innerHTML = ``
        }

        messageContainer.appendChild(div);
        // Scroll to the bottom of the chat container
        messageContainer.scrollTop = messageContainer.scrollHeight;
    } else {
        div.innerHTML = `<p class="p_message">${message}</p>`
    }
    messageContainer.appendChild(div);
    // Scroll to the bottom of the chat container
    messageContainer.scrollTop = messageContainer.scrollHeight;
};