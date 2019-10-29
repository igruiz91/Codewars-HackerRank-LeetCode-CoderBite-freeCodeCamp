function titleCase(str) {
    return str.split(' ').map((s,i)=> {
        return s.slice(0,1).toUpperCase()+s.slice(1).toLowerCase()
    }).join(' ');
}
  
console.log(titleCase("I'm a little tea pot"));