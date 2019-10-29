function flattenAndSort(array){
    let arr=[]
    array.map(a => a.map(n=>arr.push(n)))
    return blubble(arr)
}

function blubble(arr) {
    let len =arr.length-1
    for(let i=len;i>=0; i--){
        for(let j=1; j<=i; j++){
            if(arr[j-1]>arr[j]){
                [arr[j-1], arr[j]]=[arr[j], arr[j-1]]
            }
        }
    }
    return arr
}

function flattenAndSort2(array) {
    return [].concat(...array).sort((a,b)=> a-b)
  }

//console.log(blubble([3, 2, 1]));

console.log(flattenAndSort2([[3, 2, 1], [7, 9, 8], [6, 4, 5]]));