var whatTimeIsIt = function(angle) {
    let angle1 = Math.floor(angle/30)
    let angle2 = (angle%30)/6
    console.log(angle2);
    return `${angle1 < 10 ? "0"+angle1 : angle1}:${angle2 <10 ? "0"+angle2 : angle2}`;
}

console.log(whatTimeIsIt(40));