function sevenAte9(str) {
    for (let i = 0; i < str.length / 2; i++) {
        str = str.replace(/797/g, '77')
    }
    return str
}

const sevenAte9Up = str => str.replace(/79(?=7)/g, '7')

const sevenAte9Up2 = str => {
    while (true) {
        if (str.search('797') != -1) {
            str = str.replace(/797/g, '77')
        } else break
    }
    return str
}

console.log(sevenAte9Up2d('7979797'));