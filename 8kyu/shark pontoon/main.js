function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
	sharkSpeed = (dolphin) ? (sharkSpeed / 2) : sharkSpeed
	// console.log(youSpeed)
	for (let s = 1; s <=100 ; s++){
		pontoonDistanceDiffYou = pontoonDistance - youSpeed * s
		pontoonDistanceDiffShark = sharkDistance - sharkSpeed * s
		// console.log(pontoonDistanceDiffYou)
		// console.log(pontoonDistanceDiffShark)
		// console.log(s)
		if (pontoonDistanceDiffYou <= 0){
			return 'Alive!'
		}
		if (pontoonDistanceDiffShark <= 0){
			return 'Shark Bait!'
		}
		if (youSpeed === 0){
			return 'Shark Bait!'
		}

	}
  }

  console.log(shark(43, 175, 0, 1, false))


//top solution
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
	if(dolphin){
	  sharkSpeed /= 2;
	}
	return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? "Alive!" : "Shark Bait!";
  }

  //other solution
  const shark = (pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) => {
	let youTime = pontoonDistance / youSpeed
	let sharkTime = sharkDistance / (dolphin ? sharkSpeed / 2 : sharkSpeed)
	
	return sharkTime < youTime ? 'Shark Bait!' : 'Alive!'
  }