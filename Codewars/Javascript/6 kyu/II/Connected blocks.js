function solution(input) {
  let max = 0
  let arr = [...new Set(input.split(","))];
  for (let i = 0; i < arr.length; i++) {
    let dimension = checker(arr[i],arr)
  }
  return max;
}

function checker(n,arr){

}


console.log(solution('18,00,95,40,36,26,57,48,54,65,76,87,97,47,00'))
