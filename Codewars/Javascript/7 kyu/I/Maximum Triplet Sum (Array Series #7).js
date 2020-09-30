function maxTriSum(numbers){
    return [... new Set(numbers)].sort((a,b)=>b-a).slice(0,3).reduce((a,b)=>a+b)
}


let a=[3,2,6,8,2]

//console.log(a.map((n,i,self)=> self.lastIndexOf(n)));
console.log(maxTriSum(a));