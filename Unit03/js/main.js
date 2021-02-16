document.querySelector('#theGame').innerText = "Guessing Game"

document.querySelector('header > h2').innerText = "High/Low game"

//let userName = prompt("What is your name?")

//let message = "Hello " + userName + ", welcome to the best B&B in the west!"

//let message = `Hello ${userName}, welcome to the best B&B this side of the Rocky Mountains!`

//document.querySelector('#greeting').innerText = message

//pick a random number between 0 and 16

let correctNumber = Math.floor(Math.random() * 15)

console.log( `The corerect number is ${correctNumber}`)

let guessed = false
let totalGuesses = 0
let gamerGuess = 0
correctNumber += 0

function evalGuess() {
    totalGuesses += 1  // totalGuesses = totalGuesses + 1
    gamerGuess = document.querySelector ('#guess').value
    console.log(totalGuesses, gamerGuess)
    const feedback = document.querySelector('#feedback')

    if (gamerGuess == correctNumber) {
        console.log('gamerGuess is equal to correctNumber')
        feedback.innerText = 'You Are Correct!'
        giveAward()
    } else if (gamerGuess > correctNumber && gamerGuess < 16) {
        feedback.innerText = 'too high, try again'
    } else if (gamerGuess < correctNumber && gamerGuess > 0) {
        feedback.innerText = 'too low, try again'
    } else {
        feedback.innerText = 'Please choose a # between 1 and 15 and try again'
        totalGuesses -= 1
    }

    document.querySelector('#attempts').innerText = totalGuesses

}

function giveAward() {
  console.log('Congrats!')
let imagePath = '#'
  switch (totalGuesses) {
    case 1:
    case 2:
    case 3:
        imagePath = 'images/BlueRibbon.jpg'
        break;
    case 4:
    case 5:
    case 6:
        imagePath = 'images/RedRibbon.jpg'
        break;
    case 7:
    case 8:
    case 9:
        imagePath = 'images/GreenRibbon.jpg'
    
}

const awardImage = document.createElement('img') //Creates a <img> element
awardImage.setAttribute('src', imagePath)
const ribbon = document.querySelector('#ribbon')

ribbon.appendChild(awardImage)
// only append child if the ribbon element does not have any child nodes yet

}


