function findSub(s, a, b, c) {
    let resp = [];
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] != a) continue;
        console.log(s[i]);
        let sub = 'a';
        let contador = 0;
        for (let j = i + 1; j < s.length; j++) {
            console.log(s[j]);
            if (s[j] == c) contador++
            if (s[j] == a) break
            else if (s[j] == b) resp.push(s.slice(i, j + 1))
            else sub += s[j]
        }
        if (sub[sub.length - 1] == b) resp.push(sub)
    }
    return resp
}


const findSubNew = (s, a, b, c) => {
    const exp = `${a}[^${a}|${b}]+?${b}`
    let reg = new RegExp(exp, 'g')
    let subs = s.match(reg)
    resp = '', max = 0;
    for (let i = 0; i < subs.length; i++) {
        if (contadorC(subs[i], c) > max) resp = subs[i]
    }
    return resp
}
const contadorC = (str, c) => {
    let contador = 0
    for (let i = 0; i < str.length; i++)
        if (str[i] == c) contador++
    return contador;
}

var s = 'abacbaccbbccca';
console.log(findSubNew(s, 'a', 'b', 'c'));