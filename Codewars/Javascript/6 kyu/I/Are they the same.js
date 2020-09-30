function comp(array1, array2){
    if(array2.length != array1.length) return false
    array1 = array1.sort((a,b) => a-b).map(n => n*n)
    array2 =array2.sor((a,b)=> a-b)
    for(let i=0; i<array1.length; i++){
        if(array1[i]!=array2[i]){
            return false
        }
    }
    return true  
}
function comp2(array1, array2) {
    if(array1 == null || array2 == null) return false;
    array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
    return array1.map(v => v * v).every((v, i) => v == array2[i]);
  }

let a = [121, 144, 19, 161, 19, 144, 19, 11];
let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];  
console.log(comp(a, b));
