function alphabetWar(fight){
    let survivors = fight.replace(/(\w)?\*(\w)?/g, "")
    let left=0, rigth = 0
    for(let i =0; i<survivors.length; i++){
        switch (survivors[i]) {
            case 'w': left+=4; break;
            case "w": left+= 4; break;
            case "p": left+= 3; break;
            case "b": left+= 2; break;
            case "s": left+= 1; break;
            case "m": rigth+= 4; break;
            case "q": rigth+= 3; break; 
            case "d": rigth+= 2; break;
            case "z": rigth+= 1; break;
        }
    }
    return left>rigth ? "Left side wins!" : left<rigth ? "Right side wins!" : "Let's fight again!"
}

const alphabetWarUp = fight =>{
    const map = {w:-4, p:-3, b:-2, s:-1, m:4, q:3, d:2, z:1}
    var resp = fight.replace(/[^*]?\*[^*]?/g, "").split('').reduce((a,b) => a+ (map[b] || 0), 0)
    return resp ? (resp< 0 ? 'Left' : 'Right')+ ' side wins!' : 'Let\'s fight again!'
}

console.log( alphabetWar("z*dq*mw*pb*ss"));
console.log( alphabetWarUp("z*dzq*mw*pb*ss"));