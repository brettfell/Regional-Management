// --- AUTO-SAVE LOADER ---
// Check if a game was saved previously
let savedGame = JSON.parse(localStorage.getItem('officeSaveState'));

// If a save exists, load it. If not, start fresh!
let state = savedGame ? savedGame.state : { sales: 50, morale: 50, corporate: 50, budget: 50 };
let activeDeck = savedGame ? savedGame.activeDeck : []; 
let days = savedGame ? savedGame.days : 1;

let highScore = localStorage.getItem('officeHighScore') || 0;
let unlockedDundies = JSON.parse(localStorage.getItem('officeDundies')) || [];

const fillSales = document.getElementById('fill-sales');
const fillMorale = document.getElementById('fill-morale');
const fillCorporate = document.getElementById('fill-corporate');
const fillBudget = document.getElementById('fill-budget');

const cardImage = document.getElementById('card-image');
const cardName = document.getElementById('card-name');
const cardText = document.getElementById('card-text');
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');

const currentDayEl = document.getElementById('current-day');
const highScoreEl = document.getElementById('high-score');
const themeSong = document.getElementById('theme-song');

const dundiesList = [
    { id: "survivor_30", name: "The Survivor Dundie", desc: "Survive 30 Days in a single run.", icon: "🗓️" },
    { id: "survivor_50", name: "The Golden Ticket Dundie", desc: "Survive 50 Days in a single run.", icon: "🎫" },
    { id: "fired_morale", name: "The Toby Dundie", desc: "Get fired because Morale hit 0%.", icon: "🐌" },
    { id: "fired_corporate_100", name: "The Ryan Howard Dundie", desc: "Get arrested for fraud (Corporate hit 100%).", icon: "📱" },
    { id: "fired_budget", name: "The Michael Scott Paper Co. Dundie", desc: "Bankrupt the branch (Budget hit 0%).", icon: "💸" },
    { id: "party_100", name: "The Party Planning Dundie", desc: "Throw a non-stop party (Morale hit 100%).", icon: "🎈" },
    { id: "fired_sales", name: "The Stamford Merge Dundie", desc: "Get absorbed by Stamford (Sales hit 0%).", icon: "📦" }
];

document.getElementById('start-btn').onclick = () => {
    document.getElementById('start-modal').style.display = 'none';
    if(themeSong) {
        themeSong.volume = 0.3; 
        themeSong.play().catch(e => console.log("Audio play blocked."));
    }
    updateUI();
    loadCard();
};

document.getElementById('dundies-btn').onclick = () => {
    renderDundies();
    document.getElementById('dundies-modal').style.display = 'flex';
};

document.getElementById('close-dundies-btn').onclick = () => {
    document.getElementById('dundies-modal').style.display = 'none';
};

function renderDundies() {
    const list = document.getElementById('dundies-list');
    list.innerHTML = '';
    dundiesList.forEach(d => {
        const isUnlocked = unlockedDundies.includes(d.id);
        list.innerHTML += `
            <div class="dundie-item ${isUnlocked ? 'unlocked' : ''}">
                <div class="dundie-icon">${isUnlocked ? d.icon : '🔒'}</div>
                <div class="dundie-info">
                    <h4>${isUnlocked ? d.name : '???'}</h4>
                    <p>${isUnlocked ? d.desc : 'Keep playing to unlock.'}</p>
                </div>
            </div>
        `;
    });
}

function checkDundieUnlock(id) {
    if (!unlockedDundies.includes(id)) {
        unlockedDundies.push(id);
        localStorage.setItem('officeDundies', JSON.stringify(unlockedDundies));
        let dundieObj = dundiesList.find(d => d.id === id);
        return dundieObj ? `\n\n🏆 UNLOCKED: ${dundieObj.name}!` : '';
    }
    return '';
}

function updateUI() {
    state.sales = Math.max(0, Math.min(100, state.sales));
    state.morale = Math.max(0, Math.min(100, state.morale));
    state.corporate = Math.max(0, Math.min(100, state.corporate));
    state.budget = Math.max(0, Math.min(100, state.budget));

    fillSales.style.width = state.sales + '%';
    fillMorale.style.width = state.morale + '%';
    fillCorporate.style.width = state.corporate + '%';
    fillBudget.style.width = state.budget + '%';

    fillSales.classList.toggle('danger', state.sales <= 20 || state.sales >= 80);
    fillMorale.classList.toggle('danger', state.morale <= 20 || state.morale >= 80);
    fillCorporate.classList.toggle('danger', state.corporate <= 20 || state.corporate >= 80);
    fillBudget.classList.toggle('danger', state.budget <= 20 || state.budget >= 80);

    currentDayEl.innerText = `Day: ${days}`;
    highScoreEl.innerText = `Best: ${highScore}`;
    checkGameOver();
}

function loadCard() {
    if (typeof deck === 'undefined' || deck.length === 0) return;

    if (activeDeck.length === 0) activeDeck = [...deck]; 

    const randomIndex = Math.floor(Math.random() * activeDeck.length);
    const card = activeDeck.splice(randomIndex, 1)[0]; 
    
    if (cardImage) {
        cardImage.src = card.image || "";
        cardImage.style.display = card.image ? 'inline-block' : 'none';
    }

    cardName.innerText = card.character;
    cardText.innerText = `"${card.text}"`;
    btnLeft.innerText = card.left.text;
    btnRight.innerText = card.right.text;

    btnLeft.onclick = () => applyImpact(card.left.impact);
    btnRight.onclick = () => applyImpact(card.right.impact);
}

function applyImpact(impact) {
    state.sales += impact.sales;
    state.morale += impact.morale;
    state.corporate += impact.corporate;
    state.budget += impact.budget;

    days++; 
    if (days === 30) checkDundieUnlock('survivor_30');
    if (days === 50) checkDundieUnlock('survivor_50');

    // NEW: Auto-save the game every time you swipe!
    localStorage.setItem('officeSaveState', JSON.stringify({
        state: state,
        days: days,
        activeDeck: activeDeck
    }));

    updateUI();
    loadCard();
}

function checkGameOver() {
    let reason = "";
    let newDundieText = "";

    if (state.sales <= 0) { reason = "Sales hit zero. The Scranton branch was absorbed by Stamford."; newDundieText = checkDundieUnlock('fired_sales'); }
    else if (state.budget <= 0) { reason = "You bankrupted the branch. David Wallace drove down to fire you personally."; newDundieText = checkDundieUnlock('fired_budget'); }
    else if (state.corporate <= 0) { reason = "Corporate lost all faith in your leadership. You've been replaced."; }
    else if (state.morale <= 0) { reason = "Morale is so low that Toby filed a report. HR fired you."; newDundieText = checkDundieUnlock('fired_morale'); }
    else if (state.morale >= 100) { reason = "The office became a non-stop party. No work got done, and the branch closed."; newDundieText = checkDundieUnlock('party_100'); }
    else if (state.corporate >= 100) { reason = "Corporate loved you so much they promoted you... but you were arrested for fraud."; newDundieText = checkDundieUnlock('fired_corporate_100'); }

    if (reason !== "") {
        if (days > highScore) {
            highScore = days;
            localStorage.setItem('officeHighScore', highScore);
            reason += `\n\n🏆 NEW HIGH SCORE: ${days} Days!`;
        } else {
            reason += `\n\nYou survived ${days} Days. (Best: ${highScore})`;
        }
        
        reason += newDundieText;

        // NEW: If you get fired, delete the save file so you can't cheat!
        localStorage.removeItem('officeSaveState');

        document.getElementById('game-over-reason').innerText = reason;
        document.getElementById('game-over-modal').style.display = 'flex';
    }
}

document.getElementById('restart-btn').onclick = () => {
    state = { sales: 50, morale: 50, corporate: 50, budget: 50 };
    days = 1; 
    activeDeck = []; 
    localStorage.removeItem('officeSaveState'); // Clear save to be safe
    document.getElementById('game-over-modal').style.display = 'none';
    updateUI();
    loadCard();
};

// --- SWIPE MECHANICS ---
const cardElement = document.getElementById('active-card');
let isDragging = false;
let startX = 0;
let currentX = 0;

cardElement.addEventListener('touchstart', (e) => startDrag(e.touches[0].clientX));
cardElement.addEventListener('touchmove', (e) => onDrag(e.touches[0].clientX));
cardElement.addEventListener('touchend', stopDrag);

cardElement.addEventListener('mousedown', (e) => startDrag(e.clientX));
document.addEventListener('mousemove', (e) => onDrag(e.clientX));
document.addEventListener('mouseup', stopDrag);

function startDrag(x) {
    isDragging = true;
    startX = x;
    cardElement.style.transition = 'none'; 
}

function onDrag(x) {
    if (!isDragging) return;
    currentX = x;
    const deltaX = currentX - startX;
    const rotate = deltaX * 0.05; 
    cardElement.style.transform = `translate(${deltaX}px, 0) rotate(${rotate}deg)`;
}

function stopDrag() {
    if (!isDragging) return;
    isDragging = false;
    
    const deltaX = currentX - startX;
    cardElement.style.transition = 'transform 0.3s ease'; 
    
    if (deltaX > 100) {
        btnRight.click(); 
    } else if (deltaX < -100) {
        btnLeft.click();  
    }
    
    cardElement.style.transform = '';
    startX = 0;
    currentX = 0;
}
