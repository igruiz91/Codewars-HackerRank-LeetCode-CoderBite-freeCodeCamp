function isMerge(s, part1, part2) {
    let p1 = part1.split('').join(' ');
    let p2 =' '+ part2.split('').join(' ');
    let len=p1.length+p2.length;
    let resp =[]
    for(let i=0; i<len; i++){
        if(i%2==0) resp.push(p1[i])
        else resp.push(p2[i])
    }
    resp=resp.filter(c => c != undefined).join('')
    return (s== part1+part2 || s== resp)
}

console.log(isMerge('codewars', 'cdw', 'oears'));

// let a = 'aa'.split('');
// let b=[];
// b.push(a.shift())
// console.log(a);