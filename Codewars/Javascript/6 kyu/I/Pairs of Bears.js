function bears(x, s){
    let b = s.match(/8B|B8/g)
    return x != 0 ? [b != null ? b.join(''): '', b !=null ? b.length>=x : false] : [b != null ? b.join('') : '', true]
}

const bearsUp = (x,s) => {
    var pairs = s.match(/8B|B8/g) || [];
    return [pairs.join(''), pairs.length>=x]
}

console.log(bears(7, 'BBbd888hB'));
console.log(bearsUp(7, 'B8Bbd888hB'));
