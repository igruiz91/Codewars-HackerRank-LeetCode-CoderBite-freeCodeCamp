Math.round = function (num) {
  let mod = num%1
  return mod >= 0.5 ?  num-mod+1 : num-mod; 
};

Math.ceil = function (num) {
  let mod = num % 1;
  return mod == 0 ? num : num-mod+1; 
};

Math.floor = function (num) {
  let mod = num % 1;
  return num-mod
};
Math.floorUp  = (num) => parseInt(num);



console.log(Math.round(0.4))