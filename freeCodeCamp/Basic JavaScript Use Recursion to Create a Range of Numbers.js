function count(n) {
    if (n === 1) {
        return [1];
    } else {
        var numbers = count(n - 1);
        numbers.push(n);
        return numbers;
    }
}

function rangeOfNumbers(startNum, endNum) {
    if (endNum == startNum) {
        return [endNum];
    }
    else {
        let nums = rangeOfNumbers(startNum, endNum - 1)
        nums.push(endNum)
        return nums
    }
};

console.log(rangeOfNumbers(1, 5));