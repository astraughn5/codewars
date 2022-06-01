//parameters = string of words, no numbers
//result = sorted alphabetically by last character in the index

function last1(x){
//split string into array
//sort index based on last character
//return array
let word = x.split(' ')
let newArr = []
let arr = []
word.map(element => {
		let lastChar = element.split('')
		let sorter = element[element.length - 1]
		newArr.push(sorter)
		// sorter.sort(function( a,b ){
		// 	return a.length - b.length	
		// })
		// console.log(sorter)
		
	})
	console.log(newArr)
	newArr.sort(function( a,b ){
		return a.length - b.length	
	})
console.log(newArr)
}


// word.map(element => {
// 	let lastChar = element[element.length - 1]
// 	console.log(lastChar)

// 	})
// 	lastChar.sort(function (a , b){
// 		return a.localeCompare(b)
// });

// console.log(word[word.length - 1])


last('man i need a taxi up to ubud')	//output ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
//last ('take me to semynak') //output ['take', 'me', 'semynak', 'to']
//last('what time are we climbing up the volcano') //output ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']

//solution
function last2(x){
	return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
  }
  console.log(last2('man i need a taxi up to ubud'))

  //other solution
  function last (words) {
	return words.split(' ').sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)))
  }
  console.log(last('man i need a taxi up to ubud'))