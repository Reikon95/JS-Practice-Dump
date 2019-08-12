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
