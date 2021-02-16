
//document.getElementById('company').innerHTML = "Joe's Bed and Breakfast"

document.querySelector('#company').innerText = "Joe's Bed and Breakfast"

document.querySelector('header > h2').innerText = "Best B&B this side of the Rocky Mountains!"

let userName = prompt("What is your name?")

//let message = "Hello " + userName + ", welcome to the best B&B in the west!"

let message = `Hello ${userName}, welcome to the best B&B this side of the Rocky Mountains!`

document.querySelector('#greeting').innerText = message