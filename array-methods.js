//.map() The map() method creates a new array with the results of calling a provided function on every element in the calling array.

const numbers = [2, 7, 9, 171, 52, 33, 14]

function squareNums(arr) {
  const result = arr.map(x => x ** 2);
  return result;
  
}

console.log(squareNums(numbers))

//Output is [ 4, 49, 81, 29241, 2704, 1089, 196 ]
