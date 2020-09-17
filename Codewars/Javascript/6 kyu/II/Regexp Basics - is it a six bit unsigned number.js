String.prototype.sixBitNumber = function() {
    let a = Number(this)
    return (a>63 || a<0) ? true : false
}
let n = '55'

console.log(n.sixBitNumber());