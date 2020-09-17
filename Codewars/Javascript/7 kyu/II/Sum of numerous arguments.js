function findSum(){
    let arr = [...arguments].filter(e=> e>0)
    return arr.length ? arr.length == [...arguments].length ? arr.reduce((a,b)=>a+b, 0) :-1 : 0
}

const findSumUp = (...nums) => nums.reduce((a,b) => a < 0 || b < 0 ? -1 : a+b, 0)

const findSumUp2 = (...a) => a.some(e => e<0) ? -1 : a.reduce((a,b)=> a+b,0)

console.log(findSum(1,2,3,4));
console.log(findSumUp(1,2,3,4));
console.log(findSumUp2(1,2,3,4));