function calculate1RM(w, r){
    if(r<2) return w*r
    let epley = w*(1+r/30)
    let mcGlothin = 100*w/(101.3-2.67123*r)
    let lombardi = w*Math.pow(r,0.10)
    return Math.round(Math.max(...[epley, mcGlothin, lombardi]))
}

const calculate1RMUp = (w,r) => {
    return r<2 ? w*r : Math.round(Math.max(...[w*(1+r/30), (100*w)/(101.3-2.67123*r), w*(r**0.10)]))
}

var w=135, r=20
let calcs=[w*(1+r/30), (100*w)/(101.3-2.67123*r), w*(r**0.10)]
//console.log(calcs[1]);

console.log(calculate1RM(135, 20));
console.log(calculate1RMUp(135, 20));