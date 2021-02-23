function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

 
 

  function getMonthName(month) {
    let name 
    switch (month) {
        case 1:
            name = "January"
            break;
        case 2:
            name = "February"
            break;
        case 3:
            name = "March"
            break;
        case 4:
            name = "April"
            break;
        case 5:
            name = "May"
            break;
        case 6:
            name = "June"
            break;
        case 7:
            name = "July"
            break;
        case 8:
            name = "August"
            break;
        case 9:
            name = "September"
            break;
        case 10:
            name = "October"
            break;
        case 11:
            name = "November"
            break;
        case 12:
            name = "December"
            break;
    
        default:
            name = "Not a month"
            break;
    }
    return name
  }

  function getFortune(fate) {
      let message
      switch (fate) {
        case 1: {
            message = 'be given a major role in the next major blockbuster movie';
            console.log(message)
            break;
        }
        case 2: {
            message = 'win the next lottery';
            console.log(message)
            break;
        }
        case 3: {
            message = 'become a superhero';
            console.log(message)
            break;
        }
        case 4: {
            message = 'feast like a king';
            console.log(message)
            break;
        }
        case 5: {
            message = 'become famous';
            console.log(message)
            break;
        }
        default: {
            message = 'An error occured';
            console.log(message)
            break;
        }
      }
      return message
  }

  
  
  let month = getRandomIntInclusive(1, 12)
  const monthName = getMonthName(month)
  let day = getRandomIntInclusive(1, 30)
  let fate = getRandomIntInclusive(1, 5)
  const myFate = getFortune(fate)

  const fortuneRevealed = `On ${monthName} ${day}, you will ${myFate}`

  document.querySelector('#fortune').innerText = fortuneRevealed

