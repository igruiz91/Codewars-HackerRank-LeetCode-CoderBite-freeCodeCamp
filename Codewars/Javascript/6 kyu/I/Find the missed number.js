function findNumber(start, stop, string){
    let resp =[]
    for(let i=start; i<=stop; i++){
        if(!string.includes(String(i))) resp.push(i)
    }
    return resp
}

var string = '1116122137143151617181920849510'
var string2 = '578910'
console.log(findNumber(5, 10, string2));