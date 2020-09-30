function diff(a, b) {
    let arr1 = a.filter(c => !b.includes(c))
    return [... new Set(b.filter(x => !a.includes(x)).concat(arr1))].sort()
}

const diffUp = (a, b) => [... new Set(a.concat(b).filter(c => a.includes(c) ^ b.includes(c)))].sort()

a = ["a", "b", "z", "d", "e", "d"];
b = ["a", "b", "j", "j"];
console.log(diff(a, b));
console.log(diffUp(a, b));