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

//Ignore case
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result = fccRegex.test(myString);
//This returns true regardless of the case (the i is what is known as a flag, and is code for case insensitive)

//Extracting Matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex); 
//This returns an object which is the match (in this case, coding)

//Multiple matches
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; 
let result = twinkleStar.match(starRegex); 
//This returns multiple matches. Note that you must use the 'i' flag too for insenstivity. The g flag allows for mmultiple.

//Wildcard matches
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; 
let result = unRegex.test(exampleStr);
//The period is a wildcard meaning it will match any character, thus meaning this will match fun, sun, run etc.

//Matching single character with multiple possibilities
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; 
let result = quoteSample.match(vowelRegex); 
//This will match to all the vowels, is case insensitive and will still pick up multiple matches.

//Matching all letters in alphabet
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; 
let result = quoteSample.match(alphabetRegex); 
//Returns all the letters because of the insensitive and global flag.

//Matching ranges of numbers and letters
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; 
let result = quoteSample.match(myRegex); 
//Returns all letters from h to s and all numbers between 2 and 6

