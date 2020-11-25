function alphanumeric(string){
    return /\w/g.test(string) && !/[\s_!]/.test(string)
}

const alphanumericUp = str => /^[a-z\d]+$/i.test(str)

console.log(alphanumeric('Pass W0rd'));
console.log(alphanumericUp('PassW0rd'));