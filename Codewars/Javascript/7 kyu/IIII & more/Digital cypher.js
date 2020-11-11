function encode(str,  n){
    n = `${n}`.split('').map(n => +n).reverse();
    let len =Math.max(str.length, n.length)
    let codeStr = str.split('').map((_,i) => str.charCodeAt(i)-96).reverse();
    let resp =[];
    //console.log(codeStr);
    //console.log(n);
    for(let i=0; i<len; i++){
        if(isNaN(codeStr[i])) codeStr[i]=0;
        if(isNaN(n[i])) n[i]=0;
        resp.push(codeStr[i]+n[i]);
      }
    return resp.reverse()
}

const encodeUp = (str, n) => {
    const key = String(n);
    return Array.from(str, (c,i)=> c.charCodeAt(0)-96 + Number(key[i%key.length]))
}


console.log(encode('scout', 19391));
