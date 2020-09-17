String.prototype.eightBitNumber = function() {
    return (Number(this).toString() == this && Number(this)>=0 && Number(this)<=256)
}

String.prototype.eightBitNumberUp = function() {
    return /^(25[0-5]|(2[0-4]|1\d|[1-9])?\d)$/.test(this)
}

String.prototype.eightBitNumberUp2 = function() {
    return /^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/.test(this)
}


let n = '042'
console.log(n.eightBitNumber());
console.log(n.eightBitNumberUp());