const sequenceSum = (begin, end, step) => {
    let resp=0;
    if(begin==end && end==step) return begin;
    else if(begin>end) return 0
    else{
        for(let i=begin; i<=end; i+=step){
            resp+=i
        }
    }
    return resp
};

const sequenceSumUp = (begin, end, step) => {
    if (begin > end) {
      return 0;
    }
    return begin + sequenceSum(begin + step, end, step);
  };

console.log(sequenceSum(1,5,3));