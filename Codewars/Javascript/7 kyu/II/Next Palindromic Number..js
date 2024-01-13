function nextPalUp(val) {
  let str = `${val}`,
    len = Math.ceil(str.length / 2),
    firstPart = str.slice(0, len),
    secondPart = str.slice(-len),
    firstPartReverse = [...firstPart].reverse().join("");

  if (+secondPart >= +firstPartReverse) firstPart = `${+firstPart + 1}`;

  secondPart = [...firstPart]
    .reverse()
    .slice((str.length % 2) + firstPart.length - secondPart.length)
    .join("");

  return +(firstPart + secondPart);
}

function isPalindrome(num) {
  return num.toString() === num.toString().split("").reverse().join("");
}

function nextPal(val) {
  val++;
  while (!isPalindrome(val)) {
    val++;
  }
  return val;
}

console.log(nextPal(11));
console.log(nextPalUp(11));
console.log(nextPal(191));
console.log(nextPalUp(191));
console.log(nextPal(2541));
console.log(nextPalUp(2541));
