function toRange(arr) {
    arr=arr.sort((a,b)=>a-b)
    let resp =[]
    let nc=nonConsecutives(arr)
    let consecutives = arr.filter(n=> !nc.includes(n))
    let inicial=consecutives[0]
    for(let i=0; i< consecutives.length; i++){
        if(consecutives[i]+1 !=consecutives[i+1]){
            let str=`${inicial}_${consecutives[i]}`
            inicial=consecutives[i+1];
            resp.push(str)
            while(inicial>nc[0]){
                resp.push(nc.shift())
            }
        }
    }
    return resp.join(',')
}


function toArray(str) {
    let resp=[]
   str=str.split(',') 
   let nc = str.filter(Number)
   let cadenas = str.filter(n=> !nc.includes(n))
   cadenas = cadenas.map(n =>formatStr(n))
   cadenas.map(a => a.map(nums=> resp.push(nums)))
   for(let i=0; i<resp.length;i++){
       if(resp[i]>nc[0]){
           resp.splice(i,0, nc.shift())
       }
   }
   return resp.map(n=>+n)
}

function formatStr(str) {
    let resp=[]
    str= str.split('_').map(n=>+n)
    for(let i=str[0];i<=str[1]; i++){
        resp.push(i)
    }
    return resp
}
//console.log(formatStr('3_6'));
//console.log(toArray('3_6,9,11,12_13'));

function nonConsecutives(arr) {
    let resp=[]
    for(let i=1; i<arr.length; i++){
        if(arr[i] !=arr[i-1]+1) resp.push(arr[i])
    }
    return resp
}


//console.log(toRange([3,4,5,6,9,11,12,13,15]));