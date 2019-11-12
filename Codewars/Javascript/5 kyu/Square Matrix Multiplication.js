function matrixMultiplication(a, b){
    let resp=[];
    for(let i=0; i<b.length; i++){
        resp[i]=[];
        for(let j=0; j<a[0].length; j++){
            var sum=0
            for(let k=0; k<a.length; k++){
                sum+= a[i][k]*b[k][j];
            }
            resp[i].push(sum)   
        }     
    } 
    return resp 
}

let a =[[1, 2], [3, 2]];
let b =[[3, 2], [1, 1]];

console.log(matrixMultiplication(a,b));