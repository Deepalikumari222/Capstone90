const chatbox = document.getElementById('chatbox');
const input = document.getElementById('user-input');

function appendMessage(sender, text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'message ' + sender;
    const bubble = document.createElement('div');
    bubble.className = 'bubble ' + sender;
    bubble.textContent = text;
    msgDiv.appendChild(bubble);
    chatbox.appendChild(msgDiv);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function getBotResponse(message) {
    message = message.toLowerCase();
    // Academic queries
    if (message.includes('course') || message.includes('exam') || message.includes('grade') || message.includes('academic')) {
        return "For academic queries, please check the student portal or contact your academic advisor.";
    }
    // Campus queries
    if (message.includes('library') || message.includes('canteen') || message.includes('building') || message.includes('campus')) {
        return "For campus-related questions, visit the campus office or check the campus website for details.";
    }
    // General queries
    if (message.includes('hello') || message.includes('hi') || message.includes('help') || message.includes('general')) {
        return "Hello! You can ask me about academic, campus, or general information anytime.";
    }
    // Fallback
    return "I'm here to help! Please specify if your question is about academics, campus, or something general.";
}

function sendMessage() {
    const userMsg = input.value.trim();
    if (!userMsg) return;
    appendMessage('user', userMsg);
    setTimeout(() => {
        const botReply = getBotResponse(userMsg);
        appendMessage('bot', botReply);
    }, 500);
    input.value = '';
}

input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') sendMessage();
});
