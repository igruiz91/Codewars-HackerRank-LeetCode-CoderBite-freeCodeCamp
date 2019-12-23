function solve(arr){  
    return arr.map(w => {
        let contador =0;
        w.toLowerCase().split('').map((c,i) => {
            if(c.charCodeAt(0)-97==i) contador++
        })
        return contador
    })
};

console.log(solve(["abode","ABc","xyzD"]));