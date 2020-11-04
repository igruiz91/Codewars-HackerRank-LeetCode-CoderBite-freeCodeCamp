function swapValues(arr) {
    var args = Array.prototype.slice.call(arguments);
    var temp = args[0];
    [temp[0], temp[1]]=[temp[1], temp[0]]
    return temp
}


console.log(swapValues([1,2]));