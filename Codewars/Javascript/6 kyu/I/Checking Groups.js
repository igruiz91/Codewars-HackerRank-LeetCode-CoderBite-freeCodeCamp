function groupCheck(b) {
    let reg= new RegExp(/\(\)|\{\}|\[\]/g)
    while(reg.test(b))
        b = b.replace(reg, '');      
    return !b.length
}

function groupCheckUp(s) {
    var brackets = {"(": ")", "{": "}", "[": "]"}, stack = [];
    for(var c of s){
        if(c in brackets) stack.push(c);
        else if(brackets[stack[stack.length-1]]==c) stack.pop();
        else return false
    }
    return stack.length == 0
}



console.log(groupCheckUp('([]{[]}())'));