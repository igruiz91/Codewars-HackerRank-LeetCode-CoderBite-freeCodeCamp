var humanYearsCatYearsDogYears2 = function(humanYears) {
    let human=0,dog=0,cat=0;
    for(let i=0;i<humanYears; i++){
        i==1 ?(human++,dog+=15,cat+=15) : i==2 ? (human++, dog+=9,cat+=9) : (human++, dog+=5, cat+=4)
    }
    return [human,cat,dog];
}

function humanYearsCatYearsDogYears(y){
    let cat=15+9+(y-2)*4;
    let dog=15+9+(y-2)*5;
    y==1 ? (dog=15, cat=dog) : y==2?(dog=cat, cat=24): null
    return [y,cat,dog]
}

var humanYearsCatYearsDogYears3 = function(y) {
    if (y == 1) return [1, 15, 15]
    if (y == 2) return [2, 24, 24]
    return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
}

  