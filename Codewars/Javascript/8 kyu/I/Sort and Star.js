function twoSort(s) {
    return s.sort()[0].split('').map(c => c= c+'***').join('').slice(0,-3)
}

function twoSortUp(s) {
    return s.sort()[0].split('').join('***')
}

let arr = ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]
console.log(twoSortUp(arr));