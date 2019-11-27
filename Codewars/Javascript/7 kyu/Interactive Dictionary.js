class Dictionary {
    constructor() {
      this.dict={};
    }   
    newEntry(key, value) {
      this.dict[key] = value;
    } 
    look(key) {
      return this.dict[key] || `Can\'t find entry for ${key}`;
    }
}
let a = new Dictionary()
a.newEntry('Israel', 'A person')
console.log(a.look('Israel'));

