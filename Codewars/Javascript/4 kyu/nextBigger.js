function nextBigger(n) {
    var v2 = n.toString().split('').sort((a,b) =>b-a);
    if (n == v2.join(''))
      return -1 
    var v = n.toString().split('');
    i=v.length-1;
    console.log(v);
    do{
      v[i]=v[i-1]*1+v[i]*1;
      console.log(v[i]);
      v[i-1]=v[i]*1-v[i-1]*1;
      console.log(v[i-1]);
      v[i]=v[i]*1-v[i-1]*1;
      console.log(v[i]);
      i--;      
    }while(v.join('')<=n);
    return v.join('');
}

console.log(nextBigger(1234567890));