function howMuchILoveYou(nbPetals) {
    let resp=[]
    let arr=['I love you','a little','a lot','passionately','madly','not at all']
    for(let i=0; i<nbPetals; i++){
        resp.push(arr[i])
        arr.push(arr[i])
    }
    return resp[resp.length-1]
}

const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
]

function howMuchILoveYouUp(n) {
     return phrases[(n - 1) % phrases.length] 
}

console.log(howMuchILoveYou(7));