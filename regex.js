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

//Match characters EXCEPT characters
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/ig; 
let result = quoteSample.match(myRegex); 
//The '^' indicates that you should match everything that is NOT one of these. So in this case - no vowels or numbers.

//Multiple matches 
let difficultSpelling = "Mississippi";
let myRegex = /s+/ig; 
let result = difficultSpelling.match(myRegex);
//This will return multiple occurances of the letter s (hence the + sign)

//Lazy matching
let text = "<h1>Winter is coming</h1>";
let myRegex = /<h1>?/; 
let result = text.match(myRegex);
//Returns shortest possible substring that fits the pattern

//Matching at the end of a string
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; 
let result = lastRegex.test(caboose);
//The dollar sign indicates it should be at the back

//Match all alphanumeric characters
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi; 
let result = quoteSample.match(alphabetRegexV2).length;
//The \w is shorthand for all alphanumeric characters

//All except allphanumeric
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; 
let result = quoteSample.match(nonAlphabetRegex).length;

//Match all numbers
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; 
let result = numString.match(numRegex).length;
//d flag

//Match all non numbers
let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/g; 
let result = numString.match(noNumRegex).length;
//D flag

//Match whitespace
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; 
let result = sample.match(countWhiteSpace);
//\s matches all whtiespace in string

//Match all non whitespace
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; 
let result = sample.match(countNonWhiteSpace);
//\S matches all non whitespace

//Specify Upper and Lower Number of Matches
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/;
let result = ohRegex.test(ohStr);
//Returns strings with between 3-6h's, taking into account whitespace too 

//Specify only lower number of matches
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
//Would match the string only when there are 4 or more z's

