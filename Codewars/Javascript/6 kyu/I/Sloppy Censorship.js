function censor(memoir){
    return memoir.split(' ').map(w => (w[0].toUpperCase() ==w[0]) ? w.split('').map(c => +c == c ? '_' : c.toUpperCase()==c ? c : '_') : w ).join(' ').replace(/[^\w. ]/g, '')
}

console.log(censor('Gertrude went overboard on the Sailor Jerry...'));


//w[0].toUpperCase() == w[0] ? w[0]+'_'.repeat(w.slice(1).length) : w
//'W___ we woke up there was Y_____ all over T________ iPhone'