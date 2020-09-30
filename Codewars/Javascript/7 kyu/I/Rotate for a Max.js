function maxRot(n) {
    n=`${n}`.slice(1)+`${n}`.slice(0,1);
    let rotations=[n]
    for(let i=0; i<4; i++){
        n = n.slice(0,i+1)+n.slice(i+2)+n.slice(i+1,i+2);
        rotations.push(n)
    } 
    return Math.max(...rotations)   
}

function maxRot(n) {
    var str= `${n}`;
    var arr=[str];
    for(let i=0; i<str.length-1; i++){
        str = str.slice(0,i)+str.slice(i+1)+srt[i];
        arr.push(str.split().join());
    }
    return Math.max(...arr)
}



console.log(maxRot(38458215));