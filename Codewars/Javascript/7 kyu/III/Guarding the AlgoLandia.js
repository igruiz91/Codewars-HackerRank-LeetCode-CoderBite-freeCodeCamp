function findNeededGuards(k) {
    k = k.map(n => +n).join('')
    return k.match(/00/g) !=null ? k.match(/00/g).length : 0
}

console.log(findNeededGuards([true, true, false, true, false, true]));