function isValidCoordinates(coordinates){
    let c = coordinates.split(', ')
    if((c[0]<-90||c[0]>90) || (c[1]<-180||c[1]>180)) return false
    return  c.reduce((a,b) =>a+(/^(\-)?\d{1,}(\.\d+)?$/.test(b)),0)==2 ? true : false
}

console.log(isValidCoordinates("-23, 25"));


