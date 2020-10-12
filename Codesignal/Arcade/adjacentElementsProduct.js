function adjacentElementsProduct(arr) {
  let max = -99999
  for (let i = 0, j = i+1; i < arr.length-1; i++) {
    let mult = arr[i] * arr[j];
    if (mult > max) max = mult;
    j++
  }
  return max
}

const adjacentElementsProductUp = (arr) => {
  return Math.max(... arr.slice(1).map((x,i) => arr[i]*x))
};


let arr = [3, 6, -2, -5, 7, 3];

//console.log(adjacentElementsProduct(arr));
console.log(adjacentElementsProductUp(arr));