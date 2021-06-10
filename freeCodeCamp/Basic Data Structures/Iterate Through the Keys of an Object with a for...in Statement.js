function countOnline(usersObj) {
  let resp = 0;
  for (let count in usersObj) {
    if (usersObj[count].online==true) resp++;
  }
  return resp;
}

let obj ={
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

console.log(countOnline(obj));
