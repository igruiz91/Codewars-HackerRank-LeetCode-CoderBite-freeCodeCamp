function sumConsecutives(s) {
    return s.reduce((a,b,i,self) => {
        (b != self[i-1]) ? a.push(b) : a[a.length-1]+=b
        return a
    },[])
}

var sumConsecutivesUp = n => n.reduce((a,b,i,arr) => (b==arr[i-1] ? a[a.length-1]+=b : a.push(b), a),[])

console.log(sumConsecutivesUp([1,4,4,4,0,4,3,3,1]));