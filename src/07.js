function repeatLetter(text, times = 1) {
	let res = '';
	for(let i = 0; i < text.length; i++ ){
		if(text[i] == " "){
			if(i==text.length-1){
				break;
			}
			res += text[i];
		}
		else{
			res += text[i].repeat(times);
		}
	}

	return res;
}

// console.log( repeatLetter('Hello World! ', 2));
module.exports = repeatLetter;