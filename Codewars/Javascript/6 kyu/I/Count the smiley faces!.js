function countSmileys(arr) {
    arr = arr.join('')
    let reg = new RegExp(/(:|;)(-|~)?(\)|D)/g)
    return arr.match(reg).length  
}

const countSmileysUp = arr => arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length

//console.log(reg.test(':)'));

let f= [':D',':~)',';~D',':)']
console.log(countSmileysUp(f));
