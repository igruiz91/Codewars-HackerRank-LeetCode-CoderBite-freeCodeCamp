Object.prototype.hash = function (string) {
  try{
    return eval(`this.${string}`)
  }catch(e){ 
    return undefined
  }
};
Object.prototype.hashUp2 = function (string) {
  return string.split('.').reduce((res = this, e) => res=res[e] ,this)
}


Object.prototype.hashUp = function (string) {
  let obj=this
  string.split('.').forEach(e => {
    try{
      obj = obj[e]
    }catch(e){ obj= undefined}
  }
  );
  return obj
}



var obj = {
  person: {
    name: "joe",
    history: {
      hometown: "bratislava",
      bio: {
        funFact: "I like fishing.",
      },
    },
  },
};

console.log(obj.hash("person.name"));
console.log(obj.hashUp("person.name"));
console.log(obj.hashUp2("person.name"));
