function movie(card, ticket, perc) {
    let planB=card+ticket*perc, cont=1;
    while(Math.ceil(planB)>ticket*cont){
        cont++
        planB+=ticket*Math.pow(perc,cont)*perc
    }
    return cont+1
};

const movieUp = (card, ticket, perc) =>{
    var costB = card, costA=0, n=0;
    while(Math.ceil(costB)>= costA){
        costA +=ticket;
        costB += ticket * Math.pow(perc, ++n)
    }
    return n
}

console.log(movie(500, 15, 0.9));
console.log(movieUp(500, 15, 0.9));