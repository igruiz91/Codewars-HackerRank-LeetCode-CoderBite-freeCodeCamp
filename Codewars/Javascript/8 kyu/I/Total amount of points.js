function points(games) {
    let contador = 0
    games = games.join(':').split(':')
    for (let i = 0; i < games.length - 1; i += 2) {
        console.log(i);
        if (games[i] > games[i + 1]) contador += 3
        else if (games[i] == games[i + 1]) contador++
    }
    return contador
}

function pointsUpper(games) {
    return games.reduce((output, current) => {
        return output += current[0] > current[2] ? 3 : current[0] == current[2] ? 1 : 0;
    }, 0)
}

console.log(pointsUpper(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3']));