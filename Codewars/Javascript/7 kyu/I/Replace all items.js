function replaceAll(seq, find, replace) {
    console.log(seq, find, replace)
        const sustitution = arr => arr.map(e => e==find ? e=replace : e)
        if(!Array.isArray(seq)) return sustitution(seq.split('')).join('');
        return sustitution(seq);
}

function replaceAll(seq, find, replace) {
    return Array.isArray(seq) ? seq.map(x=>x==find?replace:x) : seq.split(find).join(replace)
}

console.log(replaceAll([1,2,2], 1, 2));