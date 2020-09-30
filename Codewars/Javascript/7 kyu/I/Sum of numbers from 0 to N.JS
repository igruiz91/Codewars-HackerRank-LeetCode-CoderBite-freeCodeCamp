var SequenceSum = (function() {
  function SequenceSum() {}
  SequenceSum.showSequence = function(count) {
    if(count<0) return `${count}<0`;
    if(count==0) return `${count}=0`;
    let resp=[];
    for(let i=0; i<=count; i++)
      resp.push(i)
    let sum = resp.reduce((a,b)=> a+b,0)
    let exp = resp.join('+');
    return `${exp} = ${sum}`
  };
  return SequenceSum;
})();


class SequenceSum{
  static showSequence(n){
    return n<0 ? `${n}<0` : `${Array.from({length: n+1}, (v,k)=> k).join('+')}${n? ' = ': '='}${n*(n+1)/2}`
  }
}

const SequenceSum={showSequence:(n)=>n<0?`${n}<0`:n?`${[...Array(n+1).keys()].join("+")} = ${(n*(n+1))/2}`:'0=0'}


let a=SequenceSum()
console.log(a);