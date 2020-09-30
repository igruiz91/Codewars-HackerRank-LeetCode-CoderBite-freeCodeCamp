function expresionMetods(params) {
    //Creating a Regular Expression
    let reg = new RegExp('abc');

    //Regular Expression Literal
    let reg1 = /abc/; //Here the flags are optional

    //Regular Expressions Methods
    //--RegExp.prototype.test()

    var regexHello = /hello/
    console.log(regexHello.test('Hello'));

    //--RegExp.prototype.exec()

    var str = 'hello word';
    var result = regexHello.exec(str)
    console.log(result);
}

function matchAnyDigit(str) {
    let regex = /\d+/g
    return regex.test(str)
}