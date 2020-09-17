function openOrSenior(data) {
    return data.map((c, i) => {
        return (c[0] > 54 && c[1] > 7) ? 'Senior' : 'Open'
    })
}

console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]));