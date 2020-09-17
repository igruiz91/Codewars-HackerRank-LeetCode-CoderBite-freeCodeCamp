function orArrays(arr1, arr2, or) {
    return arr1.length > arr2.length
        ? arr1.map((x, i) => x | (arr2[i] || or))
        : arr2.map((x, i) => x | (arr1[i] || or))
}

function orArrays(a, b, c = 0) {
    return a.map((x, i) => x | (b[i] || c)).concat(b.slice(a.length).map(x => x | c));
}

console.log(orArrays([1, 2, 3], [4, 5, 6]));