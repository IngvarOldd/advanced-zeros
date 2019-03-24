module.exports = function getZerosCount(number, base) {
  // your implementation
  let counter,
      zerosCounter = number;
  for (let i = 2; i <= base; i++) {
    counter = 0;
    while (base % i == 0) {
      counter++;
      base = Math.floor(base / i);
    }
    let zerosNum = 0;
        num = number;
    while (Math.floor(num / i) > 0) {
      zerosNum += Math.floor(num / i);
      num = Math.floor(num / i);
    }
    zerosCounter = Math.min(zerosCounter, Math.floor(zerosNum / counter));
  }
  return zerosCounter;
}