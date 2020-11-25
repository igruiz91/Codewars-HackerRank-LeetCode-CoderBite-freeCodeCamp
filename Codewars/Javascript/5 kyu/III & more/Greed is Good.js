function score(dice) {
    let len = 0
    dice = dice.sort((a, b) => a - b).join('').match(/666|111|555|444|333|222|1|5/g);
    dice ? len = dice.length : null
    if (len == 0) return 0
    for (let i = 0; i < len; i++) {
        switch (dice[i]) {
            case '111':
                dice[i] = 1000
                break;
            case '666':
                dice[i] = 600
                break;
            case '555':
                dice[i] = 500
                break;
            case '444':
                dice[i] = 400
                break;
            case '333':
                dice[i] = 300
                break;
            case '222':
                dice[i] = 200
                break;
            case '1':
                dice[i] = 100
                break;
            case '5':
                dice[i] = 50
                break;
            default:
                break;
        }
    }
    return dice.reduce((a, b) => a + b)
}

console.log(score([4, 4, 4, 3, 3]));