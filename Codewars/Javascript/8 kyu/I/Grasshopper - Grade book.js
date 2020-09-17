function getGrade (s1, s2, s3) {
    let prom =[...arguments].reduce((a,b)=>a+b,0)/3
    return prom>=90 ? 'A' : prom>=80 ? 'B': prom>=70 ? 'C' : prom>=60 ? 'D' : 'F'
}

console.log(getGrade(95,90,93));