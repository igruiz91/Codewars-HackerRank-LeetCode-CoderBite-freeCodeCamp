function solve(s) {
    return s.split(/[aeiou]/).filter(String).map(s => s.length>1 ? s.split('').reduce((a,b,i) => a+ b.charCodeAt(0)-96,0) : s.charCodeAt(0)-96).sort((a,b)=>b-a)[0];
};

console.log(solve('zodiacs'));