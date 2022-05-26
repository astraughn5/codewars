
// 3 parameters, integers, 
// result = round to nearest integer, return simple and compound

function interest(P,r,n) {
	// your code here
	let arr = []
	simple = Math.floor(P * (1+ r * n))
	arr.push(simple)

	power =  (1 + (r))**n
	console.log(power)
	compound = Math.floor(P * power)
	arr.push(compound)

	console.log(arr)

  }

  interest(100,.1,1)
  interest(100,.1,2)
  interest(100,0.1,10)


  //solution
  function interest(P,r,n) {
	return [Math.round(P * (1 + r * n)), Math.round(P * Math.pow(1+r, n))];
  }

  //other solution
  const interest = (p,r,t) => [ p * (1+r*t), p * ((1+r)**t) ].map(Math.round) ;