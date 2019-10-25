function menFromBoys(arr) {
    let even = [], odds = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] % 2 ? odds.push(arr[i]) : even.push(arr[i])
    }
    arr = [... new Set(arr)]
    return even.sort((a, b) => a - b).concat(odds.sort((a, b) => b - a))
}

function menFromBoys2(arr) {
    arr = Array.from(new Set(arr));
    let odd = arr.filter(a => a % 2).sort((a, b) => b - a);
    let even = arr.filter(a => a % 2 === 0).sort((a, b) => a - b);
    return even.concat(odd);
}

const menFromBoys3 = arr => {
    let [evens, odds] = [[], []];
    [...new Set(arr)].sort((a, b) => a - b).forEach(n => n % 2 ? odds.unshift(n) : evens.push(n));
    return [...evens, ...odds];
};

console.log(menFromBoys([2, 43, 95, 90, 37]));