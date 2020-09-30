function solution(str){
    final = []; 
    if(str.length%2){
        str = `${str}_`;
    }
    str = str.split('');
    for(let i=0; i<str.length-1; i++){
        final.push(str[i]+ str[i+1])
        i++
    }
    return final
   
}

function solution2(str) {
    return (str.length % 2 ? str + '_' : str).match(/../g);
}

function solution3(str){
    return (str + "_").match(/../g);
}

console.log(solution3('abcde'));