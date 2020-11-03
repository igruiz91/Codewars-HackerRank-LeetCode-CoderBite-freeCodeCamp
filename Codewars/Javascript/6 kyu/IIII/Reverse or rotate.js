function revrot(str, sz) {
    if (sz > str.length || sz <= 0) return "";
    let chunks = slicing(str, sz)
    console.log(chunks);
    chunks = chunks.map(chunk => {
        if (chunk.length < sz) return ''
        return cubeReverse(chunk) ? chunk.split('').reverse().join('') : chunk.slice(1) + chunk.slice(0, 1)
    })
    return chunks.join('')
}

function cubeReverse(n) {
    return n.split('').reduce((a, b) => +a + (+b) ** 3) % 2 == 0
}

function slicing(arr, n) {
    let chunks = []
    for (let i = 0; i < arr.length; i += n) {
        chunks.push(arr.slice(i, i + n))
    }
    return chunks
}

function revrotUp(str, n) {
    if (n > str.length || n <= 0) return '';

    const reverse = (chunk) => chunk.split('').reverse().join('');
    const rotate = (chunk) => chunk.slice(1) + chunk.slice(0, 1);
    const sumCubes = (chunk) => chunk.split('').reduce((a, b) => a + (+b) ** 3, 0);

    return str.match(new RegExp('.{' + n + '}', 'g')).map(c => sumCubes(c) % 2 ? rotate(c) : reverse(c)).join('')

}

//console.log(slicing("733049910872815764", 5));
//console.log("1234".reverse());
console.log(revrotUp("733049910872815764", 5));

//330479108928157