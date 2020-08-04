function mode(dataset) {
    let modes = [], count = [], i, number, maxIndex = Number.MIN_VALUE;
    for (i = 0; i < dataset.length; i += 1) {
        number = dataset[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
 
    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }
 
    return {modes: modes.slice().sort((a,b) => b-a), maxValue: maxIndex};
}

function median(dataset) {
    // median of [3, 5, 4, 4, 1, 1, 2, 3] = 3
    var median = 0, numsLen = dataset.length;
    dataset.sort();
 
    if (
        numsLen % 2 === 0 // is even
    ) {
        // average of two middle dataset
        median = (dataset[numsLen / 2 - 1] + dataset[numsLen / 2]) / 2;
    } else { // is odd
        // middle number only
        median = dataset[(numsLen - 1) / 2];
    }
 
    return median;
}


function range(dataset) {
    dataset = dataset.slice().sort((a,b) => a-b);
    return  dataset[dataset.length - 1]-dataset[0];
    // return [dataset[0], dataset[dataset.length - 1]];
}

function stats(dataset) {
  let statistic = {
  	mean: null,
  	median: median(dataset),
  	range: range(dataset),
  	mode: null,
  	largest: dataset.slice().sort((a,b) => b-a)[0],
  	smallest: dataset.slice().sort((a,b) => a-b)[0],
  	sum: dataset.reduce((acc,curval) => acc + curval, 0),
  	count: dataset.length,
  }

  statistic.mean = statistic.sum/statistic.count;

  const resmode  = mode(dataset);

  statistic.mode = `${resmode.modes.join(", ")},`;
  if(resmode.modes.length > 1){
  	statistic.mode += ' each';
  }

  statistic.mode += ` appeared ${resmode.maxValue} times`;
  
  return statistic;
}

// console.log(stats([10, 2, 38, 23, 38, 23, 21]));
module.exports = stats;