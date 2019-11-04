function inArray(array1,array2){
    let resp = []
    array1 = array1.sort().filter(String);
    console.log(array1);
    for(let i=0; i<array1.length; i++){
        var reg = new RegExp(array1[i], 'g')
        for(let j=0; j<array2.length; j++){
            if(reg.test(array2[j])){
                resp.push(array1[i])
                break
            }
        }
    }
    return resp.filter(String)
}

//TODO analizar esta 
function inArrayUp(arr1, arr2) {
  return arr1.filter(e => {
    return arr2.some(w => w.indexOf(e)> -1)
  })
}

function inArrayUp2(a1,a2) {
  
}


a1 = ["xyz", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
console.log(inArrayUp(a1, a2));