function duplicateMenu(e) {
    let topList = document.querySelectorAll('ul#primaryNavigation li a')
    let bottomMenu = document.querySelector('#smallNavArea')
    let newList = document.createElement('ul')

    topList.forEach(menuItem => {
        let newLI = document.createElement('li')
        let newLink = document.createElement('a')
        newLink.setAttribute('href', menuItem.getAttribute('href'))
        newLink.innerText = menuItem.innerText
        console.log(menuItem)
        //newLI.setAttribute('class', )
        // 'copy' the textContent from upper menu to new menu

        newLI.appendChild(newLink)
        
        newList.appendChild(newLI)
        // newLI.appendChild(node)
        
        //append children to make them apear in the DOM
    })
    bottomMenu.innerHTML = newList.innerHTML
    
}
// let x = window.matchMedia("(max-width: 600px)")
const mq = window.matchMedia("(max-width: 600px)")
mq.addEventListener("change", duplicateMenu)