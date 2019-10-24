var numJewelsInStones = function(J, S) {
    let contador = 0
    J= J.split('');
    S.split('').map(c => {
        if(J.includes(c)) 
        return contador++
    })
    return contador    
};

console.log(numJewelsInStones("aA","aAAbbbb"));