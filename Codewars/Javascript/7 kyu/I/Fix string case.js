function solve(s) {
    let cant = 0;
    for (let i = 0; i < s.length; i++)
        if (s[i] == s[i].toLowerCase()) cant++
    return cant >= (s.length / 2) ? s.toLowerCase() : s.toUpperCase()
}

const solveUp = s => s.replace(/[A-Z]/g, '').length < s.length / 2 ? s.toUpperCase() : s.toLowerCase()

console.log(solveUp('CODe'));