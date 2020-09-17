function londonCityHacker(journey) {
    let anterior = false;
    let costo=0
    for(let i=0; i<journey.length; i++){
        if(typeof journey[i] == 'number' && anterior==true){
            costo+=0
            anterior=false
        }else if( typeof journey[i] == 'string'){
            costo+=2.4
        }else{
            costo+=1.5
            anterior=true
        }
    }
    return `£${costo.toFixed(2)}`
}

function londonCityHacker2(journey) {
    let sum = 0;
    
    for (let i = 0; i < journey.length; i++) {
      if (typeof journey[i] === "string") sum += 2.40;
      else {
        sum += 1.50;
        if (typeof journey[i + 1] === "number") i++;
      }  
    }
    
    return `£${sum.toFixed(2)}`;
}

function londonCityHacker(journey) { console.log(journey)
    let busFare = 0;
    return `£${ journey.map( (v,i) => isNaN(v) ? ( busFare=0, 2.4 ) : busFare=1.5-busFare ).reduce( (v,w) => v+w , 0 ).toFixed(2) }`;
}


console.log(londonCityHacker([1,2,3, 56]))