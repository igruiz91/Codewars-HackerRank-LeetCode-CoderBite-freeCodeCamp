function bubbleSort(array) {
    var len = array.length;
    for(let i=len-1; i>=0; i--){
      for(let j=1;j<=i ;j++){
        if(array[j-1]>array[j]) 
          [array[j-1], array[j]] = [array[j], array[j-1]]
      }
    }
    return array;
    // change code above this line
  }
  
let a=[1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]  

console.log(bubbleSort(a));
  