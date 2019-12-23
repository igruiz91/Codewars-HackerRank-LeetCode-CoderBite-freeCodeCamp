function pipeFix(numbers){
    let x=numbers[0], y=numbers[numbers.length-1], resp=[];
    for(let i=x; i<=y; i++)
        resp.push(i);
    return resp
}

const pipeFixUp =(n)=> Array.from({length: n.pop() - n[0]+1}, (_,i) => i+n[0])

console.log(pipeFixUp([1,5,6,8,9]));