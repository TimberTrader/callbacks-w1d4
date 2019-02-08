var words = ["ground", "control", "to", "major", "tom"];

function map(wordList, callBack) {
  let result = [];
  wordList.forEach(function(x) {
    callBack(x);
    result.push(callBack(x));
  })
  console.log(result)
}

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});