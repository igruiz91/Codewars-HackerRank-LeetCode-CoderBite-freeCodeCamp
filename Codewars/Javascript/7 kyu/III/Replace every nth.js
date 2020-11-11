function replaceNth(text, n, oldValue, newValue) {
    if(n<0 || n>text.length) return text
    text = text.split('')
    for(let i=0, count=0; i<text.length; i++)
        if(text[i]==oldValue){
            count++
            if(count%n==0) text[i]=newValue
        }
    return text.join('')
}

const replaceNthUp = (t, n, x, y, i=1) => n<1 ? t : t.replace(RegExp(x, "g"), _ => i++%n ? x: y)

console.log(replaceNth("Luke cries: Noooooooooooooooo!", 6, 'o', 'i'));
console.log(replaceNthUp("Luke cries: Noooooooooooooooo!", 6, 'o', 'i'));
