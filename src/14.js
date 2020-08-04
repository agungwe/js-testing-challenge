function isIsogram(text) {
  let chars = [];
  for(let i =0; i < text.length; i++){
  	let found = chars.find(element => element == text[i]);
  	if(typeof found === 'undefined'){
  		chars.push( text[i]);
  	}
  	else{
  		return false;
  	}
  	
  }

  return true;
}

// console.log(isIsogram('gelas'));// true
// console.log(isIsogram('makan'));// false

module.exports = isIsogram;