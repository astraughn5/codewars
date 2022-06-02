//parameter is a positive integer, up to 500,000
// result will be the count of the divisors of the number n

function getDivisorsCnt(n){
    // take the number n and see how many times it can be divided up to the number n
	// add the number that can divide into it into an array
	// countt the number of indexes in the array
	// return the value
	let arr = []
	for (let i = 0; i <= n; i++){
		if (n % i === 0){
			arr.push(i)
		}
	}
	return arr.length
}

getDivisorsCnt(1) // result = 1
getDivisorsCnt(10) // result = 4 --> (1,2,5,10)
getDivisorsCnt(11) // result = 2 --> (1,11)
getDivisorsCnt(30) // result = 8 --> (1,2,3,5,6,10,15,30)

//other solution
function getDivisorsCnt(n) {
	for (var d = 0, i = n; i > 0; i--) {
	  if (n % i == 0) d++;
	}
	
	return d;
  }