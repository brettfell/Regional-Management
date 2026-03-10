let state = { sales: 50, morale: 50, corporate: 50, budget: 50 };
let lastCard = null; // Tracks the last card drawn to prevent repeats

const deck = [
    {
        character: "Dwight Schrute",
        text: "I found a clove cigarette in the parking lot. I need authorization to lock down the building and interrogate everyone.",
        left: { text: "Absolutely not.", impact: { sales: 0, morale: +10, corporate: -5, budget: 0 } },
        right: { text: "Do it.", impact: { sales: -20, morale: -20, corporate: +10, budget: 0 } }
    },
    {
        character: "Michael Scott",
        text: "I want to rent a bouncy castle for the warehouse. It will drastically improve team synergy. Just sign this expense report.",
        left: { text: "We don't have the budget.", impact: { sales: +5, morale: -15, corporate: +10, budget: 0 } },
        right: { text: "Here is the company card.", impact: { sales: -10, morale: +25, corporate: -20, budget: -30 } }
    },
    {
        character: "Jim Halpert",
        text: "I put Dwight's stapler in jello again, but I need 50 bucks from petty cash to reimburse him for the ruined stapler.",
        left: { text: "Grow up, Jim.", impact: { sales: +10, morale: -10, corporate: +5, budget: 0 } },
        right: { text: "Worth it. Here's $50.", impact: { sales: -5, morale: +15, corporate: -10, budget: -10 } }
    }
];

const fillSales = document.getElementById('fill-sales');
const fillMorale = document.getElementById('fill-morale');
const fillCorporate = document.getElementById('fill-corporate');
const fillBudget = document.getElementById('fill-budget');

const cardName = document.getElementById('card-name');
const cardText = document.getElementById('card-text');
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');

function updateUI() {
    state.sales = Math.max(0, Math.min(100, state.sales));
    state.morale = Math.max(0, Math.min(100, state.morale));
    state.corporate = Math.max(0, Math.min(100, state.corporate));
    state.budget = Math.max(0, Math.min(100, state.budget));

    fillSales.style.width = state.sales + '%';
    fillMorale.style.width = state.morale + '%';
    fillCorporate.style.width = state.corporate + '%';
    fillBudget.style.width = state.budget + '%';

    checkGameOver();
}

function loadCard() {
    // Pick a random card, but refuse to draw the exact same one twice
    let card = deck[Math.floor(Math.random() * deck.length)];
    while (card === lastCard) {
        card = deck[Math.floor(Math.random() * deck.length)];
    }
    lastCard = card;
    
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
        document.getElementById('game-over-reason').innerText = reason;
        document.getElementById('game-over-modal').style.display = 'flex';
    }
}

// Modal Restart Button Logic
document.getElementById('restart-btn').onclick = () => {
    state = { sales: 50, morale: 50, corporate: 50, budget: 50 };
    document.getElementById('game-over-modal').style.display = 'none';
    updateUI();
    loadCard();
};

updateUI();
loadCard();
