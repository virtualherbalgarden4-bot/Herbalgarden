/* ===== Local Chatbot Logic - chatbot.js ===== */
(function() {
  const toggle = document.getElementById('chat-toggle');
  const win = document.getElementById('chat-window');
  const closeBtn = document.getElementById('chat-close');
  const sendBtn = document.getElementById('chat-send');
  const input = document.getElementById('chat-input');
  const messages = document.getElementById('chat-messages');
  const suggests = document.getElementById('chat-suggests');

  const PLANTS = (window.plants && Array.isArray(window.plants) && window.plants.length)
    ? window.plants
    : [
        { name: "Tulsi", botanical: "Holy Basil", soil: "Loamy", water: "Moderate", uses: "Immunity", description: "Sacred herb used in Ayurveda." },
        { name: "Aloe Vera", botanical: "Aloe barbadensis", soil:"Sandy", water: "Low", uses: "Skin care", description: "Succulent used for burns and healing." }
      ];

  // helper to append messages
  function append(msg, who='bot', className='') {
    const el = document.createElement('div');
    el.className = 'msg ' + (who === 'user' ? 'user' : 'bot') + (className ? ' ' + className : '');
    el.innerHTML = msg;
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
    return el;
  }

  // ====== Typing animation ======
  let typingEl = null;
  function showTyping() {
    typingEl = append("Herbal Assistant is typing<span class='dots'>...</span>", 'bot', 'typing');
  }
  function hideTyping() {
    if (typingEl) typingEl.remove();
    typingEl = null;
  }

  // quick suggestions
  const quicks = [
    "List ayurveda plants",
    "How to grow Tulsi",
    "Which plants for immunity?",
    "Show 3D model for Aloe Vera",
    "Soil for Mint"
  ];
  quicks.forEach(q => {
    const b = document.createElement('button');
    b.textContent = q;
    b.onclick = () => { input.value = q; input.focus(); };
    suggests.appendChild(b);
  });

  // open / close
  toggle.addEventListener('click', () => {
    win.style.display = win.style.display === 'flex' ? 'none' : 'flex';
    if (win.style.display === 'flex' && !messages.hasChildNodes()) {
      append("Hi — I'm your Virtual Herbal Assistant 🌿. Ask me about plants, growing tips, or 3D models.");
    }
  });
  closeBtn?.addEventListener('click', () => { win.style.display = 'none'; });

  // send
  input.addEventListener('keydown', e => { if (e.key === 'Enter') send(); });
  sendBtn.addEventListener('click', send);

  function send() {
    const text = input.value.trim();
    if (!text) return;
    append(text, 'user');
    input.value = '';
    showTyping();
    setTimeout(() => {
      hideTyping();
      processInput(text);
    }, 1000);
  }

  // main logic
  function processInput(text) {
    const q = text.toLowerCase();
    const byName = PLANTS.find(p => q.includes(p.name.toLowerCase()));
    if (byName) {
      return append(`<strong>${byName.name}</strong> — ${byName.description}<br><strong>Soil:</strong> ${byName.soil} | <strong>Water:</strong> ${byName.water}`);
    }
    if (q.includes('list')) {
      append("<strong>Available plants:</strong><br>" + PLANTS.map(p=>`• ${p.name}`).join('<br>'));
      return;
    }
    if (q.includes('immunity')) {
      append("🌿 Plants that help immunity include Tulsi, Neem, and Amla.");
      return;
    }

    // fallback for random questions (Part 2)
    getAIResponse(q);
  }

  // ====== Part 2: simple local AI fallback ======
  function getAIResponse(q) {
    // This is a basic keyword-based fallback. 
    // You can extend it or replace it later with OpenAI API or a small LLM.
    if (q.includes('hello') || q.includes('hi')) {
      append("Hey there! 🌸 How can I assist with your herbal queries today?");
    } 
    else if (q.includes('thank')) {
      append("You're most welcome 🌿!");
    } 
    else if (q.includes('help')) {
      append("You can ask me things like:<br>• How to grow Tulsi<br>• List Ayurveda plants<br>• Soil for Neem");
    } 
    else {
      append("Hmm 🤔 I don't have that info yet, but I'm learning! Try asking about a specific plant or topic.");
    }
  }

  // helpers
  function escapeHtml(s) { return String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }

})();
