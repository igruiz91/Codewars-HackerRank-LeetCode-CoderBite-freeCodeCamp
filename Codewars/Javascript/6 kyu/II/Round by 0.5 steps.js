function solution(n) {
    let d = (n%1)
    return d<=0.25 ? Math.floor(n) : d<0.75 ? parseInt(n)+0.5 : Math.round(n)
}

const solutionUp = (n) => { return Math.round(n*2)/2 }



console.log(solution(988.74999999999));
console.log(solutionUp(988.74999999999));
// console.log(solution(4.3));
// console.log(solution(4.6));
// console.log(solution(4.8));
