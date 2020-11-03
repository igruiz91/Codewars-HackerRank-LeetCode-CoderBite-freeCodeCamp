function solution(string) {
    let resp=''
    for(let i=0; i<string.length; i++){
        let c= /[A-Z]/
        c.test(string[i])? resp+=' '+string[i] : resp+=string[i]
    }
    return resp 
}

function solutionUp(str) {
    return (str.replace(/([A-Z])/g , ' $1'));
}

console.log(solutionUp('camelCasing'));