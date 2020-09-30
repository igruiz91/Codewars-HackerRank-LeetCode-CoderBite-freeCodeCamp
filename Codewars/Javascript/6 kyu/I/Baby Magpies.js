var child = function(bird1, bird2) {
    if(bird2 === bird1) return false;
    return getDiferences(bird1, bird2)<3;
}
  
var grandchild = function(bird1, bird2) {
    if(bird1.length == 1 && bird2.length ==1 && bird2 != bird1) return false;
    return getDiferences(bird1,bird2)<=4
}

const getDiferences =(bird1, bird2) =>{
    let dif=0;
    for(let i=0; i<bird1.length; i++)
        if(bird1.slice(i, i+1) !== bird2.slice(i, i+1)) dif++
    return dif
}
  