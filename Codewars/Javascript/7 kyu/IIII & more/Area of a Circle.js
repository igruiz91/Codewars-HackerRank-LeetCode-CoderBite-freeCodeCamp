var circleArea = function(radius) {
    if(typeof radius != 'number' || radius<1) return false
    return (Math.PI*radius**2).toFixed(2)
};

console.log(circleArea(43.2673));