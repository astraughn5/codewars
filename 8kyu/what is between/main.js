// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]
//PREP
//P: integers, whole, could be + or -
//R: return array including a & b
//E:
function between(a, b) {
	// take a starting number a and add each number to an array up to b 
	// need to create an empty array
	// need to loop starting at a and push each number up to b
	// need to return the array
	let array = []
	for (i = a; i <= b; i++){
		array.push(i)
		
	}
	return array
  }

console.log(between(1,4)) //output [1,2,3,4]
console.log(between(0,3)) //output [0,1,2,3]
between(-2,1) //output [-2,-1,0,1]