function tailSwap(arr) {
    arr = arr.map(s => s.split(':'));
    [arr[0][1], arr[1][1]] = [arr[1][1], arr[0][1]]
    return arr.map(s => s.join(':'))
}

const tailSwapUp = arr => {
    return (arr + "").replace(/(.+:)(.+),(.+:)(.+)/, "$1$4,$3$2").split(',')
}

console.log(tailSwap(['abc:123', 'cde:456']));
console.log(tailSwapUp(['abc:123', 'cde:456']));