document.body.innerHTML = '<body>This is the text of the body element</body>';
document.querySelector('h1').innerHTML = 'Most popular TV show searches in 2016';

document.getElementById('fourth').innerHTML = 'Fourth element';

document.querySelector('body').style.backgroundColor = '#201F2E';

let newDestination = document.createElement("li");
newDestination.innerHTML = "Oaxaca, Mexico";
document.getElementById("more-destinations").appendChild(newDestination);

//Change the details of an element

let element = document.querySelector("button");

function turnButtonRed (){
	element.style.backgroundColor = "red";
  element.style.color = "white";
  element.innerHTML = "Red Button"; 
}

element.onclick = turnButtonRed;

//get child and parent

let first = document.body.firstChild;
first.innerHTML = "First child";
first.parentNode.innerHTML = "I am the parent and my inner HTML has been replaced!";

// The document keyword grants access to the root of the DOM in JavaScript
// The DOM Interface allows you to select a specific element with CSS selectors by using the .querySelector() method
// You can also access an element directly by its ID with .getElementById()
// The .innerHTML and .style properties allow you to modify an element by changing its contents or style respectively
// You can create, append, and remove elements by using the .createElement(),.appendChild() and .removeChild() methods respectively
// The .onclick property can add interactivity to a DOM element based on a click event


//Make more info appear below
let readMore = document.getElementById('read-more')
let moreInfo = document.getElementById('more-info')
readMore.onclick = function() {
  moreInfo.style.display = 'block';
}
