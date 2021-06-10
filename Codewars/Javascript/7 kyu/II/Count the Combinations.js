function numCombo(arr, num) {
  let count =0
  for(let i=0; i<arr.length-1; i++){
    for(let j =i+1; j<arr.length; j++){
      if(i+j == num ) count++
    }
  }
  return count
}


console.log(numCombo([2, 0, 0, 0, 1], 2))
console.log(numCombo([2, 0, 0, 0, 1], 3)); //3