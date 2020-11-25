function luckCheck(ticket) {
  let len = ticket.length
  let odd = len%2
  let left = ticket.slice(0,len/2)
  let right = ticket.slice(len/2+odd, len)
  const sumElements = (hand) => hand.split("").reduce((acc, n) => +n + acc, 0);
  return sumElements(left) == sumElements(right);
}


console.log(luckCheck("683179"));
console.log(luckCheck("683798"));