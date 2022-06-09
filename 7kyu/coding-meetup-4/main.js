//parameter is an array of objects that are formatted the same
// string with the first being <first Name> , <country>

function getFirstPython(list) {
	// take the arrays and loop through them
	// check if language === 'Python'
	// return <firstname> , <country> of the object
	// else return 'There will be no Python developers'
	let python = list.find(object => object.language === 'Python')
	if (python){
		return `${python.firstName}, ${python.country}`
	}
	else {
		return 'There will be no Python developers'
	}
  }

//other solution
function getFirstPython1(list) {
	const dev = list.find(x => x.language === "Python")
	return dev ? `${dev.firstName}, ${dev.country}` : "There will be no Python developers"
  }

  //other solution
  function getFirstPython2(list) {
	for (var i=0; i<list.length; ++i)
	  if (list[i].language=='Python')
		return list[i].firstName+', '+list[i].country;
	return 'There will be no Python developers';
  }
  


  var list1 = [
	{ firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
	{ firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
	{ firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
  ];
  console.log(getFirstPython(list1)) // output will be Victoria, Puerto Rico
  

  var list2 = [
	{ firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
	{ firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
  ];
 console.log(getFirstPython(list2))

  // getFirstPython(list2) //output will be 'There will be no Python developers'