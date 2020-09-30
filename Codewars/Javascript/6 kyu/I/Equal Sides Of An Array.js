function findEvenIndex(arr){
    for(let i=0, acum=0; i<arr.length; i++){
        acum+=arr[i]
        let newA = arr.slice(i)
        if(acum == newA.reduce((a,b)=> a+b)) return i
    }
    return -1
}

function findEvenIndexUp(arr) {
    return arr.findIndex((e,i,a) => a.slice(0,i).reduce((a,b)=>a+b,0) == a.slice(i+1).reduce((a,b)=>a+b))
}

function findEvenIndexUp2(arr) {  
    let left=0, right = arr.reduce((a,b)=>a+b) 
    for(let i=0; i<arr.length; i++){
        left+=arr[i];
        right-=arr[i];
        if(left==right) return i
    }
    return -1
}



console.log(findEvenIndexUp([1,2,3,4,3,2,1]));