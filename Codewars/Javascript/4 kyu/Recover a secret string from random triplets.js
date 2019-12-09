var recoverSecret = function (triplets) {
    let set = new Set;
    triplets.map(arr => arr.map(c => set.add(c)))
    return set
}

var triplets1 = [
    ['t', 'u', 'p'],
    ['w', 'h', 'i'],
    ['t', 's', 'u'],
    ['a', 't', 's'],
    ['h', 'a', 'p'],
    ['t', 'i', 's'],
    ['w', 'h', 's']
]

let secret1 = "whatisup";

console.log(recoverSecret(triplets1));