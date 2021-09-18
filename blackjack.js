// Blackjack game

console.log('Welcome to Casino Sproul, where you come in with stacks of cash and leave with mounds of debt.')

// defines an array which houses the possible card values a player can get.
let deck = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11];
function randNum() {
    return Math.floor(Math.random() * deck.length);
}

function dealACard() {
    let newCard;
    let randNumTemp = randNum();
    return deck.splice(randNumTemp, 1)[0];
};

// defines player1 and dealer1 which will be updated throughout with the current hand value.
let player1 = 0;
let dealer = dealACard();
console.log(`The dealer starts with ${dealer}.`);

while (player1 <= 17) {
    let cardDealt = dealACard();
    let cardDealt2 = dealACard();
    if (player1 === 0) {
        player1 += cardDealt;
        console.log(`You start with ${cardDealt}.`);
        player1 += cardDealt2;
        console.log(`Your second card is ${cardDealt2}.
Your hand starts at ${player1}.`);
    }
    else if (player1 === 21) {
        console.log(`Sticking.`)
    }
    else if (player1 != 0) {
            player1 += cardDealt;
            console.log(`You are hitting...
You have been dealt ${cardDealt}.
Your new hand value is ${player1}.`)
    };
};

if (player1 >= 17) {
    console.log(`Sticking.`)
};

if (player1 > 21) {
    console.log(`You bust with a final hand of ${player1}.`);
    process.exit(1);
};

while (dealer <= 17) {
    let cardDealt = dealACard();
    dealer += cardDealt;
    console.log(`The dealer is hitting...
The dealer has been dealt ${cardDealt}.
The dealer's new hand value is ${dealer}.`);
};

if (dealer < player1 & player1 <= 21) {
    let cardDealt = dealACard();
    dealer += cardDealt;
    console.log(`The dealer is hitting...
The dealer has been dealt ${cardDealt}.
The dealer's new hand value is ${dealer}.`);
};

if (dealer > 21) {
    console.log(`Dealer bust, you win with a final hand of ${player1} to ${dealer}.`);
}
else if (player1 > dealer) {
    console.log(`You won! Your winning hand total is ${player1}, while the dealer has ${dealer}.`)
} 
else if (dealer > player1) {
    console.log(`You lose to the house. Your final hand total is ${player1}, while the dealer has a hand of ${dealer}.`)
} 
else if (dealer === player1 & player1 < 22) {
    console.log(`Tie game, you each have ${dealer}.`);
};
