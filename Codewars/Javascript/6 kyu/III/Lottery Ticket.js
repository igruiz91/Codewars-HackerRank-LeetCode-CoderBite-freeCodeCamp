function bingo(ticket, win){
    let resp = 0
    ticket.map(a => {
        let l = a[0].split('')
        for(let i=0; i<l.length; i++){
            if(l[i].charCodeAt(0)== a[1]){
                resp++
                break
            }
        }
    })
    return resp>=win ? 'Winner!' : 'Loser!'
}

function bingoUp(ticket, win){
    if(ticket.filter(a => a[0].split('').some(b => b.charCodeAt(0) == a[1])).length >=win) return 'Winner!'
    return 'Loser!'
}

const bingoUp2 = (t, w) =>  w <= t.filter(e => e[0].split('').some(c => c.charCodeAt(0)==e[1])).length ? 'Loser!' : 'Winner!'


console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1));

//console.log(String.fromCharCode(65));