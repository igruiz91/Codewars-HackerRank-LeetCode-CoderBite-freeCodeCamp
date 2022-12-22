function recycleMe(recycle){
  let resp = [0,0,0]
  for(let n  of recycle){
    if(n>0) resp[0]++
    else if(n == 0) resp[2]++
    else resp[1]++
  }
  return resp
}


const recycleMeUp = (rec) => {
  return rec.reduce((a,b) => (++a[b>0 ?0 : b< 0 ? 1 :2], a), [0,0,0])
}

console.log(recycleMe([5, -9, 0, 6, -84, -95, 15]));
console.log(recycleMeUp([5, -9, 0, 6, -84, -95, 15]));
