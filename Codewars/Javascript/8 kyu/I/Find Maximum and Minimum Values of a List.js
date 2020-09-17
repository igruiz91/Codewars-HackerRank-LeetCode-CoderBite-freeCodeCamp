var min = function(list){
    list.sort((a,b)=>a-b)
    return list[0];
}

var max = function(list){
    list.sort((a,b)=>b-a)
    return list[0];
}

var minMath = list => (Math.min(...list));
var maxMath = list => (Math.max(...list));

var list = [4,6,2,1,9,63,-134,566]

console.log(minMath(list));
console.log(maxMath(list));