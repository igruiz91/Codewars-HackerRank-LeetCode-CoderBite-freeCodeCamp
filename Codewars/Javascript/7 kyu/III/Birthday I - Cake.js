function cake(x, y){
    for(var i=0, sum=0; i<y.length; i++)
        if(i%2) sum+=y[i].charCodeAt(0)-96
        else sum+=y[i].charCodeAt(0)
    return sum*100/x >70 ? 'Fire!': 'That was close!' 
}

console.log(cake(900, 'abc'));