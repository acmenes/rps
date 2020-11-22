//player is assigned 3 randomized cards that battle against the opponent (computer)
//match the player's choice to what the computer picked
//cards work in an RPS format

//rock > scissors
//scissor > paper
//paper > rock

//try attack defend magic

//defend > attack
//magic > defend
//attack > magic

const battleCards = [
    {
        name: 'attack',
        img: 'images/attack.png',
        number: 1
    },
    {
        name: 'defend',
        img: 'images/defend.png',
        number: 2
    },
    {
        name: 'magic',
        img: 'images/magic.png',
        number: 3,
    },

]

const gameBoard = document.querySelector('.game')

//when start game is clicked, this function runs. the opponent will secretly pick a card.
//also, the game board will be created with the 3 cards face down
//it's a blind RPS game

function startGame(){
    alert("Battle Time! Pick a card")
    battleCards.sort(() => 0.5 - Math.random())
    console.log(battleCards)
    createGameBoard();
    opponentPick();
}

//don't click start game more than once!

const opponent = []
const yourPick = []

function opponentPick(){
    var opponentCard = battleCards[Math.floor(Math.random() * battleCards.length)]
    console.log(`Opponent Picked ${opponentCard.name}!`)
    opponent.push(`${opponentCard.name}`)
}

function createGameBoard(){
    for(let i = 0; i < battleCards.length; i ++){
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gameBoard.appendChild(card)
    }
}

function flipCard(){
    console.log("it works!")
    var cardId = this.getAttribute("data-id")
    this.setAttribute('src', battleCards[cardId].img)
    yourPick.push(battleCards[cardId].name)
    checkForWin();
}

//this function needs to check if the player card beats, loses
//or is a draw with the computer's pick

//defend > attack
//magic > defend
//attack > magic

//compare each of the cards to see what wins

function checkForWin(){
    alert(`You chose ${yourPick}`)
    let yourCard = JSON.stringify(yourPick)
    let opponentsCard = JSON.stringify(opponent)
    console.log(yourCard)
    console.log(opponentsCard)
    alert(`Your opponent chose... ${opponent}`)
    if(yourCard === opponentsCard){
        alert("DRAW!")
        alert("Refresh the page and try again until I fix this janky code")
    }else if (yourCard !== opponentsCard){
        alert("BATTLE!")
        if(yourPick[0] === "defend" && opponent[0] === "attack"){
            alert("YOU WIN!")
            alert("Refresh the page and try again until I fix this janky code")
        }else if (yourPick[0] === "magic" && opponent[0] === "defend"){
            alert("YOU WIN!")
            alert("Refresh the page and try again until I fix this janky code")
        }else if(yourPick[0] === "attack" && opponent[0] === "magic"){
            alert("YOU WIN!")
            alert("Refresh the page and try again until I fix this janky code")
        }else if(yourPick[0] === "attack" && opponent[0] === "defend"){
            alert("YOU LOSE!")
            alert("Refresh the page and try again until I fix this janky code")
        }else if(yourPick[0] === "defend" && opponent[0] === "magic"){
            alert("YOU LOSE!")
            alert("Refresh the page and try again until I fix this janky code")
        }else if(yourPick[0] === "magic" && opponent[0] === "attack"){
            alert("YOU LOSE!")
            alert("Refresh the page and try again until I fix this janky code")
        }else{
            alert("uh that shouldn't happen. refresh the page and try again")
        }
    }
}

//create a function that will delete the battle board and replace it with a new one!