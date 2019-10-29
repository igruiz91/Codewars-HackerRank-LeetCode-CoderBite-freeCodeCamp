function pyramid(n) {
    let str='';
    for(let i=0; i<=n; i++){
        str+='1'.repeat(i)+' '
    }
    return str.split(' ').filter(String).map(s => s.split('').map(a=>+a))
}

function pyramid2(n) {
    let arr=[]
    for (let i = 0; i < n; i++) {
        arr.push(new Array(i+1).fill(1))
        //otra forma de crear el arreglo
        //arr.push([... Array(i+1)].fill(1))    
    }  
    return arr  
}

console.log(pyramid2(3));