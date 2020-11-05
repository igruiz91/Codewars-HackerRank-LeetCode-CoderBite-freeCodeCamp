function findUnique(numbers) {
    return numbers.filter((n,i,self) => self.lastIndexOf(n) == self.indexOf(n))[0]
}

function findUnique2(n){
    return n.reduce((a,b) => a^b)
}

console.log(findUnique([ 1, 8, 4, 4, 6, 1, 8 ]));

