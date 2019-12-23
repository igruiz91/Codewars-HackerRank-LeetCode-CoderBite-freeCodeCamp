function longest(str) {
    let resp=str[0];
    for(let i=0; i<str.length-1; i++){
        let word=str[i];
        for(let j=i; j<str.length; j++){
          if(str[j]<=str[j+1]) word+=str[j+1]
          else break
        }
        if(word.length>resp.length) resp=word;
    }
    return resp
}

const longestUp = s => s.match(/a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*/g).reduce((a,b) => a.length >= b.length ? a : b, 0);

const longestUp2 = str => {
    let max=0, cur=0, pos=0, i=1;
    for(i; i<str.length; i++){
        if(str[i-1]<=str[i]) {
            cur++
            if(cur>max){
                max=cur;
                pos=i-max
            }
        } else cur =0;
    }
    return str.slice(pos, max+1+pos)
}

console.log(longestUp2('abcdeapbcdef'));