const insertionSort = (arr) => {
  for(let i=1, len = arr.length, j; i<len; i++){
    const key = arr[i]
    j=i-1
    while(j>=0&&arr[j]>key){
      arr[j+1]=arr[j]
      j--
    }
    arr[j+1]=key
  }
  return arr
}


console.log(insertionSort([1, 4, 2, 3, 0, 5]));
