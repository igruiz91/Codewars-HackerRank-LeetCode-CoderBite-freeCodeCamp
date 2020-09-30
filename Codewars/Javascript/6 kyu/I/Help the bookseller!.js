function stockList(listOfArt, listOfCat) {
    let str = ''
    let resp = {}
    listOfArt.map(art => {
        let book = art.split(' ')
        let cuant = Number(book[1])
        let cat = book[0].slice(0, 1)
        resp[cat] ? resp[cat] += cuant : resp[cat] = cuant
    })
    if (Object.keys(resp).length == 0) return ''
    for (let i = 0; i < listOfCat.length; i++) {
        let c = listOfCat[i];
        str += `(${c} : ${resp[c] ? resp[c].valueOf() : 0}) - `
    }
    return str.slice(0, -2).trim()
}

//estudiar

function stockList(listOfArt, listOfCat) {
    if (!listOfArt.length || !listOfCat.length) return ''
    return listOfCat.map(w => {
        const s = listOfArt.reduce((a, b) => a + (b.charAt(0) === w ? +b.split(' ')[1] : 0), 0)
        return `(${w} : ${s})`
    }).join(' - ')
}

let b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
let c = ["A", "B", "C", "W"]

console.log(stockList(b, c));