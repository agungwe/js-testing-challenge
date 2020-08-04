function symmetrical(value) {
  if(typeof(value) === 'number'){
  	value = value.toString();
  	value = value.replace(/[^0-9]/g,"").toLowerCase();
  }
  else{
  	value = value.replace(/[^a-zA-Z]/g,"").toLowerCase();
  }
  
  let reverse_text = value.split("").reverse().join("");
  
  if( value === reverse_text){
      return true;
  }

  return false;
}

// console.log( symmetrical('malam')); // true
// console.log( symmetrical('taat'));  // true
// console.log( symmetrical('tidur')); // false
// console.log( symmetrical(1234));    // false
// console.log( symmetrical(108801));  // true
// console.log( symmetrical(8001008)); // true

module.exports = symmetrical;