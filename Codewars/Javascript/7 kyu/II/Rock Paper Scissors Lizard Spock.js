function rpsls(pl1, pl2) {
  if(pl1 == pl2) return "Draw!"
  let dict = {
    "rock": ["paper" , "spock"],
    "paper": ["scissors" , "lizard"],
    "scissors": ["spock" , "rock"],
    "lizard": ["scissors" , "rock"],
    "spock": ["lizard" , "paper"],
  }
  let resp = dict[pl1].includes(pl2)
  return  `Player ${1+resp} Won!`
}


console.log(rpsls("lizard", "scissors"));
console.log(rpsls("spock", "lizard"));
console.log(rpsls("scissors", "spock"));

console.log(rpsls("rock", "lizard"));
console.log(rpsls("spock", "rock"));
console.log(rpsls("paper", "rock"));
