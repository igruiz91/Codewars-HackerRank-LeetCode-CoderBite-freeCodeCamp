function remove(s,n){
    let reg = new RegExp(/!/)
    for(let i=0; i<n; i++){
        s=s.replace(reg, '')
    }
    return s 
}