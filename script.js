const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");

let userMessage;

const createChatLi = (message, className) => {
    // Create a chat <li> element with passed message and className
    const chatLi =document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "chat-outgoing" ? '<p>${message}</p>' : <p>${message}</p>;
    chatLi.innerHTML = chatContent;
    return chatLi;
}

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if(!userMessage) return;

    //Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "chat-outgoing"));

    setTimeout(() => {
        //
        chatbox.appendChild(createChatLi("Typing...", "chat-incoming"));
    }, 600 );
}


sendChatBtn.addEventListener("click", handleChat);