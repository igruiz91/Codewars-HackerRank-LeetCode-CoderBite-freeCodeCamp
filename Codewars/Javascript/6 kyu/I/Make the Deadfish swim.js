function parse(data){
    let resp=[], v=0;
    for(let i =0; i<data.length; i++)
        switch (data[i]) {
            case 'i': v++; break;
            case 'd': v--; break;
            case 's': v=v*v; break;
            case 'o': resp.push(v); break;            
        }
    return resp
}

console.log(parse('iiisdoso'));