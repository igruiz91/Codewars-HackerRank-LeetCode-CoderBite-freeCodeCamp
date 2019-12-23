function firstNSmallest(array, n){
    let sorted = [...array]
    sorted = [... new Set(sorted)].sort((a,b)=> a-b)[n-1]
    return array.filter(n => n<=sorted).slice(0,n)
}

const firstNSmallestNew = (array, n) => {
    const arraySorted = array.slice().sort((a,b)=>a-b).slice(0,n);
    for(var i=0, resp = [];i<array.length; i++)
        if(arraySorted.includes(array[i])) resp.push(...arraySorted.splice(arraySorted.indexOf(array[i]),1))
    return resp.slice(0,n)
}

const firstNSmallestUp = (array, n) =>{
    while(array.length !=n)
        array.splice(array.lastIndexOf(Math.max(...array)),1)
    return array
}

const firstNSmallestUp2 = (arr, n) =>{
    return arr.map((e,i) => ({e,i})).sort((a,b) => a.e -b.e ||a.i - b.i).slice(0,n).sort((a,b) => a.i-b.i).map(w => w.e)
}

//console.log(firstNSmallestUp([ 4, 2, -1, 7, -2, 10, -10, 0, 2, 10, 3, 5, -3, -9, 8, 7, -4, -6, -2, 5, -7, -10 ], 16));
console.log(firstNSmallestUp2([ 4, 2, -1 ], 2));

//[4, 2, -1, -2, -10, 0, 2, 3, 5, -3, -9, -4, -6, -2, -7, -10]
//[4, 2, -1, -2, -10, 0, 2, 3, 5, -3, -9, -4, -6, -2, 5, -7]