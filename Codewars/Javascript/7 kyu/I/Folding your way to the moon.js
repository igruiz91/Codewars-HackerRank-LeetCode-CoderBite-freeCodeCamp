function foldTo(distance) {
    let fold =0.0001, count=0;
    while(fold<distance){
        fold*=2;
        count++
    } 
    return count
}

console.log(foldTo(384000000));