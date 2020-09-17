function tickets(peopleInLine) {
    let caja = []
    for (let i = 0; i < peopleInLine.length; i++)
        if (peopleInLine[i] == 25) {
            caja.push(25)
        } else if (peopleInLine[i] == 50) {
            let subcaja = caja.filter(n => n == 25)
            if (subcaja.length > 0) {
                for (let j = 0; j < caja.length; j++) {
                    if (caja[j] == 25) {
                        delete caja[j];
                        break;
                    }
                }
            } else return 'NO'
        } else if (peopleInLine[i] == 100) {
            if (caja.reduce((a, b) => a + b < 75)) {
                return "NO"
            } else {
                if (caja.filter(n => n == 50).length > 0 && caja.filter(n == 25).length > 0) {
                    for (let k = 0; )
        }
            }

        }
}

console.log(tickets([25, 25, 50, 50, 100]));