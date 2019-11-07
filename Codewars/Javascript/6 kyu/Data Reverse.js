
function dataReverse(data) {
    let a = { '11111111': '10101010', '00000000': '00001111', '00001111': '00000000', '10101010': '11111111' }
    let nums = []
    let resp = []
    for (let i = 0; i < data.length; i += 8) {
        let num = data.slice(i, i + 8).join('')
        nums.push(a[num])
    }
    nums.map(a => a.split('').map(n => resp.push(+n)))
    return resp
}

const data1 = [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]

console.log(dataReverse(data1));