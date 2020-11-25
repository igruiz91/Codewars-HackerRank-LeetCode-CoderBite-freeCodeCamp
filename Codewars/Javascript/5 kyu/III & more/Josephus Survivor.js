function josephusSurvivorMy(n, k) {
  let count = 0;
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  while (arr.length > 1) {
    count += k-1;
    n=arr.length
    arr = arr.filter((_, i) => {
      count > n ? (count = count % n) : count;
      return i != count
    });
    console.log(arr);
  }
  return arr[0];
}

function josephusSurvivor(n,k){
  console.log(n,k);
  return n===1 ? 1 : (josephusSurvivor(n-1, k) + k-1) % n+1
}


//console.log(josephusSurvivor(7, 3));
console.log(josephusSurvivor(14, 2));


