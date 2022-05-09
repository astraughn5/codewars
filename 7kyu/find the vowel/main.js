// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)

// tried solution with loop and could not get the zero index to stop
function myVowelIndices(word){
	let vowelArray = []
	let lowerWord = word.toLowerCase().toString()
	// let vowels = ['a', 'e', 'i', 'o', 'u']
	for (let i = 0 ; i < lowerWord.length; i++ ){
		// console.log(word[i])
		if ( lowerWord[i] === 'a' || lowerWord[i] === 'e' || lowerWord[i] === 'i' || lowerWord[i] === 'o' || lowerWord[i] === 'u' || lowerWord[i] === 'y'){
			let vowelIndex = word.indexOf(word[i])
			console.log(word[i])
			if (vowelIndex === -1){
				vowelIndex = word.length
				vowelArray.push(vowelIndex)
			}
			else {
				vowelIndex = word.indexOf(word[i + 1])
				vowelArray.push(vowelIndex)
				console.log(vowelIndex)
			}
			}
		else{
		}
	}
	console.log(vowelArray)	
}



// solution
function vowelIndices(word){
	const str = 'aeiouy';
	const arr = word.toLowerCase().split('');
	let answer = [];
	arr.forEach((name, i) => {
	  if (str.indexOf(name) !== -1) {
		answer.push(i + 1);
	  }
	});
	return answer;
  }

console.log(vowelIndices('Apple'))
