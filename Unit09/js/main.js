function duplicateMenu() {
    let topList = document.querySelectorAll('ul#primaryNavigation li a')

    let newList = document.createElement('ul')

    topList.forEach(menuItem => {
        let newLI = document.createElement('li')
        let newLink = document.createElement('a')
        newLink.setAttribute('href', menuItem.getAttribute('href'))
        // 'copy' the textContent from upper menu to new menu
        
        //append children to make them apear in the DOM
        
    })
}

duplicateMenu()