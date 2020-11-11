function isSortedAndHow(array) {
    let arrJoin = array.join('')
    let ordenadoA = array.sort((a,b)=> a-b).join('');
    let ordenadoB = array.sort((a,b)=> b-a).join('');  
    return arrJoin==ordenadoA ? "yes, ascending" : arrJoin==ordenadoB ? "yes, descending" : "no"
}

function isSortedAndHow2(arr) {
    return arr.every((x,i)=> i==0 || arr[i]>=arr[i-1])? 'yes, ascending' : arr.every((x,i)=>i==0 || arr[i]<=arr[i-1]) ? 'yes, descending': 'no';
}

function isSortedAndHow3(arr) {
    let ascending = arr.filter((e,i,a)=> e > a[i+1]).length==0
    let descending = arr.filter((e,i,a)=> e< a[i+1]).length==0
    return ascending ? 'yes, ascending' : descending ? 'yes, descending' : 'no';
}

console.log(isSortedAndHow3([15, 7, 3, -8]));