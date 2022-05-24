//arr, numbers, 
// descending order of array, difference of consecutive index, sum of consecutive 
function sumOfDifferences(arr) {
	arr.sort((a,b)=> b-a)
	let sum = 0
	if (!arr){
		return 0
	}
	else if (arr.length === 1){
		return 0
	}
	else {
		arr.reduce((acc, c)=>{

		},0)
	}
	for (let i = 0; i < arr.length -1 ; i++){
		sum += (arr[i] - arr[i+1])
		//console.log(i)
		//console.log(arr.length)
		// console.log(sum)
	}
	return sum
}

console.log(sumOfDifferences([1, 2, 10,13,2]))

//solution 
function sumOfDifferences2(arr) {
	let sorted = arr.sort((a, b) => b - a)
	let sum = 0;
	for (let i = 0; i < sorted.length - 1; i++) {
	  sum += (arr[i] - arr[i + 1]);
	}
	return sum;
  }

  console.log(sumOfDifferences2([1, 2, 10,13,2]))