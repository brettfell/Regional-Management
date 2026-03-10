const deck = [
    // --- MICHAEL SCOTT (Senioritis / Chaos) ---
    {
        character: "Michael Scott", image: "michael.gif",
        text: "I booked a 'Farewell Michael' booze cruise on Lake Wallenpaupack for this afternoon. Cancel all sales calls.",
        left: { text: "No, we have to work.", impact: { sales: +10, morale: -15, corporate: +10, budget: 0 } },
        right: { text: "Let's set sail!", impact: { sales: -20, morale: +20, corporate: -15, budget: -15 } }
    },
    {
        character: "Michael Scott", image: "michael.gif",
        text: "I ordered 500 meatball parm subs for the warehouse to 'boost synergy'. I need you to sign the invoice.",
        left: { text: "I'm not signing that.", impact: { sales: 0, morale: -10, corporate: +5, budget: +15 } },
        right: { text: "Sign the invoice.", impact: { sales: +5, morale: +15, corporate: -10, budget: -20 } }
    },
    {
        character: "Michael Scott", image: "michael.gif",
        text: "Toby is trying to make us do a seminar on 'professional boundaries'. I need you to back me up and boo him.",
        left: { text: "Toby is right.", impact: { sales: 0, morale: -15, corporate: +10, budget: 0 } },
        right: { text: "Boooo Toby!", impact: { sales: -5, morale: +15, corporate: -10, budget: 0 } }
    },
    {
        character: "Michael Scott", image: "michael.gif",
        text: "I accidentally promised Scott's Tots college tuition again. Can we pull $50,000 from the marketing budget?",
        left: { text: "Absolutely not.", impact: { sales: 0, morale: -5, corporate: +10, budget: 0 } },
        right: { text: "Give them laptop batteries.", impact: { sales: 0, morale: -10, corporate: -5, budget: -5 } }
    },

    // --- DWIGHT SCHRUTE (Power & Security) ---
    {
        character: "Dwight Schrute", image: "dwight.gif",
        text: "I have discovered a slight draft near my desk. I request $400 to install a thermal survival pod.",
        left: { text: "Put on a sweater.", impact: { sales: -5, morale: -5, corporate: 0, budget: 0 } },
        right: { text: "Approve the pod.", impact: { sales: +5, morale: +5, corporate: -5, budget: -10 } }
    },
    {
        character: "Dwight Schrute", image: "dwight.gif",
        text: "Jim has breached my perimeter. I need authorization to pepper spray him on company property.",
        left: { text: "Do not pepper spray Jim.", impact: { sales: +5, morale: +5, corporate: 0, budget: 0 } },
        right: { text: "You have authorization.", impact: { sales: -15, morale: -15, corporate: -10, budget: -5 } }
    },
    {
        character: "Dwight Schrute", image: "dwight.gif",
        text: "As Assistant TO the Regional Manager, I demand the power to fire temporary workers at will.",
        left: { text: "You have no power.", impact: { sales: 0, morale: +10, corporate: 0, budget: 0 } },
        right: { text: "Have at it.", impact: { sales: -10, morale: -15, corporate: -5, budget: +10 } }
    },

    // --- JIM HALPERT (Pranks & Laziness) ---
    {
        character: "Jim Halpert", image: "jim.gif",
        text: "I spent the last three hours moving Dwight's desk into the men's room. Tell him you don't know where it is.",
        left: { text: "Move it back, Jim.", impact: { sales: +10, morale: -10, corporate: +5, budget: 0 } },
        right: { text: "Play along.", impact: { sales: -10, morale: +15, corporate: -5, budget: 0 } }
    },
    {
        character: "Jim Halpert", image: "jim.gif",
        text: "Pam and I want to leave early today. We have... a thing. A paper thing. Very important.",
        left: { text: "Stay until 5:00.", impact: { sales: +10, morale: -10, corporate: +5, budget: 0 } },
        right: { text: "Have a good weekend.", impact: { sales: -10, morale: +10, corporate: -5, budget: 0 } }
    },

    // --- PAM BEESLY (Admin & Art) ---
    {
        character: "Pam Beesly", image: "pam.gif",
        text: "The microwave in the breakroom is a disaster zone. Can we afford to just buy a new one?",
        left: { text: "Clean it yourself.", impact: { sales: 0, morale: -15, corporate: 0, budget: 0 } },
        right: { text: "Buy a new one.", impact: { sales: 0, morale: +10, corporate: -5, budget: -10 } }
    },
    {
        character: "Pam Beesly", image: "pam.gif",
        text: "I want to paint a mural in the warehouse, but it will take me away from my desk for three days.",
        left: { text: "We need you at the desk.", impact: { sales: +5, morale: -10, corporate: +5, budget: 0 } },
        right: { text: "Paint the mural.", impact: { sales: -5, morale: +15, corporate: -5, budget: -5 } }
    },

    // --- STANLEY HUDSON (Apathy) ---
    {
        character: "Stanley Hudson", image: "stanley.gif",
        text: "It is Pretzel Day. I will not be answering my phone, checking my email, or making eye contact for the next hour.",
        left: { text: "Get back to work.", impact: { sales: +10, morale: -20, corporate: +5, budget: 0 } },
        right: { text: "Get in line.", impact: { sales: -10, morale: +15, corporate: -5, budget: 0 } }
    },
    {
        character: "Stanley Hudson", image: "stanley.gif",
        text: "Did I stutter? I said I'm not doing that paperwork until Tuesday.",
        left: { text: "Do it now.", impact: { sales: +5, morale: -15, corporate: +5, budget: 0 } },
        right: { text: "Tuesday is fine.", impact: { sales: -5, morale: +10, corporate: -5, budget: 0 } }
    },

    // --- CREED BRATTON (Chaos) ---
    {
        character: "Creed Bratton", image: "creed.gif",
        text: "I need you to sign this document. Don't read it. Just sign it. It proves I was here yesterday. Or someone who looks like me.",
        left: { text: "Call Toby.", impact: { sales: 0, morale: -5, corporate: +10, budget: 0 } },
        right: { text: "Sign it blindly.", impact: { sales: 0, morale: 0, corporate: -20, budget: 0 } }
    },
    {
        character: "Creed Bratton", image: "creed.gif",
        text: "We are out of toner. I know a guy who sells it out of his trunk for half price. Cash only.",
        left: { text: "Buy from corporate.", impact: { sales: 0, morale: 0, corporate: +5, budget: -10 } },
        right: { text: "Give Creed cash.", impact: { sales: -5, morale: 0, corporate: -10, budget: +15 } }
    },

    // --- ACCOUNTING (Kevin, Oscar, Angela) ---
    {
        character: "Kevin Malone", image: "kevin.gif",
        text: "I dropped my famous chili all over the lobby carpet. It's gonna cost a lot to clean.",
        left: { text: "Make Kevin pay for it.", impact: { sales: 0, morale: -15, corporate: +5, budget: +5 } },
        right: { text: "Pay for the cleaners.", impact: { sales: 0, morale: +5, corporate: -5, budget: -15 } }
    },
    {
        character: "Angela Martin", image: "angela.gif",
        text: "Kelly is wearing an outfit that violates the dress code. I demand you send her home immediately.",
        left: { text: "Leave Kelly alone.", impact: { sales: 0, morale: +10, corporate: -5, budget: 0 } },
        right: { text: "Send Kelly home.", impact: { sales: -10, morale: -10, corporate: +10, budget: 0 } }
    },
    {
        character: "Oscar Martinez", image: "oscar.gif",
        text: "If we don't spend our remaining $4,000 budget surplus by 5 PM, corporate will cut next year's budget.",
        left: { text: "Give it back to Corporate.", impact: { sales: 0, morale: -15, corporate: +20, budget: -5 } },
        right: { text: "Buy new copiers/chairs.", impact: { sales: +5, morale: +20, corporate: -10, budget: -15 } }
    },

    // --- THE ANNEX (Kelly, Toby, Ryan) ---
    {
        character: "Kelly Kapoor", image: "kelly.gif",
        text: "Ryan hasn't texted me back in an hour. I literally cannot do customer service until I go yell at him.",
        left: { text: "Answer the phones.", impact: { sales: +5, morale: -10, corporate: +5, budget: 0 } },
        right: { text: "Go find Ryan.", impact: { sales: -15, morale: +5, corporate: -5, budget: 0 } }
    },
    {
        character: "Toby Flenderson", image: "toby.gif",
        text: "We need to do radon testing in the basement. It costs $300, but it's an OSHA requirement.",
        left: { text: "Ignore Toby.", impact: { sales: 0, morale: +5, corporate: -15, budget: +10 } },
        right: { text: "Pay for the testing.", impact: { sales: 0, morale: -5, corporate: +5, budget: -10 } }
    },
    {
        character: "Ryan Howard", image: "ryan.gif",
        text: "I need $500 to fund 'WUPHF.com'. Think of it as an investment in the future of communication.",
        left: { text: "Get out of my office.", impact: { sales: 0, morale: 0, corporate: +5, budget: +5 } },
        right: { text: "Invest in WUPHF.", impact: { sales: -5, morale: +5, corporate: -10, budget: -15 } }
    },

    // --- PHYLLIS & MEREDITH ---
    {
        character: "Phyllis Vance", image: "phyllis.gif",
        text: "Bob Vance, Vance Refrigeration, is offering us a discount on a new office fridge if we give him free paper.",
        left: { text: "No free paper.", impact: { sales: 0, morale: -5, corporate: +10, budget: 0 } },
        right: { text: "Take the fridge deal.", impact: { sales: -10, morale: +10, corporate: -5, budget: +5 } }
    },
    {
        character: "Meredith Palmer", image: "meredith.gif",
        text: "It's casual Friday. I'm wearing a dress that is technically a shirt. Problem?",
        left: { text: "Go home and change.", impact: { sales: -5, morale: -10, corporate: +10, budget: 0 } },
        right: { text: "Just stay at your desk.", impact: { sales: 0, morale: +5, corporate: -15, budget: 0 } }
    },

    // --- WAREHOUSE (Darryl) ---
    {
        character: "Darryl Philbin", image: "darryl.gif",
        text: "Michael just drove the forklift into the racking. Again. We need $600 for repairs before someone dies.",
        left: { text: "Make Michael pay.", impact: { sales: 0, morale: -15, corporate: +10, budget: +5 } },
        right: { text: "Approve the repair cost.", impact: { sales: +5, morale: +5, corporate: 0, budget: -15 } }
    },

    // --- CORPORATE (David Wallace / Jo Bennett) ---
    {
        character: "David Wallace", image: "david.gif",
        text: "Your branch's expense reports are completely out of control. I need you to institute a 10% pay cut across the board.",
        left: { text: "I refuse.", impact: { sales: +5, morale: +15, corporate: -25, budget: -10 } },
        right: { text: "Institute the cuts.", impact: { sales: -15, morale: -30, corporate: +20, budget: +20 } }
    },
    {
        character: "Corporate Audit", image: "corporate.gif",
        text: "Jan Levinson is coming down for a surprise performance review. Have everyone clean their desks.",
        left: { text: "Keep selling paper.", impact: { sales: +15, morale: -10, corporate: -15, budget: 0 } },
        right: { text: "Halt work and clean.", impact: { sales: -20, morale: -5, corporate: +20, budget: 0 } }
    }
];
