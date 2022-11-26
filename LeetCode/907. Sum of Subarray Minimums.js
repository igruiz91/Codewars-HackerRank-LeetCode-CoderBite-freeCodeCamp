/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  let resp = 0;
  for(let i=0, len = arr.length; i<len; i++) {
    let min = arr[i];
    let j = i+1
    resp+= min
    while(j<len){
      if(min>arr[j]) min = arr[j];
      resp+=min
      j++
    }
  }
  return resp % (Math.pow(10,9) +7)
};


console.log(sumSubarrayMins([3, 1, 2, 4]));
