function alphabetWar(fight) {
    let left = 'sbpw'.split('');
    let rigth = 'zdqm'.split('');
    let sumR = 0, sumL = 0;
    for (let i = 0, len = fight.length; i < len; i++) {
        let r = rigth.indexOf(fight[i]);
        let l = left.indexOf(fight[i]);
        (r != -1) ? sumR += r + 1 : (l != -1) ? sumL += l + 1 : sumL += 0;
    }
    console.log(sumR, sumL);
    return sumR > sumL ? "Right side wins!" : sumR < sumL ? "Left side wins!" : "Let's fight again!"
}

function alphabetWarUp(fight) {
    let values = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
    let result = [...fight].reduce((a, b) => a + (values[b] || 0), 0)
    return result ? (result < 0 ? 'Left ' : 'Right ') + 'side wins!' : "Let's fight again!";
}

console.log(alphabetWarUp('wwwwww'));