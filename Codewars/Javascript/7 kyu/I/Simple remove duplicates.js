function solve(arr) {
    let resp = []
    for (let i = 0; i < arr.length; i++)
        if (arr.lastIndexOf(arr[i]) == i) resp.push(arr[i])
    return resp
}

const solveUp = arr => arr.filter((e, i) => arr.lastIndexOf(e) == i)

console.log(solveUp([3, 4, 4, 3, 6, 3]));