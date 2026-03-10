let state = { sales: 50, morale: 50, corporate: 50, budget: 50 };
let lastCard = null; 

// NEW: Tracking Days and High Score
let days = 1;
let highScore = localStorage.getItem('officeHighScore') || 0;

const fillSales = document.getElementById('fill-sales');
const fillMorale = document.getElementById('fill-morale');
const fillCorporate = document.getElementById('fill-corporate');
const fillBudget = document.getElementById('fill-budget');

const cardImage = document.getElementById('card-image');
const cardName = document.getElementById('card-name');
const cardText = document.getElementById('card-text');
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');

// NEW: Scoreboard DOM Elements
const currentDayEl = document.getElementById('current-day');
const highScoreEl = document.getElementById('high-score');

function updateUI() {
    state.sales = Math.max(0, Math.min(100, state.sales));
    state.morale = Math.max(0, Math.min(100, state.morale));
    state.corporate = Math.max(0, Math.min(100, state.corporate));
    state.budget = Math.max(0, Math.min(100, state.budget));

    fillSales.style.width = state.sales + '%';
    fillMorale.style.width = state.morale + '%';
    fillCorporate.style.width = state.corporate + '%';
    fillBudget.style.width = state.budget + '%';

    // Update Scoreboard text
    currentDayEl.innerText = `Day: ${days}`;
    highScoreEl.innerText = `Best: ${highScore}`;

    checkGameOver();
}

function loadCard() {
    let card = deck[Math.floor(Math.random() * deck.length)];
    while (card === lastCard) {
        card = deck[Math.floor(Math.random() * deck.length)];
    }
    lastCard = card;
    
    cardImage.src = card.image;
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

    days++; // NEW: Advance the day with every swipe
    updateUI();
    loadCard();
}

function checkGameOver() {
    let reason = "";

    if (state.sales <= 0) reason = "Sales hit zero. The Scranton branch was absorbed by Stamford.";
    if (state.budget <= 0) reason = "You bankrupted the branch. David Wallace drove down to fire you personally.";
    if (state.corporate <= 0) reason = "Corporate lost all faith in your leadership. You've been replaced.";
    if (state.morale <= 0) reason = "Morale is so low that Toby filed a report. HR fired you.";
    
    if (state.morale >= 100) reason = "The office became a non-stop party. No work got done, and the branch closed.";
    if (state.corporate >= 100) reason = "Corporate loved you so much they promoted you... but you were arrested for fraud.";

    if (reason !== "") {
        // NEW: Check for High Score
        if (days > highScore) {
            highScore = days;
            localStorage.setItem('officeHighScore', highScore);
            reason += `\n\n🏆 NEW HIGH SCORE: ${days} Days!`;
        } else {
            reason += `\n\nYou survived ${days} Days. (Best: ${highScore})`;
        }

        document.getElementById('game-over-reason').innerText = reason;
        document.getElementById('game-over-modal').style.display = 'flex';
    }
}

// Modal Restart Button Logic
document.getElementById('restart-btn').onclick = () => {
    state = { sales: 50, morale: 50, corporate: 50, budget: 50 };
    days = 1; // Reset days
    document.getElementById('game-over-modal').style.display = 'none';
    updateUI();
    loadCard();
};

updateUI();
loadCard();
