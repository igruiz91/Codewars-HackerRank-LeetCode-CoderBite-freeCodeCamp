function foo() {
    console.log(a);
}

function bar() {
    var a=3;
    foo(a);
}

var a=2

bar()