function averages(numbers) {
    if(!numbers) return []
    for(let i=0; i<numbers.length-1; i++){
        numbers[i]=(numbers[i]+numbers[i+1])/2
    }
    return numbers.slice(0,-1)
}

function averagesUp(numbers) {
    return numbers ? numbers.map((v, i, a) => (v + a[i + 1]) / 2).slice(0, -1) : [];
}

function averagesUpgrade(nums) {
   return nums.map((n,i,self) => (n+self[i+1])/2).slice(0,-1) 
}

console.log(averagesUpgrade([ 1, 3, 5, 1, -10]));