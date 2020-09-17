function solve(st) {   
    let max =0, char ='';
    return [...st].filter((n,i, self) => {
        if((self.lastIndexOf(n)-i)>max){
            max=self.lastIndexOf(n)-i;
            console.log(max);
            return n
        }}).join('')    
}

const solveUp = st => {
    let obj={};
    [...st].map(c => obj[c]=Math.abs(st.indexOf(c)-st.lastIndexOf(c)))
    return Object.keys(obj).sort((a,b)=> b[1]-a[1] || a[0]>b[0])[0][0]
}

console.log(solveUp('axyzxyz'));