//parameter = array of objects where the Key and Value follow the same format
// return a boolean value if all the coding languages are the same

function isSameLanguage(list) {
	// take the array and loop within each object to check if languages all are the same 
	let arr = []
	list.forEach(e => {
		arr.push(e.language)
	})
	return arr.every( x => {
		if (x === arr[0])
		return true
	})
  }


  var list1 = [
	{ firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
	{ firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
	{ firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
  ];

  var list2 = [
	{ firstName: 'Mariami', lastName: 'G.', country: 'Georgia', continent: 'Europe', age: 29, language: 'Python' },
	{ firstName: 'Mia', lastName: 'H.', country: 'Germany', continent: 'Europe', age: 39, language: 'Ruby' },
	{ firstName: 'Maria', lastName: 'I.', country: 'Greece', continent: 'Europe', age: 32, language: 'C' },
  ];

  console.log(isSameLanguage(list1)) // output returns True
console.log(isSameLanguage(list2)) //output returns False

//shorter solution
function isSameLanguage(list) {
	return list.every(e => e.language === list[0].language);
  }