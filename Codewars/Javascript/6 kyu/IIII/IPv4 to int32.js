function ipToInt32(ip){
    let resp = ''
    ip = ip.split('.').map(n => (+n).toString(2))
    return ip
}


let ip1= '128.32.10.1'


console.log(ipToInt32(ip1));