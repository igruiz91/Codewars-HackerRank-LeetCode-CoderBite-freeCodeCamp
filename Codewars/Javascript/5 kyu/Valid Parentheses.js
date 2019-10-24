function validParentheses2(parens){
    let contador=0
    let arr = parens.split('')
    if(arr[0] == ')') return false
    for(let i= 0; i<arr.length; i++){
        if(arr[i]=='('){
            contador++
        }
        if(arr[i] == ')'){
            break;
        }
    }
    
    console.log(arr.splice(4));
    let verificacion = consumirArreglo(arr.splice(0,contador*2))

    
    return verificacion==true ? validParentheses(arr.splice(contador*2).join('')) : true  
}

function consumirArreglo(arr){

    if (arr.length === 0) return true
    return (arr.shift()=='(' && arr.pop()==')') ? consumirArreglo(arr) : false
    
}

function validParentheses3(parens) {
    if(parens.length %2 != 0){
        return false
    }
    parens = parens.split('()').join('');
    if(parens.length == 0){
        return true
    }
    console.log(parens.length);
    if(parens.length %2 == 0){
        validParentheses(parens);
    }
    return false
}

// I had something that was smaller and looked cooler, but
// this is how you'd want to write an actual parser.
function validParentheses4(string){
    var tokenizer = /[()]/g, // ignores characters in between; parentheses are
        count = 0,           // pretty useless if they're not grouping *something*
        token;
    while(token = tokenizer.exec(string), token !== null){
       if(token == "(") {
          count++;
       } else if(token == ")") {
          count--;
          if(count < 0) {
             return false;
          }
       }
    }
    return count == 0;
 }

function validParentheses(parens) {
    if(parens.length%2 !=0) return false;
    let str=parens.slice();
    for(let i=0; i<=str.length; i++){
        str=str.replace(/\(\)/g, '');
    }
    return str.replace(/\(\)/g, '')===''
}

console.log(validParentheses('(())((()())())'));