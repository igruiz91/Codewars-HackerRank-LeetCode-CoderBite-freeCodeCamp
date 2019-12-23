function getLengthOfMissingArray(arrayOfArrays) {
    if(!arrayOfArrays || !filterArray(arrayOfArrays) || arrayOfArrays.length ===0) return 0 
    let arrays = arrayOfArrays.map(arr=> arr.length).sort((a,b) => a-b)
    for(let i=0; i<arrays.length-1; i++){
        if(arrays[i] === 0) return 0
        if(arrays[i] != arrays[i+1]-1) return arrays[i+1]-1  
    }      
}

const filterArray = (arr) => arr.filter(Array.isArray).length == arr.length



let arr=[ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]]
let arr2 = [ [ null ], [ null, null, null ] ]
let arr3=[[],[0, 4, 0, 1],[4, 3, 1],[3, 2]];

//console.log(filterArray(arr3));

console.log(getLengthOfMissingArray(arr3));
  