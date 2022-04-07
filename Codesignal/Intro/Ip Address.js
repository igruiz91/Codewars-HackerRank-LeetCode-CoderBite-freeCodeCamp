// An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.
// Given a string, find out if it satisfies the IPv4 address naming rules.
// Example
// For inputString = "172.16.254.1", the output should be
// solution(inputString) = true;
// For inputString = "172.316.254.1", the output should be
// solution(inputString) = false.
// 316 is not in range [0, 255].
// For inputString = ".254.255.0", the output should be
// solution(inputString) = false.

function solution(inputString) {
  let arr = inputString.split('.');
  console.log(arr)
  if(arr.length !== 4) return false;
  for(let i=0; i<arr.length; i++){
    if(arr[i] == 0 && i==0) return false;
    if(arr[i] < 0 || arr[i] > 255) return false;
    if(arr[i][0]==0 && arr[i].length>1) return false;
  }
  return true
}

function solutionTop(str){
  let arr = str.split('.');
  return arr.length==4 && arr.every(n=> n>==0&&n<256&&!isNaN(n)&&n!="")
}

console.log(solution("172.16.256.1"));
// console.log(solution("64.233.161.00"));
// console.log(solution(".254.255.0"));
console.log(solution("1.1.1.1a"));
