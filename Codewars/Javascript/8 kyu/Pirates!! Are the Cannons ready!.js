const cannonsReady = (gunners) => {
    for(var[_,v] of Object.entries(gunners))
        if(v == 'nay') return 'Shiver me timbers!'
    return 'Fire!'
}

const cannonsReadyUp = g => Object.values(g).some(v => v =='nay') ? 'Shiver me timbers!' : 'Fire!';

const cannonsReadyUp2 = g=> Object.keys(g).every(s => g[s]=='aye') ? 'Fire!' : 'Shiver me timbers!';


var a = {'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'}

console.log(cannonsReadyUp2(a));