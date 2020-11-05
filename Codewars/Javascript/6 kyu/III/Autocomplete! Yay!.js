function autocomplete(input, dictionary){
    let resp = [];
    input = input.replace(/[^a-z]+/gi, "")
    console.log(input);
    let reg = new RegExp( `^${input}`)
    dictionary.map(e => reg.test(e) ? resp.push(e) : null)
    return resp.slice(0,5)
}

console.log(autocomplete('a$i', ['airplane','airport','apple','ball', 'ai', 'airo', 'aidio']));