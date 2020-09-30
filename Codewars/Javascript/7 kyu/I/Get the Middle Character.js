function getMiddle(s){
    let len = s.length
    return len%2==0 ? s.slice(len/2-1, len/2+1) : s.slice(len/2, len/2+1)
}

function getMiddleUp(s) {
    console.log(s.length, (s.length-1)/2,);
    return s.slice((s.length-1)/2, s.length/2+1)
}

console.log(getMiddleUp('testinga'));