function adjacentElementsProduct(arr) {
    for(var i=0, max=Number.MIN_SAFE_INTEGER; i<arr.length-1; i++)
        if(arr[i]*arr[i+1]>max) max = arr[i]*arr[i+1]
    return max
}

console.log(adjacentElementsProduct([4, 12, 3, 1, 5]));