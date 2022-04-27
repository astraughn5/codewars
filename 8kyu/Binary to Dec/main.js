// Complete the function which converts a binary number (given as a string) to a decimal number.
function binToDec(bin){
	let dec = parseInt(bin, 2)
	return dec
}

console.log(binToDec(['1001001']))

//top solution
function binToDec(bin){
	return parseInt(bin,2);
  }

  //other solution
  const binToDec = bin => parseInt(bin,2);