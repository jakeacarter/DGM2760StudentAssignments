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

//Add a redwood to the end to the old way

// var addTreeStart = function() {
//     trees.push("redwood");
//     listTrees();
// };
// var redwood = document.fetElementById('add_redwood');
// redwood.onclick = addTreeStart;

// More concise version of add a redwood to the end

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
    trees.shift('tree')
    listTrees();
}

//remove the second tree

document.querySelector('#remove_tree2').onclick = () => {
    trees.splice(1, 1)
    listTrees();
}

//remove last tree

document.querySelector('#remove_treeLast').onclick = () => {
    trees.pop('lastTree')
    listTrees();
}

//sort trees A>Z
document.querySelector('#sortTrees').onclick = () => {
    trees.sort()
    listTrees();
}

//make trees lowercase
document.querySelector('#lowerTrees').onclick = () => {
    trees = trees.map(tree => tree.toLowerCase())
    listTrees();
}

//Find tree number 3

document.querySelector('#showName3').onclick = () => {
    trees = trees.filter(tree => tree == trees[2]);
    listTrees();
}

//Find tree number 4
document.querySelector('#showName4').onclick = () => {
    trees = trees.filter(tree => tree == trees[3]);
    listTrees();
}

//Error messages

document.querySelector('#remove_tree1').onlcick = () => {
    if (trees.length == 0) {
        trees.shift()
        listTrees()
    } else {
        errorElement.textContent = 'Cannot remove the first tree because there are no trees.'
    }
}




//displayResults.textContent = 'Testing here'
//errorElement.textContent = 'Testing here'