document.querySelector('header > h1').innerText = "InspectorClouseau"

document.querySelector('header > h2').innerText = "What lovely weasah we are aving"

function reDisplay() {
    let windowSizes = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall.`
    let offset = `Window offset is ${window.screenX} from the left edge and ${window.screenY} pixels from the top of the display.`

    let myWindow = document.querySelector('#myWindow').innerText = windowSizes + '\n' + offset
}

reDisplay()

document.getElementById("url").textContent = document.URL;

var docTitle = document.title;

let documentTitle = `Document Title is ${document.title}.`
let myTitle = document.querySelector('#myTitle').innerText = document.title

let documentUpdate = `This page was last updated on ${document.Date}.`
let myDocument = document.querySelector('#myDocument').innerText = new Date

//let myDocument = new Date(document.documentUpdate);
//var string = document.myDocument;

//alert(document.lastModified);

//let myDocument = new Date(document.lastModified);

//alert(document.lastModified);
//let myDocument = new Date(document.lastModified);



//document.querySelector('#title').innerText = "Inspector Clouseau"

//document.querySelector('#quote').innerText = "What lovely weasah we are aving"