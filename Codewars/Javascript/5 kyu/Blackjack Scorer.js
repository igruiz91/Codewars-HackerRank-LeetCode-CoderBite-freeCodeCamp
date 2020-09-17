function scoreHand(cards){
    cards = cards.sort();
    let as = [];
    let values = {'A':11, 'K':10, 'Q':10, 'J':10 , '10':10, '9':9, '8':8, '7':7, '6':6, '5':5, '4':4, '3':3, '2':2}
    let sum=0;
    for(let i=0; i<cards.length; i++){
        if(cards[i]=='A') as.push('A')
        else{
            sum+=values[cards[i]]
        }
    }
    while(as.length>0){
        if(sum>10){
            sum+=1;
            as.pop();
        }
        else if(sum<=10 && as.length==1) {
            sum+=10;
            as.pop();
        }else if(sum==10 && as.length==2){
            sum+=2
            break
        }else{
            sum+=10+as.length-1
            break;
        }
    }
    return sum    
}

const suma= (arr, obj) => arr.reduce((a,c) =>a + obj[c], 0)


function scoreHandUp(cards) {
    var aces = 0;
    var score = cards.reduce((s,c)=> {
        if(c ==='A'){
            aces++;
            return s+=11
        }
        return /\d/.test(c) ? s+Number(c) : s+10
    },0)
    while(aces-- && score>21)score-=10
    return score
}

console.log(scoreHandUp(["A", "10", "A"] ));
