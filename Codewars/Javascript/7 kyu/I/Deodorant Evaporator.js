function evaporator(content, evap_per_day, threshold){
    let count=0
    const min =  content*(threshold/100); 
    while (content>min) {
        content -= content*(evap_per_day/100) 
        count++
    }
    return count
}

function evaporatorUp(c, e, t) {
    t=t/100
    e=e/100
    return Math.ceil(Math.log(t)/Math.log(1-e))

}

console.log(evaporatorUp(10,10,10));