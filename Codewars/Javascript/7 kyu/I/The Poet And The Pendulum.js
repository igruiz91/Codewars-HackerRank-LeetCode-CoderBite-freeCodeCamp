function pendulum(values) {
    var resp = [];
    values = values.sort((a,b)=> a-b);
    resp.push(values.shift())
    for(let i=0; i<values.length; i++)
        (i%2==0) ? resp.push(values[i]) : resp.unshift(values[i])
    return resp
}

console.log(pendulum([8,7,10,3]));