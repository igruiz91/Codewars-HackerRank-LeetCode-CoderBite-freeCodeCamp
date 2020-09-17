function formatDuration (seconds) {
    let cursor=4, cifra = 0, aTxt = '';
    let medidas = [1, 60, 3600, 86400, 31536000], 
        tiempo = ['year', 'day', 'hour', 'minute', 'second'], 
        resp = [0,0,0,0,0],
        formato= [];
    while(seconds>=60){
        if(seconds>=medidas[cursor]){
            resp[cifra]++
            seconds-=medidas[cursor]
        }else {
            cursor--; 
            cifra++ 
        }    
    }
    resp[4]=seconds;
    resp.map((n,i) => n==0 ? null: n==1 ? formato.push(tiempo[i]) : formato.push(tiempo[i]+'s'))
    resp = resp.filter(Number)
    let restantes = resp.length;
    for(let i =0 ; i<resp.length; i++){
        if(restantes==1){
            aTxt+=`${resp[i]} ${formato[i]}`
            restantes--;
        }else if(restantes == 2){
            aTxt+= `${resp[i]} ${formato[i]} and `;
            restantes--;
        }else{
            aTxt+=`${resp[i]} ${formato[i]}, `
            restantes--
        }
    }
    return aTxt =="" ? 'now' : aTxt
}

function formatDurationUp(sec){
    if(sec==0) return 'now'
    return[
        {name:'year', duration: 31536000 },
        {name:'day', duration: 86400},
        {name: 'hour', duration: 3600},
        {name: 'minute', duration: 60},
        {name: 'second', duration: 1},
    ].map(unit => {
        if(sec<unit.duration) return;
        const value = Math.floor(sec/unit.duration)
        sec-=value*unit.duration;
        return value && `${value} ${unit.name + (value>1 ? 's' : '')}`
    }).filter(e => e).reduce((prev, curr, i, arr) => `${prev}${(i != arr.length-1 ? ', ' : ' and ')}${curr}`)
}
console.log(formatDuration(15731080));
console.log(formatDurationUp(15731080));
  