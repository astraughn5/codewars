//parameter - integers, 4 numbers min, will always be +, will be in an array
// will be a sum of 2 lowerst + integers

function sumTwoSmallestNumbers(numbers) {  
	//sort by number order
	// sum the first two in the index
	numbers.sort((a,b)=>{
		return a -b
	})
	return numbers[0]+numbers[1]
	//console.log(numbers[0]+numbers[1])
  }

  sumTwoSmallestNumbers([19, 5, 42, 2, 77]) //output will be 5+2 = 7
  sumTwoSmallestNumbers([15, 28, 4, 2, 43]) // output will be 4+2 = 6

  //other solution
  function sumTwoSmallestNumbers(numbers){  
	numbers = numbers.sort(function(a, b){return a - b; });
	return numbers[0] + numbers[1];
  };


