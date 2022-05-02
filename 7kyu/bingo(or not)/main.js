// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array). Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.

function bingo(a){
	if (a.includes(2) && a.includes(9) && a.includes(14) && a.includes(7) && a.includes(15)){
		return "WIN"
	}
	else{
		return "LOSE"
	}
}

// console.log(bingo([1,2,3,4,5,6,7,8,9,10]))
// console.log(bingo([21,13,2,7,5,14,7,15,9,10]))

// B -> 2 , I -> 9, N -> 14, G-> 7, O -> 15

//other solution -- they use every method to check
function bingo(a) {
	return [2,9,14,7,15].every(x => a.includes(x)) ? "WIN" : "LOSE"
  }