function killer(suspectInfo, dead) {
  for(const [k,v] of Object.entries(suspectInfo)){
    let  count = 0
    for(let i=0; i<v.length; i++){
      if(dead.includes(v[i])) count++
      if(count == dead.length) return k
    }
  }
}


const killerUp = (suspectInfo, dead) => {
  return Object.keys(suspectInfo).find(x => dead.every(s => suspectInfo[x].includes(s)))
}



let info = {'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle']}
let deads = ["Lucas", "Bill"];
let infosus = {'Brad': [], 'Megan': ['Ben', 'Kevin'], 'Finn': []}
let deads2 = ['Ben']


//console.log(deads2.length)
//console.log(killer(info, deads));
console.log(killer(infosus, deads2));