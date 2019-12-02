function convertToMixedNumeral(parm){
    let n = `${parm}`.split('/');//.map(n => +n)
    let remain = n[0] % n[1];
    let div;
    n[0]<0 ? (div = Math.ceil(n[0]/n[1])) : (div = Math.floor(n[0]/n[1]));
    if(remain == 0) return "" + div;
    if(div == 0) return remain + '/'+ n[1];
    return div + '' +Math.abs(remain)+ '/'+ n[1]
}

const convertToMixedNumeralUp = parm =>{
    const [top, bottom] = parm.split('/');
    const integer = +top > 0 ? Math.floor(top/bottom) : Math.ceil(top/bottom);
    const fraction = integer === 0 ? top%bottom : Math.abs(top%bottom);
    return `${integer ? '' + integer : ''} ${fraction ? ''+ fraction+ '/' + bottom: ''}`.trim()
}

// var y=0;
// console.log("2+2".split(/\s*\+\s*/).map(x=>y+=+x,y).slice(-1)[0]);
console.log(convertToMixedNumeralUp('-2/3'));