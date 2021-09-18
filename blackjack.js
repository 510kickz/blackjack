// Blackjack game

console.log('Welcome to Casino Sproul, where you come in with stacks of cash and leave with mounds of debt.')

// defines an array which houses the possible card values a player can get.
let deckOfCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];


// defines player1 and dealer1 which will be updated throughout with the current hand value.
let player1 = deckOfCards[Math.floor(Math.random() * deckOfCards.length)] + deckOfCards[Math.floor(Math.random() * deckOfCards.length)];
console.log(`Your starting hand is ${player1}`);

let dealer1 = deckOfCards[Math.floor(Math.random() * deckOfCards.length)] + deckOfCards[Math.floor(Math.random() * deckOfCards.length)];
console.log(`The dealer's starting hand is ${dealer1}`);

// while loop to figure out if the player should hit
while (player1 <= 17) {
    player1 = player1 + deckOfCards[Math.floor(Math.random() * deckOfCards.length)];
    console.log(`Hitting... 
Your new hand is ${player1}.`);
}

// if statment to check if player has busted
if (player1 > 21) {
    console.log(`You bust with a hand of ${player1}.`);
    process.exit(1);
}

// while loop to figure out if the dealer should hit
while (dealer1 < player1 && player1 <= 21) {
    dealer1 = dealer1 + deckOfCards[Math.floor(Math.random() * deckOfCards.length)];
    console.log(`The dealer is hitting...
The dealer's new hand is ${dealer1}.`);
}

if (dealer1 > 21 && player1 <= 21) {
    console.log(`The dealer has bust you win with a final hand of ${player1}.`)
    process.exit(1);
}

// else if statments to check who winner is
if (player1 > dealer1 && player1 <= 21) {
    console.log(`You win! Your winning hand is ${player1}, while the dealer has a hand of ${dealer1}.`);
} 
else if (dealer1 > player1 && dealer1 <= 21) {
    console.log(`You lose to the house. Your final hand is ${player1}, while the house had a final hand of ${dealer1}.`);
} 
else if (player1 === dealer1 && player1 <= 21) {
    console.log(`Tie game. Both parties had a final hand of ${player1}.`);
}