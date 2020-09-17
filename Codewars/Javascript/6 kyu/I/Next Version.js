function nextVersion(version){
    let v = version.split('.').map(Number);
    for(let i =v.length-1; i>=0; i--){
        if(v[i]+1 ===10 && i!=0) {
          v[i]=0
        }else{
            v[i]++
            break
        }
    }
    return v.join('.')
}

const nextVersionUp = v => {
    return /\.9$/.test(v) ? v.replace(/\.9(?=(\.9|$))/g, '.0').replace(/\d+(?=(\.0)+$)/, x=> +x+1) : v.replace(/\d+$/, x => +x+1)
}

console.log(nextVersion("1.2.3.4.5.6.7.9"));
console.log(nextVersionUp("1.2.3.4.5.6.7.9"));