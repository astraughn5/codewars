// Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('john McClane'); => "McClane john"
// my solution
function nameShuffler(str){
	const split = str.split(' ')
	console.log(split)
	console.log(split[1]+ ' ' + split[0])
}

nameShuffler('Alex Straughn')

//Best solution
function nameShuffle(str){
	console.log(str.split(' ').reverse().join(' '))
  }
  nameShuffle('Alex Straughn')



// split(' ') takes the string and splits each word by the space and adds it to a separate index in an array
// reverce() takes the array and reverses the index
// join(' ') takes the array and joins the index by the space