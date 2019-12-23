function addLength(str) {
    return str.split(' ').map(w => `${w} ${w.length}`)
}

console.log(addLength('apple ban'));