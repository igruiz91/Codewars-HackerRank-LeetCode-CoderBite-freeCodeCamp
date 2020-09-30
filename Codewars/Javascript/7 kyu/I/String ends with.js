function solution(str, ending){
    return str.slice(-ending.length)==ending
}

function solutionUp(str, ending) {
    return str.endsWith(ending)
}

function solutionRegex(str, ending) {
    return new RegExp(ending+'$', 'i').test(str)
}

console.log(solutionRegex('abcde', 'de'));