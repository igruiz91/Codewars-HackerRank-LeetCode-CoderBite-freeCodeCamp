function multTriangle(n) {
    let resp = [];
    let arr = Array.from(Array(n), (_,i)=> i+1)
    let cutArr = a =>  a.concat(a.slice(0, a.length-1).reverse());
    let oddSum=0, evenSum=0;
    const totalSum= arr=> arr.reduce((a,b) => a+ b.reduce((e, acum)=> {
        (acum%2==0) ? evenSum+=acum : oddSum+=acum; 
        return e+acum},0),0)
    for(let i=0; i<arr.length;i++){
        let v = [], elemento = arr[i];
        v.push(elemento);
        let numero =0, contador=2;
        while(numero != elemento*elemento && arr[i]>1){ 
            numero=elemento*contador;
            contador++;
            v.push(numero)
        }
        resp.push(cutArr(v));
    }
    return [totalSum(resp), evenSum, oddSum]
}

function multTriangleUp(n) {
    const totalSum = (n*(n+1)/2)**2, oddSum = Math.ceil(n/2)**4
    return [totalSum, totalSum-oddSum, oddSum]
}



//console.log(cutArr([ 3, 6, 9 ]))
console.log(multTriangle(5));
console.log(multTriangleUp(5));

//let arr = [[ 1 ],[ 2, 4, 2 ],[ 3, 6, 9, 6, 3 ],[   4, 8, 12, 16,  12, 8,  4],[   5, 10, //15, 20, 25,  20, 15, 10,  5]];
//console.log(totalSum(arr));