// Simple, remove the spaces from the string, then return the resultant string.


// my solution
function noSpace(x){
	return x.split(' ').join('')
  }



// using reg ex
function noSpace(x){
	return x.replace(/\s/g, '');
  }

  // other solution 
  function noSpace(x){
	var result = ""
	for(var index = 0; index < x.length; index++){
	  if(x[index] !== " "){
		result += x[index];
	  }
	}
	return result;
  }