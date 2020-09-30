//no se puede utilizar repeat()
function repeatStringNumTimes(str, num) {
    let arr=[]
    for(let i=0;i<num;i++){
        arr.push(str)
    }
    return arr.join('')
}
  
console.log(repeatStringNumTimes("abc", -2));