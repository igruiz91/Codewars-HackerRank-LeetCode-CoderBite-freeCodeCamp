function countingValleys(n, s) {
    s=s.split('');
    let nivel=0;
    let valles =0;
    for(let i=0; i<n;i++){
        if(s[i]=='U'){
            nivel++
        }else if(s[i]=='D'){
            if(nivel == 0){
                valles++
            }
            nivel--
        }
    }
    return valles
}


console.log(countingValleys(12, 'DDUUDDUDUUUD'));

