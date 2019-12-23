var cubeChecker = (v, s) =>  (v<=0 || s<=0) ? false : s**3==v;



console.log(cubeChecker(8, 2));
console.log(cubeChecker(9, 2));