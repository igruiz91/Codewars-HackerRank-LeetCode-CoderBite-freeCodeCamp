function gps(s, x) {
    if(x.length <=1) return 0
    let sect=[]
    for(let i=0, len =x.length; i<len-1; i++)
        sect.push((3600*(x[i+1]-x[i])/s))
    return Math.max(...sect)
}

var x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]
var s = 15;
console.log(gps(s,x));