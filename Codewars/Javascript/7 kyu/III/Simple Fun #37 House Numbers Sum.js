function houseNumbersSum(inputArray) {
    for (var i = 0, resp = 0; i < inputArray.length; i++)
        if (inputArray[i] == 0) return resp;
        else resp += inputArray[i]
}

function houseNumbersSumUp(inputArray) {
    return inputArray.slice(0, inputArray.indexOf(0)).reduce((a, b) => a + b, 0)
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));
console.log(houseNumbersSumUp([5, 1, 2, 3, 2, 0]));