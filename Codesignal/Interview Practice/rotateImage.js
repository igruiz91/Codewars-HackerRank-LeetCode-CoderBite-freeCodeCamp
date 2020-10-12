function rotateImage(a) {
  let len = a.length
  for (let i = 0 ; i < len; i++) {
    //transpuesta de la matriz
    for (let j = i; j < len; j++) {
      let temp = a[i][j]
      a[i][j] = a[j][i]
      a[j][i] = temp
    }
  }
  for (let i = 0; i < len; i++) {
    for(let j=0; j<len/2; j++){
      let temp = a[i][j]
      a[i][j] = a[i][len-1-j]
      a[i][len-1-j] = temp
    }
  }
  return a
}

function rotateImageUp(a) {
  let len = a.length;
  for (let i = 0; i < len; i++) 
    for (let j = i; j < len; j++) 
      [a[i][j], a[j][i]] = [a[j][i], a[i][j]];

  for (let i = 0; i < len; i++) 
    for (let j = 0; j < len / 2; j++)
      [a[i][j], a[i][len - 1 - j]] = [a[i][len - 1 - j], a[i][j]];
      
  return a;
}


let a = [
  [1, 2, 3], // [ 7, 4, 1 ]
  [4, 5, 6], // [ 8, 5, 2 ]
  [7, 8, 9], // [ 9, 6, 3 ]
];

console.log(rotateImageUp(a));