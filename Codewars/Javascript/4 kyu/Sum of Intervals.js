function sumIntervals(intervals){
    let arr=[]
    for(let i=0; i<intervals.length; i++){
        while(intervals[i].length) arr.push(intervals[i].pop())
    }
    arr = arr.sort((a,b) => a-b)
    return Math.max(...arr)-Math.min(...arr)
}

console.log(sumIntervals([[1,5],[1,5]]));