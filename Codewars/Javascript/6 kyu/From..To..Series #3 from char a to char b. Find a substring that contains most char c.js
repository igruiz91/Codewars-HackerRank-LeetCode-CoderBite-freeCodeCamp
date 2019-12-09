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

var s = 'abacbaccbbccca';
console.log(findSub(s, 'a', 'b', 'c'));