sortme = function( names ){
    return names.sort((a,b) => a.localeCompare(b))
}

const sortmeUp = names => names.sort(Intl.Collator().compare)

sortmeUp2 = function (names) {
    return names.sort((a,b)=> a.toLowerCase().localeCompare(b.toLowerCase()))
}

console.log(sortme(["a","A","a'm","bc", "bac", "Bca"]));
console.log(sortmeUp(["a","A","a'm","bc", "bac", "BcA"]));
console.log(sortmeUp2(["a","A","a'm","bc", "bac", "BcA"]));
