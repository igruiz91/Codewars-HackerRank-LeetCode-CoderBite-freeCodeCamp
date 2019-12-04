function partlist(arr) {
    let resp = [] 
    for(let i =1; i<arr.length; i++)
        resp.push([arr.slice(0,i).join(' '), arr.slice(i).join(' ')]) 
    return resp
}

console.log(partlist(["az", "toto", "picaro", "zone", "kiwi"]));