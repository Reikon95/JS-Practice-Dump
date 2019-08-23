// Functional Programming: Learn About Functional Programming
// Functional programming is a style of programming where solutions are simple, isolated functions, 
// without any side effects outside of the function scope.

/**
 * A long process to prepare green tea.
 * @return {string} A cup of green tea.
 **/
const prepareGreenTea = () => 'greenTea';

/**
 * A long process to prepare black tea.
 * @return {string} A cup of black tea.
 **/
const prepareBlackTea = () => 'blackTea';

/**
 * Get given number of cups of tea.
 * @param {function():string} prepareTea The type of tea preparing function.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};


const tea4GreenTeamFCC = getTea(prepareGreenTea, 27); 
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13); 

// Pass Arguments to Avoid External Dependence in a Function
// the global variable
var fixedValue = 4;
function incrementer (arg) {
    return arg + 1;
  }

var newValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4
//Global variables uneffected 
