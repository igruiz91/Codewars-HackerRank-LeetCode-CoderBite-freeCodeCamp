var summation = (num) => {
    let sum=0
    for(let i=1; i<=num; i++){
        sum+=i
    }
    return sum
}

const summation2 = n => n * (n + 1) / 2;

console.log(summation);