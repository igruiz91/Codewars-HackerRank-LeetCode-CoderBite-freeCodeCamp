function fixTheMeerkat(arr) {
    arr = arr[arr[0] = arr[2]],[arr[2]=arr[0]]
    
    return arr
}

function fixTheMeerkat2(arr) {
    return arr.reverse();
}

const fixTheMeerkat3 = ([tail, body, head]) => [head, body, tail]

function fixTheMeerkat4(arr) {
    return [arr[2], arr[1], arr[0]];
}

function swapPositionsArrays(arr) {
    [arr[0],arr[2]] = [arr[2],arr[0]]
    return arr
}

console.log(swapPositionsArrays(["tails", "body", "heads"]));