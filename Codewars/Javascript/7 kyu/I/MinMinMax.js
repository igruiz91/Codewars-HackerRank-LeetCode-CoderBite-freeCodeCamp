function minMinMax(array) {
    array = array.sort((a,b)=> a-b);
    let min = array[0];
    let max = array[array.length-1];
    let minimumAbsent=0;
    for(let i=min+1; i<max; i++){
        if(array.indexOf(i)==-1){
            minimumAbsent = i;
            break;
        }
    } 
    return [min, minimumAbsent, max]
}

minMinMaxUp =(array) => {
    const len = Math.min(...array)
    b = len
    while(array.includes(b) == true){b++}
    return [len, b, Math.max(...array)]
}

console.log(minMinMaxUp([-1, 4, 5, -23, 24]));