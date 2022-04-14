const heapAlgorithm = (len , arr) =>{
  if(len==1) console.log(arr)
  else{
    for(let i=0; i<len; i++){
      heapAlgorithm(len - 1, arr);
      if(len%2==0) [arr[i], arr[len-1]] =[arr[len-1], arr[i]]
      else [arr[0], arr[len-1]] = [arr[len-1], arr[0]]
    }
  }
}

function printArr(a, n) {
  console.log(a.join(" "));
}

const test = (arr, size) => {
  let resp = [];
  function heapPermutation(arr, size) {
    if (size == 1) {
      resp.push(arr.slice());
      // console.log(arr);
    }
    for (let i = 0; i < size; i++) {
      heapPermutation(arr, size - 1);
      if (size % 2 == 1) {
        [arr[0], arr[size - 1]] = [arr[size - 1], arr[0]];
      } else {
        [arr[i], arr[size - 1]] = [arr[size - 1], arr[i]];
      }
    }
  }
  heapPermutation(arr,size)
  return resp;
};


console.log(heapAlgorithm(3, [1, 2, 3]));
// let a = [1,2,3]
// console.log(test(a, 3));
