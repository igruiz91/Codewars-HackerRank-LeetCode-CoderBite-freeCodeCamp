function bracesStatus(string){
    while(/\{(\.+|\w+)?\}|\[(\.+|\w+)?\]|\((\.+|\w+)?\)/g.test(string)){
        string = string.replace(/\{(\.+|\w+)?\}|\[(\.+|\w+)?\]|\((\.+|\w+)?\)/g, "")
        console.log(string)
    }
    return string.length== 0 ? true : /[^\w]/g.test(string) ? false : true 
}


const bracesStatusUp = s => {
    s = s.replace(/[^\(\)\[\]\{\}]/g, "")
    while(/\(\)|\[\]|\{\}/.test(s)){
        s = s.replace(/\(\)|\[\]|\{\}/g, "")
    }
    return s.length<1
}
console.log(bracesStatus('}'));
console.log(bracesStatusUp('({}{})'));