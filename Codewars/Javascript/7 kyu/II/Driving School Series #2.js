function cost(mins) {
  let resp = 30

  let minutes = mins%60
  console.log(mins)
  if(minutes>35) minutes =60
  else if(minutes>5) minutes=30
  else minutes = 0
  let hours = Math.floor(mins/60)
  if(hours==0 && minutes!=0) resp = 30
  else if(minutes==60) resp += 20
  else if(minutes==30) resp +=10
  if(hours>1) resp+=hours*20-20
  return resp
}

const costUp = (mins) => {
  let resp = 30
  mins-=60
  while(mins>5){
    resp+=10
    mins--30
  }
  return resp
}


// console.log(cost(63));
// console.log(cost(102));
console.log(cost(273));
// console.log(cost(45));
