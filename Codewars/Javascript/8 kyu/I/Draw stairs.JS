function drawStairs(n) {
    let resp = ''
    for(let i=0; i<n; i++)
        resp+=' '.repeat(i)+'I\n';
    return resp.slice(0,-2)
}

function drawStairsUp(n) {
    return [...Array(n)].map((_,i) => ' '.repeat(i)+'I').join('\n')
}

console.log(drawStairs(7));