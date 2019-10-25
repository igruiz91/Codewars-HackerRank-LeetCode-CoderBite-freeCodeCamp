function potatoes(p0, w0, p1) {
    return parseInt(w0 * (100 - p0) / (100 - p1))
}
console.log(potatoes(95, 230, 85));