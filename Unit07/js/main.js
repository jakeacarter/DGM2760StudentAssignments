let message

const pizza = {
    crust: 'thin',
    size: 'small',
    toppings: 'pepperoni',
    buildPizza: function () {
        console.log('buildPizza method has been called')
        message = `Baking a ${pizza.size} pizza on a ${pizza.crust} crust with ${pizza.toppings} and cheese for you!`
        document.querySelector('#feedback').textContent = message
    },
    shoppingList: () => {
        let flour = 1
        if (pizza.crust === 'thick') flour *= 2
        //do the same thing for large property
        let large = 1
        if (pizza.size === 'large') flour *= 2
        message = `You will need to purchase ${flour} cups of flour and 1 lb of ${pizza.toppings}.`
        document.querySelector('#feedback').textContent = message
    }
}

//crust
document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin')
document.querySelector('#thick').addEventListener('click', () => pizza.crust = 'thick')

//toppings
document.querySelector('#pepperoni').addEventListener('click', () => pizza.toppings =  'pepperoni')
document.querySelector('#sausage').addEventListener('click', () => pizza.toppings =  'sausage')

//size
document.querySelector('#small').addEventListener('click', () => pizza.size =  'small')
document.querySelector('#large').addEventListener('click', () => pizza.size =  'large')

//build pizza
document.querySelector('#build').addEventListener('click', pizza.buildPizza)

//shopping list
document.querySelector('#shopping').addEventListener('click', pizza.shoppingList)