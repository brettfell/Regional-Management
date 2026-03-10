const deck = [
    {
        character: "Michael Scott",
        image: "michael.gif", 
        text: "Since I'm leaving soon, I used the quarterly budget to buy a gold-plated Dundie polishing machine. You cool with that?",
        left: { text: "Return it immediately.", impact: { sales: 0, morale: -15, corporate: +15, budget: +20 } },
        right: { text: "That is a great legacy.", impact: { sales: -5, morale: +20, corporate: -20, budget: -30 } }
    },
    {
        character: "Dwight Schrute",
        image: "dwight.gif",
        text: "Michael always allowed me to keep concealed throwing stars taped under my desk. I assume this policy continues under your regime?",
        left: { text: "Absolutely not.", impact: { sales: 0, morale: -10, corporate: +10, budget: 0 } },
        right: { text: "Just keep them hidden.", impact: { sales: +5, morale: +5, corporate: -15, budget: 0 } }
    },
    {
        character: "Stanley Hudson",
        image: "stanley.gif",
        text: "Michael told me I could take a nap in my car until 2 PM today because of the transition stress. Do not wake me up.",
        left: { text: "Get back to work.", impact: { sales: +15, morale: -20, corporate: +5, budget: 0 } },
        right: { text: "Enjoy your nap.", impact: { sales: -20, morale: +15, corporate: -5, budget: 0 } }
    },
    {
        character: "Pam Beesly",
        image: "pam.gif",
        text: "Michael promised me a new office chair before he leaves, but he spent the money on magic tricks. Can I use petty cash?",
        left: { text: "We have no budget.", impact: { sales: -5, morale: -15, corporate: +10, budget: +10 } },
        right: { text: "Go buy the chair.", impact: { sales: +10, morale: +15, corporate: -5, budget: -20 } }
    },
    {
        character: "David Wallace",
        image: "david.gif",
        text: "We need you to sign off on Michael's final expense report. He expensed $400 for 'Goodbye-Vibes'. Deny it.",
        left: { text: "Deny the expense.", impact: { sales: 0, morale: -20, corporate: +20, budget: +15 } },
        right: { text: "Approve it quietly.", impact: { sales: 0, morale: +15, corporate: -25, budget: -20 } }
    },
    {
        character: "Creed Bratton",
        image: "creed.gif",
        text: "The new guy, huh? Listen, I need to use the baler to dispose of some... oversized organic material. Ask no questions.",
        left: { text: "Call HR.", impact: { sales: 0, morale: -15, corporate: +10, budget: 0 } },
        right: { text: "I saw nothing.", impact: { sales: 0, morale: +10, corporate: -15, budget: -5 } }
    },
    {
        character: "Michael Scott",
        image: "michael-meeting.gif",
        text: "I'm calling an emergency 3-hour conference room meeting to teach you the 'Scranton Strangler' threat level protocols.",
        left: { text: "Cancel the meeting.", impact: { sales: +20, morale: -15, corporate: +15, budget: 0 } },
        right: { text: "To the conference room!", impact: { sales: -30, morale: +25, corporate: -20, budget: 0 } }
    }
];
