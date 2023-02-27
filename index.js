let card = []
let sum = 0
let i = 0
let gameAlive = false
let gotBlackjack = false
let player = {
    name: "chamod",
    coins: 0
}

let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let playerEl = document.getElementById("player-el")


playerEl.textContent = player.name + ":  $ " + player.coins

function randomCard() {
    let randomNumber = Math.floor(Math.random() * 13)

    if (randomNumber === 0) {
        return "A"
    }
    else if (randomNumber > 10) {
        return 11
    }
    else {
        return randomNumber + 1
    }
}

function startGame() {
    gameAlive = true

    let firstCard = randomCard()

    card = [firstCard]

    if (firstCard === "A"){
        sum = 1
    }
    else {
        sum = firstCard
    }

    main()
}

function main() {

    cardEl.textContent = "Cards: "
    for (i = 0; i < card.length; i++) {
    cardEl.textContent += card[i] + " "
    }

    sumEl.textContent = "Sum : " + sum

    if (sum < 21) {
        messageEl.textContent = "Do you want to draw a new card?"
        gameAlive = true
        gotBlackjack = false
        player.coins += 20
    }
    else if (sum === 21) {
        messageEl.textContent = "you have got a Blackjack"
        gameAlive = true
        gotBlackjack = true
        player.coins += 100
    }
    else {
        messageEl.textContent = "you are out of the game"
        gameAlive = false
        gotBlackjack = false
        player.coins += -20
    }

    playerEl.textContent = player.name + ":  $ " + player.coins
}


function newCard() {

    if (gameAlive === true && gotBlackjack === false) {
        let nextCard = randomCard()
        card.push(nextCard)

        if (nextCard === "A"){
            sum += 1
        }
        else {
            sum += nextCard
        }

        main()
    }
}
