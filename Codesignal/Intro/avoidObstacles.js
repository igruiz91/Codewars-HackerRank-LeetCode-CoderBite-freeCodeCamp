function solution(arr) {
  var i=2;
  while(true){
    if(arr.every(n => n%i != 0)) break
    i++
  };
  return i;
}

console.log(solution([5, 8, 9, 13, 14]));

