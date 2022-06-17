//receive an array of objects where the key and value are string or integers that follow the same format. they are the same size
//return an array of the oldest developer and both if there are two
//Big O guess: sorting = O of N^2 filter = O of N



function findSenior(list) {
	// loop through the array
	// find the age and check if it is higher than the next age
	// move the higher age to the first position
	//filter the array of objects by the highest age or if its a tie by the ages
	// return an array of the objects

	//sorting can check the elements of an array and return them sorted
	//filter will check if the ages are the same and return them if they are in an object in an array


	let sorter = list.sort((a , b) => b.age - a.age)
	
	return sorter.filter( x => {
		if (x.age === sorter[0].age){
			return sorter
		}
		else {
			//console.log(sorter)
		}
	})
	//console.log(sorter)
  }

  let list1 = [
	{ firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
	{ firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
	{ firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
	{ firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
  ];


  let list2 = [
	{ firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
	{ firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
	{ firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  ];

  console.log(findSenior(list1)) //output is { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' }, { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },{ firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' }, { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },

  console.log(findSenior(list2))

//other solution
function findSenior1(list) {
	let max = 0;
	list.forEach((obj) => max = Math.max(max, obj.age));
	return list.filter(obj => obj.age === max);
  }