function pattern(n){
    let arr = []
    let resp=""
    let nums = Array.from({length: n}, (_,i)=> i+1).join("")
    arr.push(nums)
    for(let i=1; i<n; ++i){
        let elementoFinal = arr[arr.length-1]
        resp=elementoFinal.slice(1)+elementoFinal.slice(0,1)
        arr.push(resp)
    }
    return arr.join('\n')
}

const patternUp = n =>{
    return Array.from({length: n}, (_,i) =>Array.from({length: n}, (_,j) => {
        return((i+j)%n)+1
    }).join("")).join("\n")
}
let a=`
123456789
234567891
345678912
456789123
567891234
678912345
789123456
891234567
912345678`

/*

*/


console.log(patternUp(9));