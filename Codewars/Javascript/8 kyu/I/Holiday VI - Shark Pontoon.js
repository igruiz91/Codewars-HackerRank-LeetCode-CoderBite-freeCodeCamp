function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if(dolphin) sharkSpeed/=2
    while(pontoonDistance>=0){
        pontoonDistance-=youSpeed
        sharkDistance-=sharkSpeed
        if(sharkDistance<=0) return "Shark Bait!";
        console.log(pontoonDistance, sharkDistance);  
    }
    return "Alive!"
}

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if(dolphin) sharkSpeed/=2;
    return pontoonDistance/youSpeed<sharkDistance/sharkSpeed ? "Shark Bait!" : "Alive!"
}

console.log(shark(24, 0, 4, 8, true));