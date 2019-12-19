function isNice(arr){
    return arr.length==0 ? false :  arr.every(e => arr.includes(e+1)|| arr.includes(e-1))
}

const isNiceUp = arr => {
    for(var i=0, count=0; i<arr.length; i++)
        if(arr.includes(arr[i]+1) || arr.includes(arr[i]-1)) count++
    return (count == arr.length && arr.length !=0) ? true : false
}



console.log(isNice([2,10,9,1]));
console.log(isNiceUp([2,10,8,1]));