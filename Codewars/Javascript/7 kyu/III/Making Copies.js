function copyList(l){
    return l.slice()
}
const copyListUp = l => [...l]


console.log(copyList([1,2,3,4]));
console.log(copyListUp([1,2,3,4]));