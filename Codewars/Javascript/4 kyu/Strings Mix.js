function mix(s1, s2) {
    let resp = '';
    let str1 = limpiarStr(s1)
    let str2 = limpiarStr(s2)

    eliminandoElementos(str2, str1)
    eliminandoElementos(str1, str2)

    Object.keys(str2).forEach(element => {
        if (str1[element].valueOf() > str2[element].valueOf()) {
            resp += `1:${element.repeat(str1[element].valueOf())}/`
        } else if (str1[element].valueOf() < str2[element].valueOf()) {
            resp += `2:${element.repeat(str2[element].valueOf())}/`
        } else if (str1[element].valueOf() == str2[element].valueOf() && str1[element].valueOf() != 1) {
            resp += `=:${element.repeat(str1[element].valueOf())}/`
        }
    })

    return ordenarString(resp.slice(0, -1).split('/').sort()) //TODO
}

function limpiarStr(str) {
    return str.replace(/[^a-z]/g, '').split('').reduce((arr, occ) => {
        arr[occ] ? arr[occ]++ : arr[occ] = 1
        return arr
    }, {});;
}

function eliminandoElementos(obj, obj2) {
    return Object.keys(obj).forEach(element => {
        if (!obj2.hasOwnProperty(element)) {
            delete obj[element]
        }
    });
}

function ordenarString(str) {
    const compare = (a, b) => {
        if (a[0] < b[0]) {
            return -1;
        } else if (a[0] > b[0]) {
            return 1;
        } else {
            return 0;
        }
    }
    return str.sort(compare).join('/')


}
//console.log(ordenarString('2:yy/2:eeeee/=:hh/=:rr'));




console.log(mix("looping is fun but dangerous", "less dangerous than coding"));