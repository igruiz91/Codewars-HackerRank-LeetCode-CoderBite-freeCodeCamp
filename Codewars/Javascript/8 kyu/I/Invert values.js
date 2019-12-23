function invert(array) {
    return array.map(n=> n>0 ? -n :n*-1)
}

function invert2(array) {
    return array.map(i => 0 - i);
 }

function invert(array) {
    return array.map(n => n && -n)
}

function invert(array) {
    return array.map(v => ~v+1);
 }

console.log(invert([1,-2,3,-4,5]));