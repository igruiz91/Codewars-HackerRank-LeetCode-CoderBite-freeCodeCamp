function selectionSort(arr) {
  for(let len=arr.length, i = 0; i<len; i++){
    let min=i;
    for(let j=i+1; j<len; j++){
      if(arr[j]<arr[min]) min=j;
    }
    if(min!=i) [arr[i],arr[min]]=[arr[min],arr[i]]
  }
  return arr;
}

console.log(selectionSort([1, 4, 2, 3, 0, 5]));
