function add(num) {
	return num + 1;
  }
  
  function mult(num) {
	return num * 30;
  }


function chain (input,fs){
	fs = mult(add(input))
	return fs
}  


console.log(chain(2,[add,mult]))

//also tried
function chain (input,fs){
	fs = fs[1](fs[0](input))
	return fs
}  

//solution
function chain(input, fs) {
	return fs.reduce(function(input, fn) { return fn(input) }, input);
   }

  // other solution
  function chain(input, fs) {
	return fs.reduce(function(input, fn) {
	  return fn(input)
	}, input)
  }