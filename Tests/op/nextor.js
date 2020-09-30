var asyncSubstraction = function (a, b, callback) {
    setTimeout(() => {
        return callback(a - b);
    }, 3000);
}

console.log(asyncSubstraction(4, 1));