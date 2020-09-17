function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return [laLigaGoals, copaDelReyGoals, championsLeagueGoals].reduce((a, b) => a + b)
}

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

const goals = (...a) => a.reduce((s, v) => s + v, 0);

console.log(goals(43, 10, 5));