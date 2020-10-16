function createSpiral(n) {
  let b=-1, a=0, cnt=1, root=1;
  let arreglos = Array.apply(null, new Array(n)).map(_ => Array(n))
  //console.log("createSpiral -> arreglos", arreglos)


  
  while (n>0) {
    for(let i=0; i<n; i++){
      b+=root
      arreglos[a][b]=cnt
      cnt++
    }
    n--
    for(let i=0; i<n; i++){
      a+=root
      arreglos[a][b]=cnt
      cnt++
    }
    root*-1
  }
  return arreglos
}
console.log("createSpiral -> ", createSpiral(3));
