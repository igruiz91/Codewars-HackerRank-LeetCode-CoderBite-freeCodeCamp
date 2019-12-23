function homogenous(arrays) {
    return arrays.filter(a => a.length == 1 || parseInt(a.map((e, i) => (typeof e[i] == typeof e[i + 1]) ? 1 : 0)))
}


var a = [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]
console.log(homogenous(a)); 