var calc = (expression) => {
    let values = [], ops =[];

    for(let i=0; i<expression.length; i++){
        if(expression[i] == ' '){
            continue;
        } 

        if(expression[i] >= '0' && expression[i]<= '9' ){
            let val = '';
            while (i<expression.length && expression[i]>='0' && expression[i]<='9') {
                val+=(expression[i++]);
                values.push(Number(val))
            }
           
        }else if(expression[i]=='('){
            console.log('entro aqui');
            ops.push(expression[i]);
        }else if(expression[i]==')'){
            console.log('entro aqui');
            while (ops[ops.length-1] != '(') {
                values.push(applyOp(ops.pop(), values.pop()));
                ops.pop();
            }
        }else if(expression[i] == '+' ||
                 expression[i] == '-' || 
                 expression[i] == '*' || 
                 expression[i] == '/'){
        console.log('entro aqui');
            while(!ops.length==0 && hasPrecedence(expression[i]), ops[ops.length-1]){
                values.push(applyOp(ops.pop(), values.pop(), values.pop()))
               ops.push(expression[i]);
            }
        }
        while(!ops.length == 0){
            values.push(applyOp(ops.pop(), values.pop(), values.pop()))
        }    
        return values.pop()
    }
};

const hasPrecedence = (op1, op2)=>{
    if(op2 =='(' || op2==')')
        return false;
    if((op1== '*' || op1=='/') && op2 =='+' || op2=='-')
        return false
    else return true
}

const applyOp = (op, b, a) => {
    switch (op) {
        case '+': return a+b;
        case '-': return a-b;
        case '*': return a*b;
        case '/':
            if(b==0){
                throw new Error
            }
            return a/b;
    }
    return 0
}


console.log(calc('1 +1'));