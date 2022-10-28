function fruit(reels, spins) {
  let lib = {"Jack": 0, "Queen": 1, "King": 2, "Bar": 3, "Cherry": 4, "Seven": 5, "Shell": 6, "Bell": 7, "Star": 8, "Wild": 9, }
  let [r1,r2,r3] = reels.map((r,i) => r[spins[i]])
  let n;
  if(r1 != r2 && r2 !=r3 && r1 !=r3) return 0
  if(r1 == r2 && r2 == r3) {
    n = lib[r1]
    return (n+1)*10
  }
  else{
    let repeated = [r1,r2,r3].filter((c,i,arr) => arr.indexOf(c) !== arr.lastIndexOf(c))[0]
    let other = [r1,r2,r3].filter((e) => e == "Wild")[0];
    n = lib[repeated];
    if (repeated == "Wild") return 10
    else if(other === "Wild"){
      return (n + 1) * 2
    }
    return (n+1)
  }
  return 0
}

const fruitUp = (reels, spins   ) => {
  let map =  ['Jack', 'Queen', 'King', 'Bar', 'Cherry', 'Seven', 'Shell', 'Bell', 'Star', 'Wild'];
  let [a,b,c] = reels.map((reel, i) => map.indexOf(reel[spins[i]]) +1).sort((a,b) => a-b)
  if(a === b && b===c) return a*10
  if(a===b) return c ===10 ? a*2 : a
  return b===c ? b : 0
}


reel1 = ["King", "Jack", "Wild", "Bell", "Star", "Seven", "Queen", "Cherry", "Shell", "Bar"];
reel2 = ["Star", "Bar", "Jack", "Seven", "Queen", "Wild", "King", "Bell", "Cherry", "Shell"];
reel3 = ["King", "Bell", "Jack", "Shell", "Star", "Cherry", "Queen", "Bar", "Wild", "Seven"];
let reel11 = ["Bell", "Shell", "Cherry", "Star", "Bar", "King", "Queen", "Seven", "Wild", "Jack"];
let reel22 = ["Seven", "Queen", "Wild", "Star", "Shell", "Jack", "Bell", "King", "Bar", "Cherry"];
let reel33 = ["Bell", "Shell", "Queen", "Wild", "Bar", "King", "Cherry", "Jack", "Seven", "Star"];
let spin = [0,5,0];

console.log(fruitUp([reel1,reel2, reel3], spin))
console.log(fruitUp([reel11,reel22, reel33], spin))
