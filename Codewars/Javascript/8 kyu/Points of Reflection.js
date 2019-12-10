function symmetricPoint(p, q) {
    console.log(d());
    return d(p)+d(q)
}

const d = arr => Math.sqrt(arr[0]**2+arr[1]**2)

console.log(symmetricPoint([0,0], [1,1]));