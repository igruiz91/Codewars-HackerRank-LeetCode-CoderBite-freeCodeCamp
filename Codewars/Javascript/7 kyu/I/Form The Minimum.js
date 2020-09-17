function minValue(values){
    return Number([...new Set(values)].sort().join(''))
}

function minValueUp(values) {
    return Number(values.filter((n, i, self) => self.indexOf(n)== i).sort().join(''))
}

console.log(minValueUp([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]));