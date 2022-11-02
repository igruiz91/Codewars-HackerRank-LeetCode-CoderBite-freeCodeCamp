function main() {
  var depth = parseInt(readLine(), 10);
  //your code goes here
  for (let i = 1; ; i++) {
    depth -= 7;
    if (depth < 1) {
      console.log(i);
      break;
    }
    depth += 2;
  }
}

console.log(main());
