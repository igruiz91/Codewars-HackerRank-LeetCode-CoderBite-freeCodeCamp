function findMissingNumber(sequence){
    if(sequence == "") return 0;
    let newSequence = sequence.split(' ').map(n => +n).sort((a,b)=>a-b)
    if(newSequence.length == sequence.length || newSequence[0] !=1) return 1
    return ((1+(newSequence.length+1))*(newSequence.length+1)/2)-newSequence.reduce((a,b)=>a+b, 0);
}

function findMissingNumber(sequence){
    if(sequence === "") return 0;
    else if(!/^(\d+ )+\d+$/gi.test(sequence)) return 1;
    else{
        var arr = sequence.split(' ').map(x => +x);
        var max = Math.max(...arr);
        for(let i=1; i<max; i++)
            if(arr.find(x => x == i) == undefined) return i
        return 0
    }
}

console.log(findMissingNumber("1 3"));