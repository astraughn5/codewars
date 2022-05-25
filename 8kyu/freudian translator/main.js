function toFreud(string) {
	if (!string){
		return ''
	}
	splitWord = string.split(' ')
	// console.log(splitWord)
	result = splitWord.map(x => x = 'sex')
	// result = split.replace(string, 'sex')
	console.log(result.join(' '));
  }

  toFreud('test')
  toFreud('')
  toFreud('This is a test.')

  //top solution
  const toFreud = str => str === '' ? '' : str.split(' ').map(e => 'sex').join(' ')
