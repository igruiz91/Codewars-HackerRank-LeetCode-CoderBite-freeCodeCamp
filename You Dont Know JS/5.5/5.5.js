function coolNodule() {
    var something = "cool"
    var another = [1,2,3];

    const doSomething = () => console.log(something);
    const doAnother = () => console.log(another.join(' ! '));

    return {
        doSomething,
        doAnother
    }
}

var foo = coolNodule();

foo.doSomething()
foo.doAnother()