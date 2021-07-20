class Block {
  constructor(data) {
    this.width = data[0]
    this.length = data[1];
    this.length = data[2];
  }

  getWidth() {
    return this.width;
  }
  getLength() {
    return this.length;
  }
  getHeight() {
    return this.height;
  }
  getVolume(){
    return this.height * this.length * this.width;
  }
  getSurfaceArea(){
    return (
      2 *
      (this.height * this.length +
        this.height * this.width +
        this.length * this.width)
    );
  }
}  

class BlockUp {
  constructor(data){
    [this.w, this.h, this.l] = data
  }
  getWidth(){return this.w} 
  getLength(){return this.l;}
  getHeight(){return this.h;}
  getVolume(){
    let {w,h,l} = this
    return w*h*l
  }
  getSurfaceArea(){
    let { l, w, h } = this;
    return 2*(l*w+w*h+l*h)
  }

}


let a = new BlockUp([2,3,4]);
console.log(a.getWidth());
