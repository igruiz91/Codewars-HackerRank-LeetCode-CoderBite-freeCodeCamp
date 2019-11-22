var isAnagram = function(test, original) {
    const transform = str => str.toLowerCase().split('').sort().join('');
    return transform(test) == transform(original)
};

var isAnagramUp = (test, original) => {
    var h = [...test.toLowerCase()].reduce((b,c) => (b[c]=(b[c]||0)+1, b),{});
    h = [...original.toLowerCase()].reduce((b,c) => (b[c]=(b[c]||0)-1,b),h)
    return Object.keys(h).every(k => h[k]===0)
}


console.log(isAnagramUp("foefet", "toffee"));
