function solve(arr) {
  let resp=[]
  arr= arr.map((e,i) => arr.filter(n => n==e && arr.lastIndexOf(n) ==i)).sort((a,b) => b.length-a.length || b<a); 
  for (let i = 0; i < arr.length; i++)
    resp = resp.concat(arr[i])
  return resp
}

console.log(solve([2, 3, 5, 3, 7, 9, 5, 3, 7]));
