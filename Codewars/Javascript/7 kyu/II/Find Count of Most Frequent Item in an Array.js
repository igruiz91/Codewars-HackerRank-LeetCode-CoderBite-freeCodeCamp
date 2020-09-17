function mostFrequentItemCount(collection){
    let obj={}
    collection.map(n => obj[n] ? obj[n]++ : obj[n]=1)
    return Math.max(...Object.values(obj))
}

function mostFrequentItemCountUp(collection){
    return collection.length ? Math.max(...collection.map(x => collection.filter(y => y == x).length)) : 0
}

console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]));
console.log(mostFrequentItemCountUp([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]));