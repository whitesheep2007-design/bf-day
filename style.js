// --- 1. Custom Data (Edit these text values!) ---
const reasons = [
    "How you always know exactly how to make me smile. 😊",
    "Your warm, comforting hugs that make all my stress melt away. 🫂",
    "The way you fiercely support my goals and passions. 🚀",
    "Your beautiful heart and the kindness you show to everyone. ✨",
    "Simply because being around you makes everything better. ❤️"
];

let currentReasonIndex = -1;

// --- 2. Reason Cycler Function ---
function nextReason() {
    const reasonBox = document.getElementById('reasonBox');
    currentReasonIndex = (currentReasonIndex + 1) % reasons.length;
    
    reasonBox.style.opacity = 0;
    setTimeout(() => {
        reasonBox.textContent = reasons[currentReasonIndex];
        reasonBox.style.opacity = 1;
    }, 150);
}

// --- 3. Interactive Letter & Confetti ---
function openLetter() {
    const letter = document.getElementById('letterContent');
    const envelopeTitle = document.getElementById('envelopeTitle');
    
    if (letter.style.display === 'none' || letter.style.display === '') {
        letter.style.display = 'block';
        envelopeTitle.textContent = "Open Letter";
        
        // Confetti effect burst
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff4d6d', '#ff85a2', '#ffb3c1']
        });
    } else {
        letter.style.display = 'none';
        envelopeTitle.textContent = "You have a hidden love letter!";
    }
}

// --- 4. Generating Floating Hearts Background ---
function createFloatingHearts() {
    const container = document.getElementById('heartsContainer');
    const heartSymbols = ['❤️', '💖', '💝', '💕'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        
        heart.innerText = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = Math.random() * 15 + 15 + 'px';
        
        const duration = Math.random() * 3 + 4;
        heart.style.animationDuration = duration + 's';
        
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }, 600);
}

// Start background animation loop on page load
createFloatingHearts();
