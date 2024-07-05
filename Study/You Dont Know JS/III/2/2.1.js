function baz() {
    // call-stack es: `baz`
    // así, nuestro sitio de llamada está en el ámbito global

    console.log( "baz" );
    bar(); // <-- call-site para `bar`
}

function bar() {
    // call-stack es: `baz` -> `bar`
    // así, nuestro sitio de llamada está en `baz`

    console.log( "bar" );
    foo(); // <-- call-site para `foo`
}

function foo() {
    // call-stack es: `baz` -> `bar` -> `foo`
    // asi, nuestro sitio de llamada esta en `bar`

    console.log( "foo" );
}

baz(); // <-- call-site para `baz`