class Cuboid {
    constructor(length, width, height){
        this._length=length;
        this._width=width;
        this._height=height;
    }
    get volume(){
        return(this.length*this.width*this.height)
    } 

    get surfaceArea(){
        return 2*(this.length*this.width+this.length*this.height+this.height*this.width)
    }
}

class Cube extends Cuboid {
    constructor(length, width=length, height=length){
        super(length, width, height);
    }
    get volume(){
        return this.length**3
    }

    get surfaceArea(){
        return 6*this.length**2
    }
}

let a = new Cuboid(1,2,3)
let b= new Cube(1)


console.log(a.surfaceArea);
console.log(b.width);