var arrayLeaders = numbers => {
    return numbers.filter((x,i) => x>numbers.slice(i+1).reduce((a,b) => a+b,0))
}

console.log(arrayLeaders([16,17,4,3,5,2]));