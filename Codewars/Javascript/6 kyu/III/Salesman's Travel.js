function travel(r, zipcode) {
    let codes =[]
    r= r.split(",").filter(e=> e.includes(zipcode))
    if(r.length==0 || zipcode=="" ||zipcode.length!=8) return zipcode+':/'
    r =r.map((arr,i) => {
        codes.push(arr.match(/^\d+/)[0])
        arr = arr.replace(/^\d+/, "")
        return arr.trim().slice(0,-9)}).join(',')
    return `${zipcode}:${r}/${codes.join(',')}`
}

function travelUp(r, zipcode) {
    re = RegExp('(\\d+)\\s+(.+)\\s+'+zipcode+'$')
    streets = r.split(',').map(x => x.match(re)).filter(x => x)
    return zipcode+":"+streets.map(x => x[2])+'/'+streets.map(x=> x[1])
}


let r = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432"

let caso = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432,54 Holy Grail Street Niagara Town ZP 32908,3200 Main Rd. Bern AE 56210,1 Gordon St. Atlanta RE 13000,10 Pussy Cat Rd. Chicago EX 34342,10 Gordon St. Atlanta RE 13000,58 Gordon Road Atlanta RE 13000,22 Tokyo Av. Tedmondville SW 43098,674 Paris bd. Abbeville AA 45521,10 Surta Alley Goodtown GG 30654,45 Holy Grail Al. Niagara Town ZP 32908,320 Main Al. Bern AE 56210,14 Gordon Park Atlanta RE 13000,100 Pussy Cat Rd. Chicago EX 34342,2 Gordon St. Atlanta RE 13000,5 Gordon Road Atlanta RE 13000,2200 Tokyo Av. Tedmondville SW 43098,67 Paris St. Abbeville AA 45521,11 Surta Avenue Goodtown GG 30654,45 Holy Grail Al. Niagara Town ZP 32918,320 Main Al. Bern AE 56215,14 Gordon Park Atlanta RE 13200,100 Pussy Cat Rd. Chicago EX 34345,2 Gordon St. Atlanta RE 13222,5 Gordon Road Atlanta RE 13001,2200 Tokyo Av. Tedmondville SW 43198,67 Paris St. Abbeville AA 45522,11 Surta Avenue Goodville GG 30655,2222 Tokyo Av. Tedmondville SW 43198,670 Paris St. Abbeville AA 45522,114 Surta Avenue Goodville GG 30655,2 Holy Grail Street Niagara Town ZP 32908,3 Main Rd. Bern AE 56210,77 Gordon St. Atlanta RE 13000"

console.log(travel(caso, "OH 430"));
console.log(travelUp(r, "OH 43071"));