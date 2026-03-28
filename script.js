const API_KEY = "AIzaSyD956_ewxaT_fo4C4SQGEm8gZk1CmclHxU"; 
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + API_KEY;

document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const startSection = document.getElementById('start-section');
    const chatContainer = document.getElementById('chat-container');
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const chatWindow = document.getElementById('chat-window');

    // Simülasyonu Başlat
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            startSection.classList.add('hidden');
            chatContainer.classList.remove('hidden');
        });
    }

    // Mesaj Gönderme
    async function sendMessage(text) {
        if (!text.trim()) return;

        addMessage(text, 'user-message');
        userInput.value = '';
        const loadingDiv = addMessage("Düşünüyorum...", 'ai-message');

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: `Sen 'Adım Adım Şifa' projesinin sakinleştirici hastane rehberisin. Özel gereksinimli bireylere basit ve kısa cümlelerle yardım et. Kullanıcı dedi ki: ${text}` }] }]
                })
            });

            const data = await response.json();
            loadingDiv.remove();

            if (data.candidates && data.candidates[0].content.parts[0].text) {
                addMessage(data.candidates[0].content.parts[0].text, 'ai-message');
            } else {
                throw new Error("API Hatası");
            }
        } catch (error) {
            console.log("Yedek sistem devrede...");
            setTimeout(() => {
                loadingDiv.remove();
                const fallbacks = [
                    "Yanındayım, her şey yolunda.",
                    "Derin bir nefes al, çok cesursun.",
                    "Seni anlıyorum, birlikte halledeceğiz.",
                    "Harika gidiyorsun, biraz sakinleşelim mi?"
                ];
                addMessage(fallbacks[Math.floor(Math.random() * fallbacks.length)], 'ai-message');
            }, 1000);
        }
    }

    // Gönder Butonu ve Enter Tuşu
    sendBtn.addEventListener('click', () => sendMessage(userInput.value));
    userInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(userInput.value); });

    // Hızlı Butonlar (AAC İletişimi)
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            sendMessage(btn.getAttribute('data-msg'));
        });
    });

    function addMessage(text, className) {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('message', className);
        msgDiv.innerText = text;
        chatWindow.appendChild(msgDiv);
        chatWindow.scrollTop = chatWindow.scrollHeight;
        return msgDiv;
    }
});