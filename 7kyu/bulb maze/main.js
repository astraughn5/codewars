// make it to where the x and os switch

function bulbMaze(maze){
	let split = maze.split('')
	let me = 0
	for (let index = 0; index <= split.length; index++){
		
		// flipping the xs and os
		if (split[index] == 0 && split[index] =='x'){
			split[index] = 'x'
		}
		else if (split[index] == 0 && split[index] =='o'){
			split[index] = 'o'
		}
		if (split[index] == ' '){
			split[index] == ' '
		}
		if (split[index] % 2 == 0 && split[index] == 'x'){
			split[index] = 'x'

		}
		else if (split[index] % 2 == 0 && split[index] == 'o'){
			split[index] = 'o'
		}
		
		if (split[index] % 2 != 0 && split[index] == 'x'){
			split[index] = 'o'
		}
		else if (split[index] % 2 != 0 && split[index] == 'o'){
			split[index] = 'x'
		}
		
		//establishing where me is 
		if (me <= split.length){
			me += 1
			if (me == split.length + 1){
				break
			}
		}
		else {
			return me
		}
		
		// if (split[me] == 'o'){
		// 	console.log('false')
		// }
		// else if (split[me == 'x']){
		// 	console.log('true')
		// }
		console.log(split)


	}
	console.log(split)
	
}

  


  //solution
  function bulbMaze1(maze){
	//coding and coding..
	let xCounter = 0;
	let oCounter = 0;
	let spaceConter = 0;
	let k = 0;
	for(let i = 0;i<maze.length;i++){
	  if(maze[i]=='x'){
		xCounter++;
	  }else if(maze[i]=='o'){
		oCounter++;
	  }spaceConter++;
	}
	for(let i = 0;i<maze.length;i++){
	  if(maze[i]=='x'&&i%2==0){
		k++
	  }else if(maze[i]=='o'&&i%2==1){
		k++
	  }k++
	}
	return xCounter+oCounter+spaceConter==k?true:false;
  }

  // other solution 
  function bulbMaze2(map){
	const pos = ['x', 'o']
	const arr = [...map] // using the ... in front of map is a way to split it
	// console.log(arr)
	const result = arr.map((el, i) => el === ' ' || el === pos[i % 2])

	return result.every(el => el === true)
  }

  console.log(bulbMaze2('xo oxox'))

  function splitString(map){

	const arr = [...map]
	
	console.log(arr) // output would be [’x’, ‘o’, ‘ ‘ ,’x’, ‘o’, ‘x’, ‘o’]
	
	}
	
	splitString('xo xoxo')

function test (){
let i = 5
	if (i % 2){
		console.log('yes')
	}
	else {
		console.log('no')

	}
	
}
	
	test()

  // third solution
  function bulbMaze3(map){
	if (map.startsWith('o')) return false
	let arr = map.split('');
	if (arr.some((el,i) => i%2 == 0 && el == 'o') || arr.some((el, i) => i%2 == 1 && el == 'x')) return false
	return true
  }