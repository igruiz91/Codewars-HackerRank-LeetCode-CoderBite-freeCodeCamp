function greet_abe() {
    var name = 'Abe';
    var greet = function() {
        return "Hello, " + name + '!';
    };

    return greet()
}

function greet_ben() {
    var name = 'Ben';
    var greet = function() {
        return "Hello, " + name + '!';
    };

    return greet()
}
var name;
function greet_abe_up() {
    name='Abe'
    return "Hello "+ name
}

function greet_ben_up() {
    name='Ben'
    return "Hello "+ name
}

console.log(greet_abe_up('abe'));
console.log(greet_ben_up('ben'));