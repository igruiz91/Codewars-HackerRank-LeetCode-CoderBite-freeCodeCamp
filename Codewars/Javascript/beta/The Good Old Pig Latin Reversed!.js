const firstLetter = str => str.slice(0,1)

function reversedPig(str){
    str = str.toLowerCase()
    let reg = new RegExp('^[aeiou]', 'i')
    if(reg.test(str)) return firstLetter(str).toUpperCase() + str.slice(1) + 'way'
    else{
        str = str.slice(1)+firstLetter(str)
        return firstLetter(str).toUpperCase()+str.slice(1)+'ay'
    }
}

function reversedPigTrue(str){
    str = str.toLowerCase()
    let resp = []
    let reg= new RegExp('way$')
    let forAy = str => str.slice(0,-2)
    if(reg.test(str)){
        let wayFound = str.slice(0,-3)
        resp[0] = firstLetter(wayFound).toUpperCase()+str.slice(1)
        let ay = forAy(str)
        resp[1] = ay.slice(-1).toUpperCase()+ay.slice(0,-1)
    } else{
        let ay = forAy(str)
        resp[0] = ay.slice(-1).toUpperCase()+ay.slice(0,-1)
        let second = ay.slice(-2)+ay.slice(0,-2)
        resp[1] = firstLetter(second).toUpperCase()+second.slice(1)
    }
    return resp

}

console.log(reversedPigTrue('Orrysay'));