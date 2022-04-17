/*
Given a list of numbers with only 3 unique numbers (1, 2, 3), sort the list in O(n) time.
Example 1:
Input: [3, 3, 2, 1, 3, 2, 1]
Output: [1, 1, 2, 2, 3, 3, 3]
*/

function sortNums(arr) {
    let one = [], two = [], three = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 3) three.push(arr[i])
        else if (arr[i] == 1) one.push(arr[i])
        else two.push(arr[i])
    }
    return one.concat(two).concat(three)
}

function mauricio(numbers) {
    let result = numbers.filter((num) => num === 1);
    result.push(...numbers.filter((num) => num === 2));
    result.push(...numbers.filter((num) => num === 3));
    console.log(result);
}

console.log(mauricio([3, 3, 2, 1, 3, 2, 1]));