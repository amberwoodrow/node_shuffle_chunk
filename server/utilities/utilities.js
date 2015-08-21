function shuffle(arr) {
  var shuffledArr = arr.sort(function() { return 0.5 - Math.random();});
 return shuffledArr;
}

function chunk(arr, size) {
  var shuffledArr = shuffle(arr);
  var chunkedArr = [];
  var arrLength = arr.length;
  for (var i=0; i<arrLength; i+=size) {
    if (i < arrLength) {
      chunkedArr.push(arr.splice(0, size));
    }
  }
  return chunkedArr;
}

var people = ['Jim Bob', 'Betty Sue', 'Bo', 'Bubba', 'Joe John', 'Aquanisha', 'Slim', 'Billy Bob', 'Forrest', 'Pervis', 'LeAnne', 'Shelbylyn', 'Sue Ellen', 'Wilma'];
// var inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// chunk(inputArray, 3);
// chunk(inputArray, 4);
// console.log(chunk(people, 3));

module.exports = {
  shuffle : shuffle,
  chunk : chunk,
  people : people
};