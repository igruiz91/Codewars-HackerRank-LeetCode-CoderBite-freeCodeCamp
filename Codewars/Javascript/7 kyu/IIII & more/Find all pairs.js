function duplicates(array){
    array = array.slice().sort();
    let count=0;
    for(let i=0; i<array.length; i++){
        if(array[i]===array[i+1]){
            count++
            array[i]=''; 
            array[i+1]=''
        }
    }
    return count
}

function duplicatesUp(array) {
    var count={}
    array.map(x => count[x] = 1 +(count[x]||0))
    return Object.values(count).reduce((acc,c) => acc+(c/2)|0,0)
}

const getFrequencyUp2 = A => [...new Set(A)].map( t => A.filter(x => t===x).length )
const pairs = n => ~~(n/2)
const multiple = n => n>1
const duplicates = A =>  A.length < 2 ? 0 : getFrequency(A).filter( multiple ).map( pairs ).reduce((s,v)=>s+v)

console.log(duplicates([ 0, 0, 0, 0, 0, 0, 0 ]));