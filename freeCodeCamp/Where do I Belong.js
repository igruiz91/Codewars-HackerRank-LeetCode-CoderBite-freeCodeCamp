function getIndexToIns(arr, num) {
    arr = arr.sort((a,b)=> a-b)
    let pos = arr.filter(n => n>=num)[0]
    let indx = arr.indexOf(pos);
    return indx==-1 ? arr.length : indx
}
  
console.log(getIndexToIns([2, 5, 10], 15));