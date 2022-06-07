
//array of objects, formatting will always be consisten 
// return a new key value where you greet each developer of the object


function greetDevelopers(list) {
	// loop through the array to add a new key value within each object
	// return object
	list.forEach(object=>{
		object.greeting = `Hi ${object.firstName}, what do you like most about ${object.language}?`
	})
	console.log(list)
  }


  const list1 = [
	{
	  firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
	},
	{
	  firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
	},
	{
	  firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
	},
  ];
  greetDevelopers(list1) // objects should include greeting: 'Hi Sofia, what do you like most about Java?

 //other solution 
  function greetDevelopers1(list) {
	list.forEach(v=> v.greeting= `Hi ${v.firstName}, what do you like the most about ${v.language}?`)
	return list
  }

  //other solution
  function greetDevelopers2(list) {
	list.forEach(function(developer) {
	  developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`;
	});
	
	return list;
  }