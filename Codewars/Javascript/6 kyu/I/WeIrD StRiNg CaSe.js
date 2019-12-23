function toWeirdCase(string){
    return string.split(' ').map((w) => w.split('').map((c,i)=> i%2==0 ? c.toUpperCase() : c.toLowerCase()).join('')).join(' ')
}

console.log(toWeirdCase('This is a test'));