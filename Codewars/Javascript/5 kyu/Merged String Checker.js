<<<<<<< HEAD
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
=======
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

const isMergeNew = (s, part1, part2) =>{
    let count=1
    let word =""
    part1= part1.split('')
    part2= part2.split('')
    while(part1.length || part2.length){
        let sPart= [...s].slice(0,count).join('')
        if(word+part1[0]==sPart){
            word+=part1.shift()
            count++
        }
        else if(word+part2[0]==sPart){
            word+=part2.shift()
            count++
        }
        
        else return false
    }
    return s==word
}





console.log(isMergeNew('Bananas from Bahamas', 'Bahas', 'Bananas from am'));

// let a = 'aa'.split('');
// let b=[];
// b.push(a.shift())
>>>>>>> d4032ec81459f9b8a6dd31aac9e65034e91228b3
// console.log(a);