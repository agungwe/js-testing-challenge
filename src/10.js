function convertToSymbol(word, censorSymbol) {
    let asteriskSentence = '';
    for(let asterisks=0;asterisks<word.length;asterisks++) {
        asteriskSentence+=censorSymbol;
    }
    return asteriskSentence;
}


function censor(text, censoredWords, censorSymbol= '#') {
  for(let word=0; word < censoredWords.length; word++) {
  	  let regEx = new RegExp(censoredWords[word], "ig");
      text = text.replace(regEx, convertToSymbol(censoredWords[word],censorSymbol));
  }

  return text;
}

console.log(censor('Saya ingin makan nasi goreng.', ['saya', 'nasi']));

console.log(censor('Pada hari Minggu saya tidur siang.', ['minggu', 'tidur'], '*'));

module.exports = censor;