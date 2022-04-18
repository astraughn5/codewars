function betterThanAverage(classPoints, yourPoints) {
	let sum = 0
	let students = 0
	let average = 0
	classPoints.forEach((element,index) => {
	  sum += element
	  students = index + 1
	  average = sum / students
	})
	
	// console.log(average)
	// console.log(yourPoints)

	if (yourPoints > average){
		return true
	}
	else{
		return false
	}


	// console.log(sum)
	// console.log(students)
	
  }
  
console.log(betterThanAverage([2,4,4],6))



/* attempt 2 trying to use turnary 
function betterThanAverage(classPoints, yourPoints) {
	let sum = 0
	let students = 0
	let average = 0
	classPoints.forEach((element,index) => {
	  sum += element
	  students = index + 1
	  average = sum / students
	})
	
	console.log(average)
	console.log(yourPoints)

	yourPoints > average ?  console.log(true) : console.log(false)

	// console.log(sum)
	// console.log(students)
	
  }
  
  best practice solution 1
  function betterThanAverage(classPoints, yourPoints) {
	return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
  }

  best practice solution 2
  function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  var classAvg = 0;
  for (var i = 0; i < classPoints.length; i++){
    classAvg += classPoints[i]; 
  }
  classAvg = classAvg/classPoints.length; 
  return yourPoints > classAvg;
}

  best practice solution 3

function betterThanAverage(classPoints, yourPoints) {
  const allPoints = [yourPoints, ...classPoints];
  const average = allPoints.reduce((acc,val) => acc + val) / allPoints.length;
  
  return yourPoints > average; 
}
*/