function sortTheInnerContent(words){
  return words.split(' ').map(w => w[0]+w.slice(1,-1).split('').sort().reverse().join('')+w.slice(-1)).join(' ');
}

const sortTheInnerContentUp = words => (
    words.replace(/(\w)(\w{2,})(\w)/g , (_,a,m,z)=> a+m.split('').sort().reverse().join('')+z)
)

console.log(sortTheInnerContentUp('wait for me'));