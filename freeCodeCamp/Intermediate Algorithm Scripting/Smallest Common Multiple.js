function smallestCommons(arr) {
  const [min,max] = arr.sort((a,b) => a-b)
  let nums = Array.from({length: max-min+1}, (_,i) => min+i)
  let upperBound = nums.reduce((a,b) => a*b)
  for(let i=max; i<=upperBound; i+=max)
    if(nums.every(n => i%n === 0)) return i
  return false
}

function smallestCommonsUp(arr){
  let [min, max] = arr.sort((a,b) => a-b)
  let nums = Array(max-min+1).fill(1).map((_,i) => min+i)

  const gdc = (a,b) => b ===0 ? a : gdc(b, a%b);
  const lcm = (a,b) => a*b/gdc(a,b)
  return nums.reduce((a,b) => lcm(a,b))
}



function MCM(n){
  let resp = []
  let i=2
  while (n!=1) {
    if(n%i ==0) {
      resp.push(i)
      n/=i
      i=2
    }
    else i++
  }
  return resp
}

function maxPowN(mcm){
  let count=0, obj = {};
  for (let i = 1; i < mcm.length; i++) {
    let num = mcm[i]
    if(obj[num] && mcm[i-1]==num){
      obj[num] = 2
    }else if(obj[num]){
      count = obj[num]
      obj[num]=1
    }else{
      obj[num]=1
      if(obj[mcm[i-1]]<count) obj[mcm[i-1]] = count
      count=0
    }
  }
  return obj
}
console.log(maxPowN([2,2,2,3,2,2]))


function isPrime(n) {
  if(n%2==0) return false
  for(let i=3; i*i<=n; i+=2)
    if(n%i==0) return false
  return true
}


console.log(smallestCommons([1, 5]));
console.log(smallestCommonsUp([1, 5]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommonsUp([2, 10]));
