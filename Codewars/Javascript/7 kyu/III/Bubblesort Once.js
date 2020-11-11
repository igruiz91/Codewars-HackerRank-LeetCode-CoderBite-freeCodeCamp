function bubblesortOnce(a) {
    let resp=[...a]
    let len = a.length
    for (let i = len-1; i>len-2; --i){
        for(let j=1; j<=i; j++){
            if(resp[j-1]>resp[j]) [resp[j-1], resp[j]]= [resp[j], resp[j-1]]
        }      
    }
    return resp
}

function bubblesortOnceUp(arr) {
    let newArr = arr.slice()
    for (let i = 0; i < arr.length-1; i++) {
       if(newArr[i]>newArr[i+1]){
           [newArr[i], newArr[i+1]]= [newArr[i+1], newArr[i]]
       }  
    }
    return newArr
}

let a = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
let b = [9, 7, 5, 3, 1, 2, 4, 6, 8] 
console.log(bubblesortOnce(b));
console.log(bubblesortOnceUp(b));

