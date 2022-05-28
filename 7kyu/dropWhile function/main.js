//parameter - takes an array, and a function to add to the array
// return the array with the function performed on it but it is not mutable
function isEven(num) {
	return num % 2 === 0;
  }
  var seq = [2,4,6,8,1,2,5,4,3,2];

  function dropWhile(arr, pred) {
  let data = []
	console.log(arr)
  console.log(arr.map(pred))
	for (let i = 0; i <= arr.length; i++){
		if (arr.map(pred) === 'true'){
			data.push(i)
		}
	}
	console.log(data)


}
dropWhile(seq,isEven) // should return [1,2,5,4,3,2]