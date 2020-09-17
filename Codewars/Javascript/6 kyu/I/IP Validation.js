/*
    Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Input to the function is guaranteed to be a single string.

Examples
Valid inputs:

1.2.3.4
123.45.67.89
Invalid inputs:

1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Note that leading zeros (e.g. 01.02.03.04) are considered invalid
*/

function isValidIP(str) {
    if (str == '0.0.0.0') return true
    let str2 = str.split('.')
    str2 = str2.map(ip => +ip).join('.')
    if (str2.length != str.length) return false
    str2 = str2.split('.')
    if (str2.length != 4) return false
    for (let i = 0; i < 4; i++) {
        let n = Number(str2[i])
        if (n > 255 || n <= 0) return false
    }
    return true;
} //TODO problema con los zeros a la izquierda

function isValidIP(ip) {
    return /^(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/.test(ip)
}

function isValidIPUp(str) {
    return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
}

//validacion manual
function isValidIP(ip) {
    return ip.split('.').filter(v => {
        return v == Number(v).toString() && Number(v) < 256
    }).length == 4
}

//utilizando una libreria??
const net = require('net');
const isValidIP2 = (ip) => net.isIP(ip)

console.log(isValidIP2('1.2.2.1'));