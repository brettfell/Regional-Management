const deck = [
    {
        character: "Dwight Schrute",
        image: "dwight.gif", 
        text: "I found a clove cigarette in the parking lot. I need authorization to lock down the building and interrogate everyone.",
        left: { text: "Absolutely not.", impact: { sales: 0, morale: +10, corporate: -5, budget: 0 } },
        right: { text: "Do it.", impact: { sales: -20, morale: -20, corporate: +10, budget: 0 } }
    },
    {
        character: "Michael Scott",
        image: "michael.gif",
        text: "I want to rent a bouncy castle for the warehouse. It will drastically improve team synergy. Just sign this expense report.",
        left: { text: "No budget.", impact: { sales: +5, morale: -15, corporate: +10, budget: 0 } },
        right: { text: "Here is the card.", impact: { sales: -10, morale: +25, corporate: -20, budget: -30 } }
    },
    {
        character: "Jim Halpert",
        image: "jim.gif",
        text: "I put Dwight's stapler in jello again, but I need 50 bucks from petty cash to reimburse him for the ruined stapler.",
        left: { text: "Grow up, Jim.", impact: { sales: +10, morale: -10, corporate: +5, budget: 0 } },
        right: { text: "Worth it. Here's $50.", impact: { sales: -5, morale: +15, corporate: -10, budget: -10 } }
    }
];
