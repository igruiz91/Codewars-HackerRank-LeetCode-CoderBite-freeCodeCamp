function switcher(x){
    let abc='`zyxwvutsrqponmlkjihgfedcba!? '
    return x.map(c=> abc[c]).join('')
}

const switcherUp = x => x.reduce((a,b) => a+ " ?!abcdefghijklmnopqrstuvwxyz"[29-b], "")


console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']));
console.log(switcherUp(['24', '12', '23', '22', '4', '26', '9', '8']));