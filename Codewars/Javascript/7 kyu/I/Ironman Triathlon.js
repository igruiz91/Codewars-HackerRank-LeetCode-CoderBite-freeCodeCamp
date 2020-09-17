function iTri(s){
    if(s == 0) return 'Starting Line... Good Luck!';
    let dif = (140.6 -s).toFixed(2);
    if(dif<0) return "You're done!";
    if(dif<=10) return {'Run': 'Nearly there!'}
    return (s<2.4) ? {'Swim': `${dif} to go!`} : s<114.4 ? {'Bike' : `${dif} to go!`} : {'Run' : `${dif} to go!`}
}

//2.4-mile swim, a 112-mile bicycle ride and a marathon 26.2-mile

console.log(iTri(36));