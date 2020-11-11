function findDup( arr ){
    return arr.filter((e,i,self) => self.lastIndexOf(e)!=i)[0];
}

const findDupUp = arr => arr.filter((v,i) => arr.indexOf(v) != i)[0]

console.log(findDup([1,3,2,5,4,5,7,6]));
