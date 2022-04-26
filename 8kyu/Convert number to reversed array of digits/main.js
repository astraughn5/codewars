function digitize(n) {
	let array = String(n).split('').map((n) => {
		return Number(n)
	})
	array = array.reverse()
	console.log(array)
  }
  digitize(987654321)


  // best solution 
  function digitize(n) {
	return String(n).split('').map(Number).reverse()
  }

  // other solution
  function digitize(n) {
	return Array.from(String(n), Number).reverse();
  }