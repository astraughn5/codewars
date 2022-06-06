// array of objects with strings and numbers, format of string will always be first letter capital
// result = count of people who are from Europe and know JavaScript, will be an integer, will return 0 if there is none

function countDevelopers(list) {
	// access the array of objects and print continent and language
	// loop through each object and print continent and language
	// add up each object that is returned
	let count = 0
	const europeJS = list.some(developer => {
		if (developer.language === 'JavaScript' && developer.continent === 'Europe'){
			count++
		}
	})
	console.log(count)

  }

  const list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Europe', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ];
  countDevelopers(list1) // output of 2

  const list2 = [
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 19, language: 'HTML' },
    { firstName: 'Lukas', lastName: 'R.', country: 'Austria', continent: 'Europe', age: 89, language: 'HTML' }
  ];
  countDevelopers(list2) //output of 0


  //other solution
  function countDevelopers1(list) {
	return list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length
  }
  console.log(countDevelopers1(list1))

  //other solution
  function countDevelopers2(list) {
	return list.reduce((count, dev) => 
	  (dev.continent === 'Europe' && dev.language === 'JavaScript')
		? count + 1 : count
	  , 0);
  }