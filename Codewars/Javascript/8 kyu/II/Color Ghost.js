class Ghost{
    constructor(){
        this.colors = ['white', 'yellow', 'purple', 'red']     
    }
    get color(){
        let n = Math.trunc(Math.random() * this.colors.length)
        return this.colors[n]
    }     
}
let a = new Ghost()

var GhostUp = function() {
    this.color =["white","yellow","purple","red"][Math.floor(Math.random()*4)] 
}

console.log(a.color);