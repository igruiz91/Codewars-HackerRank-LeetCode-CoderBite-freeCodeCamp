function countBy(x, n) {
    var z = [];
    for(let i=1; i<=n*x; i++){
        if(i%x == 0){
            z.push(i)
        }
    }
    return z
}

function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}

const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)

function countBy(x, n){
    return Array.apply(0, Array(n)).map(function(v, i){
      return (i + 1) * x;
    });
  }

console.log(countBy(2,5));