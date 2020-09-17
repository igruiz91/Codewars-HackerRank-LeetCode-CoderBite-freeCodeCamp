function converter (mpg) {
    let mile = 1.609344, imperialGalon = 4.54609188
    console.log((mile/imperialGalon)*100)
    let conversion = (mile/imperialGalon)*mpg
    return Math.round(conversion*100)/100
}

const converterUp = mpg => (mpg*35.40060435382138).toFixed(2)

console.log(converter(30));