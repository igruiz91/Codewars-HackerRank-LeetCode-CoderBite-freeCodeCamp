function count (string) {  
    let abc={}
    string.split('').map(n=> (abc[n])? abc[n]++ : abc[n]=1)
    return abc
     
}

console.log(count("aba"));