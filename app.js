// --- STATE MANAGEMENT ---
let state = {
    sales: 50,
    morale: 50,
    corporate: 50,
    budget: 50
};

// --- THE CARD DECK (Test Batch) ---
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

let currentCardIndex = 0;

// --- DOM ELEMENTS ---
const fillSales = document.getElementById('fill-sales');
const fillMorale = document.getElementById('fill-morale');
const fillCorporate = document.getElementById('fill-corporate');
const fillBudget = document.getElementById('fill-budget');

const cardName = document.getElementById('card-name');
const cardText = document.getElementById('card-text');
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');

// --- ENGINE LOGIC ---
function updateUI() {
    // Keep stats between 0 and 100
    state.sales = Math.max(0, Math.min(100, state.sales));
    state.morale = Math.max(0, Math.min(100, state.morale));
    state.corporate = Math.max(0, Math.min(100, state.corporate));
    state.budget = Math.max(0, Math.min(100, state.budget));

    // Update the visual width of the bars
    fillSales.style.width = state.sales + '%';
    fillMorale.style.width = state.morale + '%';
    fillCorporate.style.width = state.corporate + '%';
    fillBudget.style.width = state.budget + '%';

    checkGameOver();
}

function loadCard() {
    // Pick a random card from the deck
    const card = deck[Math.floor(Math.random() * deck.length)];
    
    cardName.innerText = card.character;
    cardText.innerText = `"${card.text}"`;
    
    // Update button text to match the choices
    btnLeft.innerText = card.left.text;
    btnRight.innerText = card.right.text;

    // Attach the impact logic to the buttons
    btnLeft.onclick = () => applyImpact(card.left.impact);
    btnRight.onclick = () => applyImpact(card.right.impact);
}

function applyImpact(impact) {
    state.sales += impact.sales;
    state.morale += impact.morale;
    state.corporate += impact.corporate;
    state.budget += impact.budget;

    updateUI();
    loadCard(); // Instantly load the next card
}

function checkGameOver() {
    let reason = "";

    if (state.sales <= 0) reason = "Sales hit zero. The Scranton branch was absorbed by Stamford. You are fired.";
    if (state.budget <= 0) reason = "You bankrupted the branch. David Wallace drove down to fire you personally.";
    if (state.corporate <= 0) reason = "Corporate lost all faith in your leadership. You've been replaced by a smart AI.";
    if (state.morale <= 0) reason = "Morale is so low that Toby actually filed a report. HR stepped in and fired you.";
    
    if (state.morale >= 100) reason = "The office became a non-stop party. No work got done, and the branch was closed.";
    if (state.corporate >= 100) reason = "Corporate loved you so much they promoted you to Jan's job... but you were arrested for fraud.";

    if (reason !== "") {
        alert("GAME OVER: " + reason);
        // Reset the game
        state = { sales: 50, morale: 50, corporate: 50, budget: 50 };
        updateUI();
    }
}

// Start the game!
updateUI();
loadCard();

