function firstNonRepeated(s) {
    let a = [];

    for (let i = 0; i < s.length; i++) {
        var c = s.charAt(i)
        if (s.indexOf(c) == i && s.indexOf(c, i + 1) == -1) return c
    }
    return null
}



console.log(firstNonRepeated('teetser'));