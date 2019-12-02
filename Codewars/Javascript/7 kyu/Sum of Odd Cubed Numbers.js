function cubeOdd(arr) {
    if(arr.some(n => isNaN(n))) return undefined;
    let resp=0;    
    for(let i= 0; i<arr.length; i++){
        if(i%2==0) resp+=arr[i]**3
    }
    return resp
}

console.log(cubeOdd([ 36, -9, 'a', 26, 5, 3 ]));