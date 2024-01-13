function zeroPlentiful(arr) {
  let zeros = 0;
  for (var i = 0, active = false, count = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      if (active == false) {
        active = true;
      } else {
        count++;
      }
      if (count === 3) zeros += 1;
    } else {
      if (active == true && count < 3) return 0;
      count = 0;
      active = false;
    }
  }
  return count < 3 && active == true ? 0 : zeros;
}

const zeroPlentifulUp = (arr) => {
  let count = 0,total = 0;
  for (let num of arr) {
    if(num === 0){
      if(count++ ===3) {
        total++
      }
    }else{
      if(count >3){
        count= 0
      }else if(count>0){
        count =0
        total = 0
        break
      }
    }
  }
  return count>0 && count<4 ? 0 : total
};

console.log(zeroPlentiful([0, 0, 0, 0, 1, 0, 0, 0, 0]), zeroPlentifulUp([0, 0, 0, 0, 1, 0, 0, 0, 0]));
console.log(zeroPlentiful([0, 0, 0, 0, 0, 1]), zeroPlentifulUp([0, 0, 0, 0, 0, 1]));
console.log(zeroPlentiful([0, 0, 0, 0, 1, 0]), zeroPlentifulUp([0, 0, 0, 0, 1, 0]));
