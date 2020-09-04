function multiTable(number) {
    for(var i=1, resp=''; i<=10; i++)
        resp+= `${i} * ${number} = ${i*number}\n`
    return resp.slice(0,-1)
}

function multiTableUp(n){
    return [...Array(10)].map((e, i) => e=`${i+1} * ${n} = ${(i+1)*n}`).join('\n')
}

console.log(multiTableUp(5));