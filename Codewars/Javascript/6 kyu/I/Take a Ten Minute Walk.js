function isValidWalk(walk) {
    let n = [], s = [], w = [], e = [];
    walk.map(d => {
        d == 'n' ? n.push(1) : d == 's' ? s.push(1) : d == 'w' ? w.push(1) : e.push(1)
    })
    return (n.length == s.length) && (w.length == e.length) && (walk.length == 10)
}

console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w']));