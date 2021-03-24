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
 
 const myStory = `Once upon a time there was a ${adjArray.shift()} ${nounArray.shift()} that loved to ${verbArray.shift()} and ${verbArray.shift()} over all of the ${nounArray.shift()}s. His name was Bernard, and he lived in an ${adjArray.shift()} ${nounArray.shift()} with hundreds of ${nounArray.shift()}s roaming the area. He had a friend that was a ${nounArray.shift()}, and his name was Fred. Fred loved to scavenge for ${adjArray.shift()} ${nounArray.shift()}s. After many hours of scavengeing, Fred could not find anything and so he convinced Bernard to leave, so they ran away, riding thier favorite ${nounArray.shift()}.`
 storyElement.innerHTML = myStory
 
console.log(myStory)

 

}