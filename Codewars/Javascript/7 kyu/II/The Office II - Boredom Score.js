function boredom(staff){
  let lib  = {
    "accounts" : 1,
    "finance" : 2,
    "canteen" : 10,
    "regulation" : 3,
    "trading" : 6,
    "change" : 6,
    "IS" : 8,
    "retail" : 5,
    "cleaning" : 4,
    "pissing about" : 25
  }
  let sum = Object.values(staff).reduce((a, b) => a + (lib[b] ? lib[b] : 0), 0);
  return sum <= 80
    ? "kill me now"
    : sum < 100
    ? "i can handle this"
    : "party time!!";
}

let s = {
  tim: "IS",
  jim: "finance",
  randy: "pissing about",
  sandy: "cleaning",
  andy: "cleaning",
  katie: "cleaning",
  laura: "pissing about",
  saajid: "regulation",
  alex: "regulation",
  john: "accounts",
  mr: "canteen",
};

console.log(boredom(s));