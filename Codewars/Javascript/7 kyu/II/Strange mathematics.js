function strangeMath(n, k) {
 return  Array.from({length:n}, (_,i)=>i+1).sort().indexOf(k)+1
}

console.log(strangeMath(11, 2))
