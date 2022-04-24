function smallest(n) {
  const digits = `${n}`;
  let min=n, let from=0, let to = 0;
  for (let i = 0, len = digits.length; i < len; i++) {
    let removed = digits.slice(0, i) + digits.slice(i+1);
    for(let j=0; j<=removed.length; j++){
      let num = Number(removed.slice(0, j) + digits[i] + removed.slice(j));
      if(num<min){
        min=num;
        from=i;
        to=j;
      }
    }
  }
  return [min, from, to];
}

const joinArr = (arr) => {
  return Number(arr.join(""));
};


//console.log(joinArr(["1", "0", "0", "0", "0", "0", "0"]));


//console.log(smallest(261235)) //[126235, 2, 0]
 console.log(smallest(209917)) //[29917, 0, 1]
// console.log(smallest(1000000)) //[1, 0, 6]
