function tellStory() {
    const storyElement = document.querySelector('#story')

    let nounsString = document.querySelector('#noun').value
    nounArray = nounsString.trim().split(' ');
    nounArray = nounArray.flatMap(noun => noun.split('\n'))
    nounArray = nounArray.map(noun => noun.toLowerCase())

    let adjString = document.querySelector('#adjectives').value
    adjArray = adjString.trim().split(' ');
    adjArray = adjArray.flatMap(adjective => adjective.split('\n'))
    adjArray = adjArray.map(adj => adj.toLowerCase())

    const verbString = document.querySelector('#verbs').value
    verbArray = verbString.trim().split(' ');
    verbArray = verbArray.flatMap(verb => verb.split('\n'))
    verbArray = verbArray.map(verb => verb.toLowerCase())


    //let nounArray = ['#noun'];
    
 console.log(verbArray)  
 
 const myStory = `Once upon a time there was a ${adjArray.shift()} ${nounArray.shift()}`
 storyElement.innerHTML = myStory
 
console.log(myStory)

 

}