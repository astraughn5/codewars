// PREP
// take a number, determine if the the sum of the consecutive numbers are odd or even. If they both are odd, return odd, even return even, or either
// P: number, whole, might be negative
// R: return the numbers
// E: see test cases

function oddOrEven(n){
	//need to create an array from 1 to the n
	let str = ''
	let odd = []
	let even = []
	for (let i = 1; i <= n ; i++){
		str += `${i} `
	}
	let arr = str.split(' ').map(Number)
	// console.log(str)
	// console.log(arr)

	// need to count the number of odd numbers up to n
	// need to count the number of even numbers up to n
	for (let index = 0; index <= arr.length -2 ; index++){
		if (arr[index] % 2 === 0){
			even.push(arr[index])
		}
		if (arr[index] % 2 !== 0){
			odd.push(arr[index])
			//odd += 1
			
		}	
		// console.log(index)	
	}
	// console.log(even)
	// console.log(odd)
		

	// compare the number of even numbers and odd numbers with a conditional to return the correct response
	let countEven = even.length
	let countOdd = odd.length
	
	console.log(countEven)
	console.log(countOdd)
	if (countEven != countOdd){
		console.log('either') 
	}
	else if (countEven % 2 || countOdd % 2){
		console.log('odd') 
	}
	else {
		console.log('EVEN') 
	}
	
	
}

oddOrEven(1) // return either
oddOrEven(6) // return odd - 3 odds + 3 evens
oddOrEven(8) // return even - 4 odds + 4 evens
oddOrEven(7) //return either
oddOrEven(16) // 8 even, 8 odd, return even


//solution

function oddOrEven(n) {
	return n % 2 ? EITHER : n / 2 % 2 ? ODD : EVEN
  }

  // other solution
  function oddOrEven(n) {
	if (n !== 1){
	  if (n % 2 === 1) {
		return "Either"
	  }
	  if (n/2 % 2 === 0) {
		return "Even"
	  } else {
		return "Odd"
	  }
	}
	return "Either"  
  }