function wave(w){
    let resp = []
    for(let i=0; i<w.length; i++){
        let word = w.split('')
        if(word[i] != ' '){
            word[i] = word[i].toUpperCase();
            resp.push(word.join(''))
        }   
    }
    return resp
}

var waveUp = w => [...w].map((a,i) => w.slice(0,i)+a.toUpperCase()+w.slice(i+1)).filter(a =>a != w)


console.log(waveUp('Two words,tWo words,twO words,two Words,two wOrds,two woRds,two worDs,two wordS'));