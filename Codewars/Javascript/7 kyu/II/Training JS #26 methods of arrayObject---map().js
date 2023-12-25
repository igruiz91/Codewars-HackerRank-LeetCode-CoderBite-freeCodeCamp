function isolateIt(arr) {
  return [...arr].map(str => {
    let len = str.length
    if(len%2!=0) return str.slice(0, len/2)+'|'+str.slice(len/2+1)
    return str.slice(0, len / 2 ) + "|" + str.slice(len / 2);
  })
}

console.log(isolateIt(["abccd","efgh"]))
