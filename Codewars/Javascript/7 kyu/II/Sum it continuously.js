function add(arr) {
  let [a,b] = [0, 0]

  for (let i =0; i < arr.length; i++) {
    [a, b] = [a + b, b + arr[i]];
    arr[i] = b
  }
  return arr
}



console.log(add([1, 2, 3, 4, 5]));
