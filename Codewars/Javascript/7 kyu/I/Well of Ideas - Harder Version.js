function well(x){
    let count=0
    x= x.join(',').toUpperCase().split(',')
    for(let i=0; i<x.length; i++)
        if(x[i] == 'GOOD') count++
    return count == 0 ? 'Fail!' : count<=2 ? 'Publish!' : 'I smell a series!'
}


let ideas=[['gOOd', 'bad', 'BAD', 'bad', 'bad'], ['bad', 'bAd', 'bad'], ['GOOD', 'bad', 'bad', 'bAd']]

console.log(well(ideas));