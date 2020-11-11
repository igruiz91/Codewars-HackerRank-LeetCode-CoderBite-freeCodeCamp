function arithmeticSequenceElements(a,r,n) {
    for(var i=0, resp=[a]; i<n-1; i++)
        resp.push(a+=r)
    return resp.join(', ')
}

const arithmeticSequenceElementsUp = (a,r,n) => Array.from({length: n}, (_,i) => a+r*i).join(', ')

const arithmeticSequenceElementsUp2 = (a,r,n) => Array(n).fill().map((_,k) => a + k*r).join(', ')

console.log(arithmeticSequenceElements(1, 2, 5));
console.log(arithmeticSequenceElementsUp(1, 2, 5));
console.log(arithmeticSequenceElementsUp2(1, 2, 5));