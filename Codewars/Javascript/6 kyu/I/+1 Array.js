function upArray(arr) {
    if (arr.length == 0) return null
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0 || arr[i] > 9)
            return null
    }
    console.log(arr);
    arr = []
    return `${arr}`.split('').map(a => +a)
}

const upArrayNew = a =>{
    if(!a.every(v => v>=0) || a.length== 0) return null;
    if(a.some(v => v.toString().length > 1)) return null;
    let arr=[];
    for(let i=0; i<a.length; i+=15){
        arr.push(a.slice(i, i+15));
    }
    arr[arr.length-1] = arr[arr.length-1].join('')*1+1;
    arr =  arr.map(v => (Array.isArray(v) ? v.join('')*1:v))
    return arr.join('').split('').map(v => v*1)
}

const BigNumber = require('bigNumber.js');
const upArrayUp = arr => arr.length == 0 || arr.filter(x => x<0 || x>9).length>0 ? null :(new BigNumber(arr.join('')).plus(1)).toPrecision().split('').map(Number);

console.log(upArrayUp([ 2, 1, 4, 7, 4, 8, 3, 6, 4, 7 ]));

