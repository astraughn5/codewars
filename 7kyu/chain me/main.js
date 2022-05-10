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
function chain(v, fns) {
	return fns.reduce(function(v, fn) { return fn(v) }, v);
  }

  // other solution
  function chain(x, fns) {
	return fns.reduce(function(x, fn) {
	  return fn(x)
	}, x)
  }