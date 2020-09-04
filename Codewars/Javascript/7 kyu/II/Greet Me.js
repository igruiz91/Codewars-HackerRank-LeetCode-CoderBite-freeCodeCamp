var greet = function(name) {
    return `Hello ${name[0].toUpperCase()+name.slice(1).toLowerCase()}!`
};


String.prototype.capitalize = function(){
   return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase()
}

var greetUp = function(name) {
    return 'Hello '+ name.capitalize()+'!';
}

console.log(greet('ssrra'));
console.log(greetUp('israel'));