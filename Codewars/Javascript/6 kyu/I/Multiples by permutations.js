function search_permMult(nMax, k) {
    let count=0;
        for(let i=1; i<nMax/k; i++){
            let n=i*k            
            if(detection(n, i)) count++
        }
    return count;
}

function detection(x,y) {   
    if(transform(x)===transform(y)){
        return true
    }
}
function transform(n) {
    return n.toString().split('').sort().join('')
}

//console.log(transform(214897));

console.log(search_permMult(5000, 7));