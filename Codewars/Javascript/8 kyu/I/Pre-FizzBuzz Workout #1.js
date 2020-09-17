function preFizz(n) {
    for(var i=1, r=[]; i<=n;i++)
        r.push(i)
    return r
}

const preFizzUp = n => Array.from({length: n}, (_,i)=> i+1);

const preFizzUp2 = n=> [...Array(n)].map((e,i)=> i+1)

const preFizzUp3 = n => new Array(n).fill().map((e,i)=> i+1)

console.log(preFizzUp3(10));