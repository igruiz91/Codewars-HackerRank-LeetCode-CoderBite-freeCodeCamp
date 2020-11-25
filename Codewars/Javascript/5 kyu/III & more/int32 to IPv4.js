function int32ToIp(int32){
    let resp =[]
    const fill = n => `00000000000000000000000000000000${n}`.slice(-32)
    let bin = int32.toString(2)
    bin = fill(bin)
    for (let i = 0, count=0; i < 4; i++) 
        resp.push(bin.slice(count, count+=8))
    return resp.map(n => parseInt(n, 2)).join('.')
}

const int32ToIpUp = int32 => [int32 >>> 24, int32 >> 16 & 255, int32 >> 8 & 255, int32 & 255].join('.')

const int32ToIpUp2 = int32 => [24,16,8,0].map(e => int32 >> e & 255).join('.')


console.log(int32ToIp(2149583361));
console.log(int32ToIpUp(2149583361));
console.log(int32ToIpUp2(2149583361));



//10000000001000000000101000000001
//00000000000000000000000000000000
//10000000001000000000101000000001
//00000000000000000000000000100000
