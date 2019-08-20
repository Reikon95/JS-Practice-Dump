//Intro
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

//Returns true because the word 'Hello' is in myString.
//Multiples
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
let result = petRegex.test(petString);
//As usual | means or - you can use it to scan for multiple, this would match for any of the animals listed
