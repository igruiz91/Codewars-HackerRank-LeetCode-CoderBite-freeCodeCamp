function leaderB(user, user_score, your_score){
    let points = user_score-your_score;
    let katas3kyu = Math.floor(points/3)
    let katas1kyu = points%3
    return points<0 ? 'Winning!' : points==0 ? 'Only need one!' : `To beat ${user}'s score, I must complete ${katas3kyu} Beta kata and ${katas1kyu} 8kyu kata. ${katas3kyu+katas1kyu>1000 ? `Dammit!` : ''}`.trim() 
}

console.log(leaderB("a", 15991, 12000));