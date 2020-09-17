function ipsBetween(start, end){
    let convertIp = ip => ip.split('.').map(n => +n)
    start = convertIp(start)
    end = convertIp(end)
    let adress = []
    for(let i=0; i<start.length; i++)
        adress.push(end[i]-start[i])
    
    return adress[3]+adress[2]*256+adress[1]*(256**2)+adress[0]*(256**3)
}


const ipsBetweenUp = (start, end) => {
    const val = ip => ip.split('.').reduce((total, actual, i)=> total+actual*Math.pow(256,3-i),0)
    return val(end)-val(start)
}
console.log(ipsBetweenUp("10.0.0.0", "10.0.1.0"));