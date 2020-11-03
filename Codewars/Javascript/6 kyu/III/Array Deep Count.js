function deepCount(a){
    return a.reduce((a,b) => a + (Array.isArray(b) ? deepCount(b) : 0), a.length)    
}

const deepCountUp = a =>{
    for(var i = 0, count=a.length; i<a.length; i++) 
        if(Array.isArray(a[i])) count+= deepCount(a[i])
    return count
}

console.log(deepCount([1, 2, [3, 4, [5]]]));
console.log(deepCountUp([1, 2, [3, 4, [5]]]));