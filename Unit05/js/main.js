// Create an array with 4 trees listed
let trees = ['oak', 'Pine', 'aspen', 'Bald Cypress'];
const errorElement = document.querySelector('#error')
const displayResults = document.querySelector('#displayResults')

// Display the list of trees inside the displayResults div
const listTrees = () => {
    let treeList = ''
    trees.forEach(tree => {
        treeList += `${tree} <br>`
    })
    displayResults.innerHTML = `${treeList} <span>${trees.length} elements long</span>`
}

listTrees()

document.querySelector('#add_redwood').onclick = () => {
    trees.push('redwood')
    listTrees();
}

// Add a Pear to the start

document.querySelector('#add_pear').onclick = () => {
    trees.unshift('Pear')
    listTrees();
}

// Remove Tree first tree

document.querySelector('#remove_tree1').onclick = () => {
    if(trees.length > 0 ){
        trees.shift('tree')
        listTrees();
    } else {
        errorElement.innerHTML = "Cant Do that operation"
    }
}

//remove the second tree

document.querySelector('#remove_tree2').onclick = () => {
    if(trees.length >= 2 ){
        trees.splice(1, 1)
        listTrees();
    } else {
        errorElement.innerHTML = "Cant Do that operation"
    }
    
}

//remove last tree

document.querySelector('#remove_treeLast').onclick = () => {
    if(trees.length > 0 ){
        trees.pop('lastTree')
        listTrees();
    } else {
        errorElement.innerHTML = "Cant Do that operation"
    }
}

//sort trees A>Z
document.querySelector('#sortTrees').onclick = () => {
    if(trees.length >= 1 ){
        trees.sort()
        listTrees();
    } else {
        errorElement.innerHTML = "Cant Do that operation"
    }
}

//make trees lowercase
document.querySelector('#lowerTrees').onclick = () => {
    if(trees.length > 0 ){
        trees = trees.map(tree => tree.toLowerCase())
        listTrees();
    } else {
        errorElement.innerHTML = "Cant Do that operation"
    }
}

//Find tree number 3

document.querySelector('#showName3').onclick = () => {
    if(trees.length >= 3 ){
        tree3 = trees.filter(tree => tree == trees[2]);
        errorElement.innerHTML = tree3
    } else {
        errorElement.innerHTML = "Cant Do that operation"
    }
}

//Find tree number 4
document.querySelector('#showName4').onclick = () => {
    if(trees.length >= 4 ){
        tree4 = trees.filter(tree => tree == trees[3]);
        errorElement.innerHTML = tree4
    } else {
        errorElement.innerHTML = "Cant Do that operation"
    }
}

//Error messages


// function errorChecking 



//displayResults.textContent = 'Testing here'
//errorElement.textContent = 'Testing here'