function sabb(x, val, happ){
    let letters = ['a','b','c','i','l','s','t']
    x = x.toLowerCase().split('').reduce((a,b)=> (letters.includes(b)) ? a+1 : a+0, 0)
    return x+val+happ >22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.' 
}

const sabbUp = (x,val,happ) => x.match(/[abcilst]/g).length+val+happ >22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.'


console.log(sabb('Please calm down', 5, 5));
console.log(sabbUp('Please calm down', 5, 35));