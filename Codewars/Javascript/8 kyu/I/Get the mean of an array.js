function getAverage(marks) {
    return Math.floor(marks.reduce((a, b) => a + b) / marks.length)
}

const getAverage2 = marks => ~~(marks.reduce((s, v) => s + v) / marks.length);

console.log(getAverage2([1, 2, 3, 4, 5,]));

