describe("Solution", function(){
	it("basic tests", function(){
	  var input = c
	  var expected = [ 2, 9, 3, 49, 4, 1 ];
	  Test.assertSimilar(squareOrSquareRoot(input), expected);
	  
	  input = [ 100, 101, 5, 5, 1, 1 ];
	  expected = [ 10, 10201, 25, 25, 1, 1 ];
	  Test.assertSimilar(squareOrSquareRoot(input), expected);
	  
	  input = [ 1, 2, 3, 4, 5, 6 ];
	  expected = [ 1, 4, 9, 2, 25, 36 ];
	  Test.assertSimilar(squareOrSquareRoot(input), expected);
	});
  });