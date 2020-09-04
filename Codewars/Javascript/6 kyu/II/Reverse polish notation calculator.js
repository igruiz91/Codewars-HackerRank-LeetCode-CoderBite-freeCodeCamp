function calc(expr) {
    const calc = (arr, op) =>{
        let operation = arr.slice(-2)          
        arr = arr.slice(0,-2)
        operation = eval(`${operation[0]}${op}${operation[1]}`)
        arr.push(operation)
        return arr
    }
    let nums = []
    expr = expr.split(' ')
    for(let i = 0; i<expr.length; i++){
        switch(expr[i]){
            case '+':
                nums = calc(nums, '+')
                break;
            case '-':
                nums = calc(nums, '-')
                break;
            case '*':
                nums = calc(nums, '*')
                break;
            case '/':
                nums = calc(nums, '/')
                break;
            default:
                nums.push(+expr[i])
        }
    }
    return nums[0];
}

function calcUp(expr){
    let result = [];
    let e = expr.split(/\s+/);
    for(let i =0; i<e.length; i++){
        switch(e[i]){
            case '+': result.push(result.pop() + result.pop()); break;
            case '-': result.push(-result.pop() + result.pop()); break;
            case '*': result.push(result.pop() * result.pop()); break;
            case '/': result.push(result.pop() / result.pop()); break;
            default: result.push(parseFloat(e[i]))
        }
    }
    return result.pop() || 0;
}


console.log(calc('5 1 2 + 4 * + 3 -'));
console.log(calcUp('5 1 2 + 4 * + 3 -'));