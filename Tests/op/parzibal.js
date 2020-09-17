var arr = [[true, false, true], [false, true], [true, true], [true], [false]];

let sumarTrue = arr => {
    return arr.reduce((a,b) => a + b.reduce((e,v) => {
        v ? v=1 : v=0
        return e + v
    }),0)
}


let arr2 = [true, false, true, true,true]



console.log(sumarTrue(arr));