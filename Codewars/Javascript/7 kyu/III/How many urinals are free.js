function getFreeUrinals(urinals){
    if(/11/g.test(urinals)) return -1
    for(var i=0, count = 0; i<urinals.length; i++)
        if(urinals[i]=='0' && (urinals[i-1]=='0' || urinals[i-1]==undefined) && (urinals[i+1]=='0' || urinals[i+1]==undefined)) {
            count++
            urinals = urinals.slice(0,i)+'1'+urinals.slice(i+1)
        }
        else continue
    console.log(urinals);
    return count
}

const getFreeUrinals = str =>{
    if(str.includes('11')) return -1
    else return(urinals.match(/(^|0)0(?!1)/g)|| []).length
}



console.log(getFreeUrinals('101100001'));