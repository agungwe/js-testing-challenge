function char_to_int(c){
	switch (c){
		case 'I': return 1;
		case 'V': return 5;
		case 'X': return 10;
		case 'L': return 50;
		case 'C': return 100;
		case 'D': return 500;
		case 'M': return 1000;
		default: return -1;
	}
}

function roman(text) {
	if(text == null) return -1;
	var num = char_to_int(text.charAt(0));
	var pre, curr;

	for(var i = 1; i < text.length; i++){
		curr = char_to_int(text.charAt(i));
		pre = char_to_int(text.charAt(i-1));
		if(curr <= pre){
		num += curr;
		} else {
		num = num - pre*2 + curr;
		}
	}

	return num;
}

// console.log(roman('I') );  // 1
// console.log(roman('II') );  // 2
// console.log(roman('III') ); // 3
// console.log(roman('V') );   // 5
// console.log(roman('VI') );  // 6
// console.log(roman('X') );   // 10
// console.log(roman('L') );   // 50
// console.log(roman('C') );   // 100
// console.log(roman('D') );   // 500
// console.log(roman('M') );   // 1000
// console.log(roman('MMXVIII') ); // 2018

module.exports = roman;