Array.prototype.sameStructureAs = function (other) {
    return simplification(this)==simplification(other)
};

const simplification = arr=> JSON.stringify(arr).replace(/[0-9]|\"\[\"|\"\]\"/g,"*");


Array.prototype.sameStructureAsUp = function (other) {
    if(!Array.isArray(other) ||  this.length !=other.length) return false;
    for(var i=0; i<this.length; i++){
        if(Array.isArray(this[i])){
            if(!this[i].sameStructureAs(other[i])) return false
        }else if(Array.isArray(other[i])) return false
    }
    return true
}


Array.prototype.sameStructureAsUp = function (other) {
    return (this.length === other.length) ? this.every((e,i)=> Array.isArray(e) ? e.sameStructureAsUp(other[i]) : true) :false
}


//console.log(simplification([1,[1,1]]));

console.log([1,[,]].sameStructureAsUp([[,],1]))

