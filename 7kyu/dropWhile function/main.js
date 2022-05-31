//parameter - takes an array, and a function to add to the array
// return the array with the function performed on it but it is not mutable
function isEven(num) {
	return num % 2 === 0;
  }
  var seq = [2,4,6,8,1,2,5,4,3,2,1,3,3];

  function dropWhile(arr, pred) {
	for (var i = 0; i < arr.length && pred(arr[i]); i++) ;
	console.log(arr.slice(i)) 
	// console.log(arr.map(pred))
// console.log(pred(arr.length))
// if (pred(arr.length) === true){
// 	//console.log(arr.slice(4))
// 	console.log(arr.shift())
// }
// else {
// 	return []
}

dropWhile(seq,isEven) // should return [1,2,5,4,3,2]


//solution
function dropWhile1(arr, pred) {
	for (var i = 0; i < arr.length && pred(arr[i]); ++i) ;
	return arr.slice(i)
  }

  //other solution
  function dropWhile2(arr, pred) {
	while (arr.length && pred(arr[0])) arr.shift()
	return arr
  }