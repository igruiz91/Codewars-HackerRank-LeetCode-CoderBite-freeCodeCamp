function multiplicationTable(row,col){
    for(var i=1, resp =[]; i<=row; i++)
        resp.push(Array.from(Array(col), (_,index)=> (index+1)*i))
    return resp
}

console.log(multiplicationTable(3,3));