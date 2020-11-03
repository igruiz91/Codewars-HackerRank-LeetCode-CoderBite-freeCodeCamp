var whatTimeIsIt = function(angle) {
    let angle1 = Math.floor(angle/30)
    if(angle1 == 0) angle1 = 12;
    let angle2 = Math.floor((angle%30)*2)
    return `${angle1 < 10 ? "0"+angle1 : angle1}:${angle2 <10 ? "0"+angle2 : angle2}`;
}

const whatTimeIsItUp = angle =>{
    let h = ~~(angle/30)
    let m = ~~((angle%30)*2)
    return `${h==0 ? 12: h>9 ? h : '0'+h}:${m>9 ? m : '0'+m}`
}

console.log(whatTimeIsIt(40));
console.log(whatTimeIsItUp(40));