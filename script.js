document.getElementById('sendBTN').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput !== '') {
        appendMessage('user', userInput);
        generateResponse(userInput);
        document.getElementById('user-input').value = '';
    }
}

function appendMessage(sender, message) {
    const chatbox = document.getElementById('chatbox');
    const chatMessage = document.createElement('li');
    chatMessage.classList.add('chat', sender === 'user' ? 'chat-outgoing' : 'chat-incoming');
    chatMessage.innerHTML = `<p>${message}</p>`;
    chatbox.appendChild(chatMessage);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function generateResponse(userInput) {
    const responses = {
        "hello": "Hi there! How can I assist you today?",
        "how are you": "I'm just a bot, but I'm here to help you!",
        "bye": "Goodbye! Have a great day!",
        "default": "I'm sorry, I didn't understand that. Can you please rephrase?"
    };

    const response = responses[userInput.toLowerCase()] || responses["default"];
    setTimeout(() => {
        appendMessage('bot', response);
    }, 1000);
}

function cancel() {
    document.querySelector('.chatBot').style.display = 'none';
}
