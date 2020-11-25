function whoIsNext(names, r){
    while(r>names.length){
        r =  Math.floor((r-names.length+1)/2)
    }
    return names[r-1]
}


const whoIsNextUp = (n, r) =>{
    var chunk =n.length 
    while(r>chunk){
        r-=chunk
        chunk*=2
    }
    return n[Math.ceil(r/(chunk/n.length))-1]
}

console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"],10));
console.log(whoIsNextUp(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"],10));