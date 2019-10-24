function chunkArrayInGroups(arr, size) {
    let resp=[]
    while(arr.length != 0){
        resp.push(arr.slice(0,size))
        arr=arr.slice(size)
    }
    return resp;
}
  
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));