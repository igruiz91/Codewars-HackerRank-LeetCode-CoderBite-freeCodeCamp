function consecutiveDucks(num) {
    let lim=Math.ceil(num/2)
    for(let i=lim; i>1; i--){
        let suma=0; let pos=i;
        while((suma<num) && (pos * (pos+1)/2+suma >= num)){          
            suma+=pos;
            console.log(pos, suma);
            if(suma==num) return true
            pos--;     
        }
    }
    return false
}



//console.log(limiteFactorial(5));

console.log(consecutiveDucks(6));
