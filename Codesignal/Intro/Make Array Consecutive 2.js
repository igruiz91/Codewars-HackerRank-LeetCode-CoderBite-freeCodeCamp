function makeArrayConsecutive2(statues) {
  const min = Math.min(...statues);
  const max = Math.max(...statues);
  let resp = 0;
  for (let i = min; i <= max; i++) {
    if (statues.includes(i)) continue;
    else resp++;
  }
  return resp;
}

const makeArrayConsecutive2Up = (statues) => {
  return Math.max(...statues)-Math.min(...statues)-statues.length+1;
};

let arr = [6, 2, 3, 8];

console.log(makeArrayConsecutive2(arr));
console.log(makeArrayConsecutive2Up(arr));

