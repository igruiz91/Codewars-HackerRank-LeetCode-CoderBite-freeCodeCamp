const reverseSeq = n => {
    let nums = [];
    while (n>0) {
        nums.push(n)
        n--
    }
    return nums
};

//con for
const reverseSeq2 = n => {
    let arr = [];
      for (let i=n; i>0; i--) {
        arr.push(i);
        } return arr;
    };

//con map y Array()
const reverseSeq3 = n => {
    return Array(n).fill(0).map((e, i) => n - i );
};

//con Array y length
const reverseSeq4 = length => Array.from({length}, () => length--)

const reverseSeq5 = n => {
    return Array.from({length:n},(_,i)=>n-i);
  };

console.log(reverseSeq(5));