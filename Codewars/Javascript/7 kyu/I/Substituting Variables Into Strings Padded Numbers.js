function solution(value){
    return 'Value is '+ `${value}`.padStart(5,0)
}

//con slice
function solution2(value){
    return "Value is " + ("00000" + value).slice(-5);
}

function solution3(value){
    return `Value is ${value.toString().padStart(5,0)}`
  }

console.log(solution3(50));