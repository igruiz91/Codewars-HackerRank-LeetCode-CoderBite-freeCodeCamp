const toRawType = value =>{
    let _toString = Object.prototype.toString;
    let str = _toString.call(value)
    return str.slice(8,-1)//el slice es un detalle pare recortar el [object type]
}

console.log(toRawType(12));
console.log(toRawType(null));
console.log(toRawType(/a/));