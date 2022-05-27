// take in a str operation with a + or -
// result will be the operation running

function strToNum (str){
	let splitArray = str.split(' ')
	if (splitArray.includes('+')){
		const add = () => {
			console.log(Number(splitArray[0]) + Number(splitArray[2]))
		}
		add()
	}
	else {
		const subtract = () => {
			console.log(Number(splitArray[0]) - Number(splitArray[2]))
		}
		subtract()
	}
	let parse = splitArray.map(x => parseInt(x))

	// console.log(parse.join(' '))

	
	// console.log(splitArray)
	// // let add = '+'
	// // let subtract = '-'
	// // let arr = []
	// // if (splitArray.includes(add)){
	// // arr.push("+")
	// }
	 
}

strToNum('1 + 1') //output should be 2
strToNum('3 - 2') //output should be 1
