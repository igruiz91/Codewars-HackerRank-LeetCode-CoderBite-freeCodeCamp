function covfefe(str){
    let s = str.replace(/coverage/g, "covfefe")
    return /covfefe/.test(s) ? s :  s+" covfefe"
}

console.log(covfefe('coverage'));