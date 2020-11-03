function averageString(str) {
    let nums = ['zero', 'one', 'two', 'tre', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    str= str.split(' ').map(e => nums.indexOf(e)) 
    return str.includes(-1) ? "n/a" : nums[Math.floor(str.reduce((a,b) => a+b,0)/str.length)]
}

console.log(averageString("four zero sfwkc four six eight seven"));