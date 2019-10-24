function mutation(arr) {
    arr= arr.map(s => s.toLowerCase().split(''));
    for(let i=0; i<arr[1].length; i++){
        if(arr[0].indexOf(arr[1][i]) === -1){
            return false
        }
    }
    return true
}
  
console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["Alien", "line"]));