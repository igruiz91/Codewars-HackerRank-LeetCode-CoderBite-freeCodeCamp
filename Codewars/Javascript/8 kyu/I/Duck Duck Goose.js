function duckDuckGooseFirst(players, goose) {
    let len = players.length
    return goose>len ? players[goose%len-1] : players[goose-1]
}

function duckDuckGoose(players, goose){
    return players[(goose-1)%players.length].name
}

let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];

console.log(duckDuckGoose(ex_names, 11));