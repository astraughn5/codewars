function stringClean(s){
	// Function will return the cleaned string
	newS = s.replace(/[0123456789]/g,'')
	return newS
  }

  console.log(stringClean('123gt!aa ss'))

  //best solutions
  function stringClean(s){
	return s.replace(/\d/g, "");
  }

  function stringClean(s){
	return s.replace(/[0-9]/g, '');
  }