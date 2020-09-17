function findScreenHeight(width, ratio) {
    ratio = ratio.split(':').map(n => +n)
    let heigth = width / ratio[0] * ratio[1]
    return `${width}x${heigth}`
}

function findScreenHeight2(width, ratio) {
    var [numerator, denominator] = ratio.split(':')
    return width + 'x' + width * denominator / numerator
}

console.log(findScreenHeight(3840, "32:9"));