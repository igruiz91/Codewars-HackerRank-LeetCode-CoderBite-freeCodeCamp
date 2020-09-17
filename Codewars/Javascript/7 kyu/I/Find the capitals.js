var capitals = function (word) {
    let resp = []
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            resp.push(i)
        }
    }
    return resp
};

var capitalsUp = (word) => {
    return word.split('').reduce((memo, v, i) => v === v.toUpperCase() ? memo.concat(i) : memo, [])
}

console.log(capitalsUp('CodEWaRs'));