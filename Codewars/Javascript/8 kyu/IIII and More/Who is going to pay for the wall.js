function whoIsPaying(name){
    let cut = name.slice(0,2)
    return cut == name ? [name] : [name, cut]
}

console.log(whoIsPaying('Melania'));