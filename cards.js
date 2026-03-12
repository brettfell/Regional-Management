const deck = [
    // --- MICHAEL SCOTT ---
    {
        character: "Michael Scott", image: "michael.gif", 
        text: "Since I'm leaving soon, I used the quarterly budget to buy a gold-plated Dundie polishing machine. You cool with that?",
        left: { text: "Return it immediately.", impact: { sales: 0, morale: -15, corporate: +15, budget: +20 } },
        right: { text: "That is a great legacy.", impact: { sales: -5, morale: +20, corporate: -20, budget: -30 } }
    },
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
    {
        character: "Michael Scott", image: "michael.gif",
        text: "I am hiding golden tickets in five boxes of paper. Whoever finds them gets 10% off their order. Good idea, right?",
        left: { text: "Too much liability.", impact: { sales: -5, morale: -5, corporate: +10, budget: 0 } },
        right: { text: "Pure genius.", impact: { sales: +15, morale: +10, corporate: -20, budget: -15 } }
    },
    {
        character: "Michael Scott", image: "michael.gif",
        text: "Todd Packer just left a 'package' in my office as a joke. I need the cleaning crew in here immediately.",
        left: { text: "Clean it yourself.", impact: { sales: 0, morale: -10, corporate: +5, budget: 0 } },
        right: { text: "Hire emergency cleaners.", impact: { sales: 0, morale: +5, corporate: -5, budget: -15 } }
    },
    {
        character: "Michael Scott", image: "michael.gif",
        text: "I stepped on a George Foreman grill this morning. I need someone to come rub butter on my foot.",
        left: { text: "Absolutely not.", impact: { sales: +5, morale: -15, corporate: +5, budget: 0 } },
        right: { text: "Send Ryan.", impact: { sales: -5, morale: +10, corporate: -5, budget: 0 } }
    },
    {
        character: "Michael Scott", image: "michael.gif",
        text: "I'm calling an emergency 3-hour conference room meeting to teach you the 'Scranton Strangler' threat level protocols.",
        left: { text: "Cancel the meeting.", impact: { sales: +20, morale: -15, corporate: +15, budget: 0 } },
        right: { text: "To the conference room!", impact: { sales: -30, morale: +25, corporate: -20, budget: 0 } }
    },

    // --- DWIGHT SCHRUTE ---
    {
        character: "Dwight Schrute", image: "dwight.gif",
        text: "Michael always allowed me to keep concealed throwing stars taped under my desk. I assume this policy continues under your regime?",
        left: { text: "Absolutely not.", impact: { sales: 0, morale: -10, corporate: +10, budget: 0 } },
        right: { text: "Just keep them hidden.", impact: { sales: +5, morale: +5, corporate: -15, budget: 0 } }
    },
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
    {
        character: "Dwight Schrute", image: "dwight.gif",
        text: "I have noticed a decrease in productivity. I will begin locking the main doors from 8 AM to 5 PM.",
        left: { text: "That is a fire hazard.", impact: { sales: 0, morale: +10, corporate: +5, budget: 0 } },
        right: { text: "Good initiative.", impact: { sales: +15, morale: -20, corporate: -10, budget: 0 } }
    },
    {
        character: "Dwight Schrute", image: "dwight.gif",
        text: "I brought in a goose that I hit with my car. I plan to prepare it in the breakroom for lunch.",
        left: { text: "Throw it out.", impact: { sales: 0, morale: +15, corporate: +5, budget: 0 } },
        right: { text: "It's a Christmas miracle.", impact: { sales: -10, morale: -20, corporate: -5, budget: +5 } }
    },

    // --- JIM HALPERT ---
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
    {
        character: "Jim Halpert", image: "jim.gif",
        text: "I convinced Dwight that it's Thursday instead of Friday. Please don't tell him, it's the only thing keeping me going.",
        left: { text: "Tell Dwight the truth.", impact: { sales: +5, morale: -10, corporate: 0, budget: 0 } },
        right: { text: "Keep the secret.", impact: { sales: -5, morale: +15, corporate: -5, budget: 0 } }
    },

    // --- PAM BEESLY ---
    {
        character: "Pam Beesly", image: "pam.gif",
        text: "Michael promised me a new office chair before he leaves, but he spent the money on magic tricks. Can I use petty cash?",
        left: { text: "We have no budget.", impact: { sales: -5, morale: -15, corporate: +10, budget: +10 } },
        right: { text: "Go buy the chair.", impact: { sales: +10, morale: +15, corporate: -5, budget: -20 } }
    },
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
    {
        character: "Pam Beesly", image: "pam.gif",
        text: "Jim and I want to start a 'Finer Things Club' in the breakroom. No paper, plastics, or Andy allowed.",
        left: { text: "Deny the club.", impact: { sales: +5, morale: -10, corporate: +5, budget: 0 } },
        right: { text: "Approve the club.", impact: { sales: -10, morale: +15, corporate: -5, budget: 0 } }
    },

    // --- STANLEY HUDSON ---
    {
        character: "Stanley Hudson", image: "stanley.gif",
        text: "Michael told me I could take a nap in my car until 2 PM today because of the transition stress. Do not wake me up.",
        left: { text: "Get back to work.", impact: { sales: +15, morale: -20, corporate: +5, budget: 0 } },
        right: { text: "Enjoy your nap.", impact: { sales: -20, morale: +15, corporate: -5, budget: 0 } }
    },
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
    {
        character: "Stanley Hudson", image: "stanley.gif",
        text: "My heart monitor keeps beeping. Michael is stressing me out. I need a week of paid medical leave.",
        left: { text: "Deny the leave.", impact: { sales: +15, morale: -20, corporate: +10, budget: +5 } },
        right: { text: "Approve the leave.", impact: { sales: -15, morale: +10, corporate: -10, budget: -15 } }
    },

    // --- CREED BRATTON ---
    {
        character: "Creed Bratton", image: "creed.gif",
        text: "The new guy, huh? Listen, I need to use the baler to dispose of some... oversized organic material. Ask no questions.",
        left: { text: "Call HR.", impact: { sales: 0, morale: -15, corporate: +10, budget: 0 } },
        right: { text: "I saw nothing.", impact: { sales: 0, morale: +10, corporate: -15, budget: -5 } }
    },
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
    {
        character: "Creed Bratton", image: "creed.gif",
        text: "I need three plastic chairs, a tarp, and access to the loading dock at midnight. No questions.",
        left: { text: "Call the police.", impact: { sales: 0, morale: -10, corporate: +15, budget: 0 } },
        right: { text: "Here are the keys.", impact: { sales: 0, morale: +5, corporate: -20, budget: 0 } }
    },

    // --- THE ACCOUNTANTS ---
    {
        character: "Kevin Malone", image: "kevin.gif",
        text: "I dropped my famous chili all over the lobby carpet. It's gonna cost a lot to clean.",
        left: { text: "Make Kevin pay for it.", impact: { sales: 0, morale: -15, corporate: +5, budget: +5 } },
        right: { text: "Pay for the cleaners.", impact: { sales: 0, morale: +5, corporate: -5, budget: -15 } }
    },
    {
        character: "Kevin Malone", image: "kevin.gif",
        text: "I accidentally shredded my corporate credit card. And my driver's license. Can we order new ones?",
        left: { text: "You're paying for it.", impact: { sales: 0, morale: -10, corporate: +5, budget: +5 } },
        right: { text: "Order replacements.", impact: { sales: 0, morale: +5, corporate: -10, budget: -10 } }
    },
    {
        character: "Angela Martin", image: "angela.gif",
        text: "Kelly is wearing an outfit that violates the dress code. I demand you send her home immediately.",
        left: { text: "Leave Kelly alone.", impact: { sales: 0, morale: +10, corporate: -5, budget: 0 } },
        right: { text: "Send Kelly home.", impact: { sales: -10, morale: -10, corporate: +10, budget: 0 } }
    },
    {
        character: "Angela Martin", image: "angela.gif",
        text: "I brought Bandit to work because he has a cough. He will be living in my bottom filing cabinet today.",
        left: { text: "Take the cat home.", impact: { sales: +5, morale: -15, corporate: +10, budget: 0 } },
        right: { text: "Just keep him quiet.", impact: { sales: -5, morale: +10, corporate: -5, budget: 0 } }
    },
    {
        character: "Oscar Martinez", image: "oscar.gif",
        text: "If we don't spend our remaining $4,000 budget surplus by 5 PM, corporate will cut next year's budget.",
        left: { text: "Give it back to Corporate.", impact: { sales: 0, morale: -15, corporate: +20, budget: -5 } },
        right: { text: "Buy new copiers/chairs.", impact: { sales: +5, morale: +20, corporate: -10, budget: -15 } }
    },
    {
        character: "Oscar Martinez", image: "oscar.gif",
        text: "Actually, the way we calculate overtime is illegal. If Corporate finds out, we'll be fined heavily.",
        left: { text: "Ignore the error.", impact: { sales: +10, morale: -5, corporate: -20, budget: +15 } },
        right: { text: "Fix the payroll.", impact: { sales: -5, morale: +15, corporate: +10, budget: -20 } }
    },

    // --- THE ANNEX ---
    {
        character: "Kelly Kapoor", image: "kelly.gif",
        text: "Ryan hasn't texted me back in an hour. I literally cannot do customer service until I go yell at him.",
        left: { text: "Answer the phones.", impact: { sales: +5, morale: -10, corporate: +5, budget: 0 } },
        right: { text: "Go find Ryan.", impact: { sales: -15, morale: +5, corporate: -5, budget: 0 } }
    },
    {
        character: "Kelly Kapoor", image: "kelly.gif",
        text: "I need to take a sick day. The season finale of my show is tonight and I have to emotionally prepare.",
        left: { text: "That's not an illness.", impact: { sales: +10, morale: -15, corporate: +5, budget: 0 } },
        right: { text: "Take the day.", impact: { sales: -10, morale: +15, corporate: -5, budget: -5 } }
    },
    {
        character: "Toby Flenderson", image: "toby.gif",
        text: "We need to do radon testing in the basement. It costs $300, but it's an OSHA requirement.",
        left: { text: "Ignore Toby.", impact: { sales: 0, morale: +5, corporate: -15, budget: +10 } },
        right: { text: "Pay for the testing.", impact: { sales: 0, morale: -5, corporate: +5, budget: -10 } }
    },
    {
        character: "Toby Flenderson", image: "toby.gif",
        text: "I printed out a 40-page memo on desk ergonomics. I'd like to read it to the staff for the next two hours.",
        left: { text: "Nobody wants that.", impact: { sales: +10, morale: +10, corporate: -10, budget: 0 } },
        right: { text: "Read the memo.", impact: { sales: -20, morale: -20, corporate: +15, budget: 0 } }
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
        character: "Phyllis Vance", image: "phyllis.gif",
        text: "Bob Vance bought me a new perfume in Metropolitan Orlando. It's made from real pine. Do you like it?",
        left: { text: "It smells terrible.", impact: { sales: +5, morale: -15, corporate: 0, budget: 0 } },
        right: { text: "It's lovely.", impact: { sales: -10, morale: +10, corporate: 0, budget: 0 } }
    },
    {
        character: "Meredith Palmer", image: "meredith.gif",
        text: "It's casual Friday. I'm wearing a dress that is technically a shirt. Problem?",
        left: { text: "Go home and change.", impact: { sales: -5, morale: -10, corporate: +10, budget: 0 } },
        right: { text: "Just stay at your desk.", impact: { sales: 0, morale: +5, corporate: -15, budget: 0 } }
    },
    {
        character: "Meredith Palmer", image: "meredith.gif",
        text: "A bat bit me in the ceiling on my smoke break. I feel fine, but I probably shouldn't do any work today.",
        left: { text: "Go to the hospital.", impact: { sales: -10, morale: +10, corporate: +10, budget: -5 } },
        right: { text: "Just wrap it in a napkin.", impact: { sales: +5, morale: -10, corporate: -15, budget: 0 } }
    },

    // --- WAREHOUSE & CORPORATE ---
    {
        character: "Darryl Philbin", image: "darryl.gif",
        text: "Michael just drove the forklift into the racking. Again. We need $600 for repairs before someone dies.",
        left: { text: "Make Michael pay.", impact: { sales: 0, morale: -15, corporate: +10, budget: +5 } },
        right: { text: "Approve the repair cost.", impact: { sales: +5, morale: +5, corporate: 0, budget: -15 } }
    },
    {
        character: "Darryl Philbin", image: "darryl.gif",
        text: "Michael is down here trying to use the baler again. I'm going to physically restrain him if you don't come get him.",
        left: { text: "Let him use the baler.", impact: { sales: 0, morale: -15, corporate: -25, budget: -10 } },
        right: { text: "I'll be right there.", impact: { sales: -10, morale: +10, corporate: +10, budget: 0 } }
    },
    {
        character: "David Wallace", image: "david.gif",
        text: "We need you to sign off on Michael's final expense report. He expensed $400 for 'Goodbye-Vibes'. Deny it.",
        left: { text: "Deny the expense.", impact: { sales: 0, morale: -20, corporate: +20, budget: +15 } },
        right: { text: "Approve it quietly.", impact: { sales: 0, morale: +15, corporate: -25, budget: -20 } }
    },
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
    },
    {
        character: "Jo Bennett", image: "corporate.gif",
        text: "We are printing in all colors! Why is every email printed in color?! I want color printing locked down immediately.",
        left: { text: "Defend the staff.", impact: { sales: 0, morale: +15, corporate: -20, budget: -10 } },
        right: { text: "Lock it down.", impact: { sales: 0, morale: -15, corporate: +20, budget: +15 } }
    },
    // --- EXPANSION PACK 2: PR NIGHTMARES & NEW LORE ---

    // CLIENTS & PR NIGHTMARES
    {
        character: "Client Email", image: "corporate.gif",
        text: "A local paper mill wants us to supply 10,000 reams for their 'Save the Trees' flyer. The irony is going viral on Twitter.",
        left: { text: "Cancel the order.", impact: { sales: -15, morale: +5, corporate: +10, budget: 0 } },
        right: { text: "Take their money.", impact: { sales: +20, morale: -10, corporate: -15, budget: +5 } }
    },
    {
        character: "Client Call", image: "corporate.gif",
        text: "The Blue Cross hospital account is furious. A ream of our paper had an obscene watermark on it. They are threatening to walk.",
        left: { text: "Offer a 50% discount.", impact: { sales: +10, morale: 0, corporate: -10, budget: -15 } },
        right: { text: "Blame the supplier.", impact: { sales: -20, morale: +5, corporate: +5, budget: 0 } }
    },
    {
        character: "Michael Scott", image: "michael.gif",
        text: "I promised a very important client that we could deliver 50 boxes of paper using a fleet of horse-drawn carriages.",
        left: { text: "Rent the horses.", impact: { sales: +15, morale: +10, corporate: -10, budget: -20 } },
        right: { text: "Use the delivery truck.", impact: { sales: -15, morale: -10, corporate: +10, budget: 0 } }
    },

    // OUT-OF-SHOW ORIGINALS
    {
        character: "Dwight Schrute", image: "dwight.gif",
        text: "I sustained a severe laceration during a Battlestar Galactica LARP event. Do I get paid medical leave or should I bleed on the merchandise?",
        left: { text: "Take unpaid time off.", impact: { sales: -5, morale: -10, corporate: +10, budget: 0 } },
        right: { text: "Approve paid leave.", impact: { sales: 0, morale: +5, corporate: -5, budget: -10 } }
    },
    {
        character: "Jim Halpert", image: "jim.gif",
        text: "I invented a fake employee named 'Lloyd Gross' so I can take an extra slice of commission. Just sign this form.",
        left: { text: "That is fraud.", impact: { sales: 0, morale: -15, corporate: +15, budget: +5 } },
        right: { text: "Good for you, Jim.", impact: { sales: +10, morale: +10, corporate: -15, budget: -10 } }
    },
    {
        character: "Pam Beesly", image: "pam.gif",
        text: "I kind of just made up the title 'Office Administrator' so I could get a raise. Can you back me up if Corporate asks?",
        left: { text: "I can't lie for you.", impact: { sales: 0, morale: -15, corporate: +10, budget: +10 } },
        right: { text: "You're the Admin now.", impact: { sales: 0, morale: +15, corporate: -10, budget: -15 } }
    },
    {
        character: "Creed Bratton", image: "creed.gif",
        text: "I’ve been running a small cult in the warehouse on weekends. We need an advance on my paycheck to buy matching tracksuits.",
        left: { text: "Call the police.", impact: { sales: 0, morale: -10, corporate: +15, budget: 0 } },
        right: { text: "Have fun, Creed.", impact: { sales: 0, morale: +5, corporate: -15, budget: -5 } }
    },
    {
        character: "Kelly Kapoor", image: "kelly.gif",
        text: "I told Ryan I was pregnant so he would buy me dinner, but now Corporate wants to send me a maternity gift basket.",
        left: { text: "Tell them the truth.", impact: { sales: 0, morale: -15, corporate: +10, budget: 0 } },
        right: { text: "Accept the basket.", impact: { sales: 0, morale: +10, corporate: -15, budget: -5 } }
    },
    {
        character: "Ryan Howard", image: "ryan.gif",
        text: "I bought an espresso machine for the annex using the petty cash fund. Productivity is going to skyrocket. Trust me.",
        left: { text: "Return it.", impact: { sales: -5, morale: -15, corporate: +5, budget: +15 } },
        right: { text: "I love espresso.", impact: { sales: +10, morale: +15, corporate: -10, budget: -20 } }
    },
    {
        character: "Stanley Hudson", image: "stanley.gif",
        text: "The elevator is broken. I am not walking up those stairs. Bring my desk down to the parking lot.",
        left: { text: "Take the stairs.", impact: { sales: +5, morale: -20, corporate: +5, budget: 0 } },
        right: { text: "Move his desk.", impact: { sales: -15, morale: +10, corporate: -5, budget: -5 } }
    },
    {
        character: "Angela Martin", image: "angela.gif",
        text: "I refuse to use the new hand sanitizer. It smells like sin and compromises my immune system.",
        left: { text: "Use the sanitizer.", impact: { sales: 0, morale: -10, corporate: +5, budget: 0 } },
        right: { text: "Buy her special soap.", impact: { sales: 0, morale: +5, corporate: -5, budget: -5 } }
    },

    // ADAPTED LATE-SEASON TROPES
    {
        character: "Dwight Schrute", image: "dwight.gif",
        text: "I have compiled a list of everyone in the office. It's a two-column list. Winners, and Losers. I am treating them accordingly.",
        left: { text: "Destroy the list.", impact: { sales: -5, morale: +15, corporate: +5, budget: 0 } },
        right: { text: "Let me see the list.", impact: { sales: +10, morale: -20, corporate: -10, budget: 0 } }
    },
    {
        character: "Michael Scott", image: "michael.gif",
        text: "I’m forming an 'Inner Circle'. Only the cool people. We will be making all executive decisions from the breakroom.",
        left: { text: "Disband the circle.", impact: { sales: +5, morale: -10, corporate: +10, budget: 0 } },
        right: { text: "Can I join?", impact: { sales: -15, morale: +10, corporate: -15, budget: 0 } }
    },
    {
        character: "Toby Flenderson", image: "toby.gif",
        text: "I brought in a self-defense instructor because someone flashed Phyllis in the parking lot. The staff is... mocking him.",
        left: { text: "Cancel the class.", impact: { sales: +10, morale: -5, corporate: -10, budget: +5 } },
        right: { text: "Mandatory attendance.", impact: { sales: -15, morale: -15, corporate: +15, budget: -10 } }
    },

    // WACKY OFFICE DYNAMICS
    {
        character: "Kevin Malone", image: "kevin.gif",
        text: "I figured out a new way to do math. If you just leave out the 'Klevin', we actually have a massive budget surplus.",
        left: { text: "That's embezzling.", impact: { sales: 0, morale: -10, corporate: +15, budget: 0 } },
        right: { text: "Use the Klevin.", impact: { sales: 0, morale: +15, corporate: -25, budget: +20 } }
    },
    {
        character: "Meredith Palmer", image: "meredith.gif",
        text: "I need you to sign off on my expense report. It’s mostly for outback steakhouse gift cards and... industrial lubricants.",
        left: { text: "Absolutely not.", impact: { sales: 0, morale: -10, corporate: +10, budget: +5 } },
        right: { text: "Looks fine to me.", impact: { sales: 0, morale: +10, corporate: -10, budget: -15 } }
    },
    {
        character: "Phyllis Vance", image: "phyllis.gif",
        text: "I am being blackmailed. Someone has photos of me at a bachelorette party in 1998. I need $500 from the petty cash.",
        left: { text: "Not my problem.", impact: { sales: 0, morale: -15, corporate: 0, budget: 0 } },
        right: { text: "Here is the money.", impact: { sales: 0, morale: +5, corporate: -10, budget: -15 } }
    },
    {
        character: "Oscar Martinez", image: "oscar.gif",
        text: "The hardwood floor under the carpet looks amazing. We should rip up all the carpet right now. During work hours.",
        left: { text: "Leave the carpet.", impact: { sales: +5, morale: -10, corporate: 0, budget: 0 } },
        right: { text: "Tear it up!", impact: { sales: -20, morale: +15, corporate: -5, budget: -10 } }
    },
    {
        character: "David Wallace", image: "david.gif",
        text: "We are thinking about sending your branch a 'Sabre' brand automated paper-selling robot. It will replace two salesmen.",
        left: { text: "We don't want it.", impact: { sales: -10, morale: +20, corporate: -15, budget: -10 } },
        right: { text: "Send the robot.", impact: { sales: +20, morale: -30, corporate: +15, budget: +15 } }
    },
    {
        character: "Darryl Philbin", image: "darryl.gif",
        text: "The warehouse guys want to form a union. You can either back us up, or we all walk out today.",
        left: { text: "Walk out.", impact: { sales: -30, morale: -20, corporate: +10, budget: +10 } },
        right: { text: "I support the union.", impact: { sales: 0, morale: +25, corporate: -30, budget: -20 } }
    }
];
