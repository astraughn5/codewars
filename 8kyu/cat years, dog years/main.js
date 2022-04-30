// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

 var humanYearsCatYearsDogYears = function(humanYears) {
	checkHumanYears = humanYears
	catYearN = 4
	dogYearN = 5

	if (checkHumanYears === 1) {
		return [checkHumanYears, 15, 15]
	}
	if (checkHumanYears === 2){
		return [checkHumanYears, 24, 24]
	}
	else {
		return [checkHumanYears, 24 + (checkHumanYears - 2) * catYearN, 24 + dogYearN * (checkHumanYears - 2)]
	}
  }
 console.log(humanYearsCatYearsDogYears(10)) 

 // solution 1
 var humanYearsCatYearsDogYears = function(y) {
	if (y == 1) return [1, 15, 15]
	if (y == 2) return [2, 24, 24]
	return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
  }

  //solution 2
  const humanYearsCatYearsDogYears = humanYears => [
	humanYears,
	( humanYears - 1 ? 16 : 11 ) + 4 * humanYears,
	( humanYears - 1 ? 14 : 10 ) + 5 * humanYears,
  ];