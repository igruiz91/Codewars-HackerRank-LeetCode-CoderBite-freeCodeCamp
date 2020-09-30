function groupByCommas(n) {
    let arr = []
    let contador = 0
    n = `${n}`
    if (n.length <= 3) return n
    n = n.split('').reverse()
    for (let i = 0; i < n.length; i++) {
        if (contador == 3) {
            arr.push(',')
            arr.push(n[i]);
            contador = 1;
        } else {
            arr.push(n[i])
            contador++
        }
    }
    return arr.reverse().join('')
}

function groupByCommas2(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function groupByCommas3(n) {
    let s = reverse(`${n}`)
    arr = [];
    for (let i = 0, l = s.length; i < l; i += 3) {
        arr.push(s.substr(i, 3))
    }
    console.log(arr);
    return reverse(arr.join(','))
}
function reverse(cadena) {
    return cadena.split('').reverse().join('')
}


function subs(str) {
    return str.slice(-3, -2)
}

//console.log(subs('Israel'));

console.log(groupByCommas3(35235235));