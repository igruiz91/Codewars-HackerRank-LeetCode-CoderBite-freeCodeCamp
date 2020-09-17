function findDeletedNumber(arr, mixArr) {
    for(let i=0; i<arr.length; i++)
        if(!mixArr.includes(arr[i])) return arr[i]
    return 0
}

const findDeletedNumberUp = (arr, mixArr) => arr.filter(e => mixArr.indexOf(e)==-1)[0] || 0

console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]));
console.log(findDeletedNumberUp([1,2,3,4,5], [3,4,1,5]));