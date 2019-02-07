function findWaldo(arr, found) {
  arr.forEach(function(name) {
    if (name === "Waldo") {
        found(arr.indexOf(name));
    }
  })
}
function actionWhenFound(location) {
  console.log(`Found Waldo at index ${location}`);
}
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);