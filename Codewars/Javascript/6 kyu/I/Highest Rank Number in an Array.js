function highestRank(arr){
    let obj = {};
    arr.map(v => obj[v]=obj[v] ? obj[v]+1: 1)
    let repeticiones=0;
    let num=0;
    for(let n in obj){
        if(obj[n]>=repeticiones){
            repeticiones = obj[n];
            num=n
        }
    }
    return typeof num
}

function highestRank2(arr){
    return arr.sort((a,b) => (
        arr.filter(v => v===a).length)-(arr.filter(v => v==b).length)
        || a-b).pop();
} 

console.log(highestRank([12, 0, 8, 12, 7, 6, 4, 10, 12]));