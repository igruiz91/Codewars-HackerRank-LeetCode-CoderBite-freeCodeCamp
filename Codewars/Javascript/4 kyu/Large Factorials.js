function add(str1, str2) {
  let sum =""
  let str1Length = str1.length;
  let str2Length = str2.length;
  if (str2Length > str1Length) {
    let temp = str2;
    str2 = str1;
    str1 = temp;
  }
  let carry = 0
  let a,b,temp, digitSum;
  for(let i = 0; i<str1.length; i++){
    a = parseInt(str1.charAt(str1.length-1-i))
    b = parseInt(str2.charAt(str2.length-1-i))
    b = b ? b : 0
    temp = (carry+a+b).toString()
    digitSum = temp.charAt(temp.length-1)
    carry = parseInt(temp.substr(0, temp.length-1))
    carry = carry ? carry : 0
    sum = i == str1.length-1 ? temp + sum : digitSum+sum
  }
  return sum
}

function factorial(n) {
  let fact = 1
  for(let i=2; i<=n; i++){
    if(Number.isSafeInteger(fact*i)){
      fact*=i
    }
    else{
      let factxi = "0"
      for(let j=0; j<i; j++){
        factxi = add(factxi, fact.toString())
      }
      fact = factxi
    }
  }
  return fact
}


const factorialUp = (n) => {
  var res = [1]
  for(let i =2 ; i<=n; i++){
    let c = 0
    for(let  j= 0; j<res.length || c !==0; ++j){
      c+=(res[j] || 0)*i
      res[j] = c%10
      c = Math.floor(c/10)
    }
  }
  return res.reverse().join('')
}


console.log(factorial(15))
console.log(factorialUp(5));