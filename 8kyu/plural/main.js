// used parseInt to accept strings, the problem asked for integers so parseInt was unnecessary

function plural(n) {
	let num = parseInt(n)

	if (Math.floor(num) === 0){
		return true
	}
	else if (Math.floor(num) === 1){
		return false
	}
  	else{
		return true
  }
}
 console.log(plural(2))

 // top solution
 function plural(n) {
	return n !== 1;
  }

  // other solution
  function plural(n) {
	return n === 1 ? false : true;
  }