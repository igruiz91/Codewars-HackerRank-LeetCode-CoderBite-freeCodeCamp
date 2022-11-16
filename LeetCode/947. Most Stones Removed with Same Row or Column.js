var removeStones = function (stones) {
  let visited ={}

  const dfs = (idx) => {
    visited[idx] = true;

    let row =stones[idx][0]
    let col =stones[idx][1]
    let canRemove = 0
    for(let i=0; i < stones.length; i++){
      if(!visited[i] && (stones[i][0] === row ||stones[i][1] === col)){
        canRemove+=dfs(i)+1
      }
    }
    return canRemove
  }

  let totalRemoved= 0;
  for (let i = 0; i < stones.length; i++) {
    if(visited[i]) continue;
    totalRemoved+=dfs(i)
  }
  return totalRemoved
};


stones = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 2],
  [2, 1],
  [2, 2],
];
stones2 = [
  [0, 1],
  [1, 0],
];
console.log(removeStones(stones))
console.log(removeStones(stones2))
