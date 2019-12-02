var orderedCount = function (text) {
    let obj={};
    text.split('').map(c => (obj[c] = obj[c] ? obj[c]+1 : 1));
    let arr =[];
    let val=Object.values(obj);
    let key=Object.keys(obj);
    for(let i=0; i<key.length; i++){
        arr.push([key[i], val[i]])
    }
    return arr
}
console.log(orderedCount('1022312'));