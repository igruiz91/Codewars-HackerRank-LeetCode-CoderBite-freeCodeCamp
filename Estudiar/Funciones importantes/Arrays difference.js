function arraysDifference(arr1, arr2) {
    let newArr =[];
    function uniqueElement(first, second) {
        for(let element of first){
            if(second.indexOf(element) === -1){
                newArr.push(element)
            }
        }
    }
    uniqueElement(arr1,arr2)
    uniqueElement(arr2,arr1)
    return newArr
}

const arrayOne = [1, 4, 5, 7, 3, 8, 1, 9];
const arrayTwo = [3, 7, 1, 12, 9, 5, 24, 16];

console.time('Start');
console.log(arraysDifference(arrayOne, arrayTwo));
console.timeEnd('Start');