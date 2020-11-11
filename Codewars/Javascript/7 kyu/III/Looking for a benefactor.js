function newAvg(arr, newavg) {
    var resp = Math.ceil(newavg*(arr.length+1)-arr.reduce((a,b) => a+b,0))
    if (resp<=0 ) throw new Error
    return resp
}


//ecuation:
//

console.log(newAvg([14, 30, 5, 7, 9, 11, 16], 2));