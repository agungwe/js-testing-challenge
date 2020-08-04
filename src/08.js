function arrayMirroring(numberList) {
  let mirrorList = numberList.slice(0);
  mirrorList.reverse();
  return numberList.concat(mirrorList);
}

console.log(arrayMirroring([1, 2, 3]));

module.exports = arrayMirroring;