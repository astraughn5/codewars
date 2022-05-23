//PREP
//P: list of any data type as an array, can include null / none
//result: return the value's index within the list or -1 if it does not exist


function lastIndexOf(head, value) {
	//check if value is included in the head
	// if it is, give the index of the value
	if (!head){
	return -1;
	}
	else{
		console.log(head.indexOf(value))
	}
  }

//   lastIndexOf([1, 2, 3], 2) //output = 1 because 2 is in the index 1
//   console.log(lastIndexOf(null, 17)) //output = -1 because there is no 17
//   lastIndexOf(['aaa', 'b', 'abc'], 'aaa') //output = 0 because aaa matches the 0 index
//   lastIndexOf([17, '17', 1.2], 17)
// 	lastIndexOf([17, '17', 1.2], '17')
//     lastIndexOf([1, 2, 3, 3], 3)

	function lastIndexOf2(head, value) {
		let index = []
		for (let i = 0; i <= head.length; i++){
			if (head[i] === value){
				index.push(i)
			}
		}
		console.log(index.toString())
	  }
	lastIndexOf2([1, 2, 3], 2)

	//solution
	function lastIndexOf(head, value) {
		if(!head) return -1;
		var arr = [];
		arr.push(head.data);
		while(head = head.next) {
		  arr.push(head.data);
		}
		return arr.lastIndexOf(value);
	  }