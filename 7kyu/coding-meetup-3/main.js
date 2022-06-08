//parameter = array of objects including key value pairs of integers or strings, format will always be the same
//return = return true or false based on if a ruby developer is attending


function isRubyComing(list) {
	// take in the list
	// loop through each object
	// check if language === 'Ruby'
	// return true if at least one criteria matches else return false
	let rubyYes = 0
	list.some(key => {
		if (key.language === 'Ruby') {
			rubyYes++
		}
	})
	if(rubyYes){
		return true
	}
	else {
		return false
	}
	//console.log(rubyYes)
}

function isRubyComing1(list) {
	return list.some(key => key.language === 'Ruby')
}


//better solution
function isRubyComing2(list) {
	return list.some(e => e.language === 'Ruby');
}


var list1 = [
	{ firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
	{ firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
	{ firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
  console.log(isRubyComing(list1)) // output = true
  console.log(isRubyComing1(list1))
  console.log(isRubyComing2(list1))
 
var list2 = [
	{ firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
	{ firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' } 
];

console.log(isRubyComing(list2)) //output = false
console.log(isRubyComing1(list2))