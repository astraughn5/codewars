// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


function countPositivesSumNegatives(input) {
   if (input === null || input === undefined || input.length < 1){
	   return []
   }
   else{
		arrayPositive = input.filter(num => num > 0)
		arrayNegative = input.filter(num => num < 0)
		// console.log(arrayPositive)
		// console.log(arrayNegative)
		
		newArray = [arrayPositive.length,arrayNegative.reduce((acc,c)=> acc + c,0)]
		return newArray
		// console.log(newArray)
	}
}
countPositivesSumNegatives([0,1,-2,4])

//other solutions
function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}

//other solution
function countPositivesSumNegatives(input) {
	var newArr = [];
	var positiveNumber = 0;
	var negativeNumber = 0;
	
	// Validate Input
	if (input === null || input.length === 0)
	  return newArr;
	
	// Loop through array of Numbers 
	for (var i = 0; i < input.length; i++) {
	  if (input[i] == 0)
	   continue;
	
	  // Count positives
	  else if (input[i] > 0) 
		positiveNumber++;     
		  
	  // Sum negatives
	  else if (input[i] < 0) 
		negativeNumber += input[i];
	  
	}
	
	// Prepare Output
	newArr.push(positiveNumber);
	newArr.push(negativeNumber);
	
	return newArr;
  }