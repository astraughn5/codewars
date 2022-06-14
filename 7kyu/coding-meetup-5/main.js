//parameter is an araay of objects containing strings and integers that follow the same format
//return an object that counts the number of coding languages with the key being the language and the value being count


function countLanguages(list) {
	// store the number of languages and return the length in an object 
	let array = []
	let count = {}
	list.forEach(object => {
		if (object.language){
			array.push(object.language)
		}
	})
	console.log(array)
	// array.forEach((key, value) => {
	// 	count[key] = 
	// })
	for (const num of array){
		count[num] = count[num] ? count[num] + 1 : 1
	}
	console.log(count)
}

  var list1 = [
	{ firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
	{ firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
	{ firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
	{ firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
  ];

console.log(countLanguages(list1)) //output {C:2, JavaScript: 1, Ruby: 1}

//better solution
function countLanguages1(list1) {
	var count = {};
	list.forEach(x => count[x.language] = (count[x.language] || 0) + 1);
	return count;
  }