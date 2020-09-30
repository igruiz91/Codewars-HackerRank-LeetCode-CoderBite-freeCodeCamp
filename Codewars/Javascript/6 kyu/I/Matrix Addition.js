function matrixAddition(a, b){
    let resp =[]
    for(var i=0; i<a.length; i++){
        let v=[]
        for(let j=0; j<a[0].length; j++)
            v.push(a[i][j]+b[i][j])
        resp.push(v)
    }
    return resp
}

function matrixAdditionUp(a,b) {
    return a.map((f,i) => f.map((r,j)=> r+b[i][j]))
}

function matrixAdditionUp2(a, b){
    return a.map(function(row, i) {
      return row.map(function(col, ii) {
        return col + b[i][ii];
      });
    });
  }

var a= [ 
[1, 2, 3],
[3, 2, 1],
[1, 1, 1] 
]
var b =[ 
[2, 2, 1],
[3, 2, 3],
[1, 1, 3] 
]

console.log(matrixAddition(a,b));
console.log(matrixAdditionUp(a,b));
console.log(matrixAdditionUp2(a,b));