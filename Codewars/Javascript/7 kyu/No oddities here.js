function noOdds( values ){
    return values.filter(n => n%2==0)
}

console.log(noOdds([1,3,2,4]));