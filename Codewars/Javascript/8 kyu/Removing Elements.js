function removeEveryOther(arr){
    let resp=[] 
    arr.map((e,i) => {
        if(i%2==0) resp.push(e)
    })
    return resp
}

function removeEveryOtherUp(arr) {
    return arr.filter((_,i) => i%2==0)
}


console.log(removeEveryOtherUp([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));