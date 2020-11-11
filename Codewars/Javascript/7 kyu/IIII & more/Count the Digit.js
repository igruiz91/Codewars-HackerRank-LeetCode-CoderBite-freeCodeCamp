function nbDig(n, d) {
    let count=0; 
    for(let i=0; i<=n; i++){
        let num=`${i*i}`.split('');
        let cant = num.filter(x=> x==d).length
        if(cant != 0) count+=cant
    }
   return count
}

function nbDigUp(n, d) {
    let resp = ''
    for(var i=0; i<=n; i++)
        resp+=i*i
    return resp.split(d).length-1
}

console.log(nbDigUp(25,1));