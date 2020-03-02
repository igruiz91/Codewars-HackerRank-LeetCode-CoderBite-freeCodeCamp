circleIntersection=(a,b,r)=>{
    let d = Math.sqrt((a[1]-a[0])**2+(b[1]-b[0])**2)
    let partA = r*r*Math.acos((d*d)/(2*d*r))
    let partB = 0.5*Math.sqrt((-d+2*r)*(d*d)*(d+r*2))
    return Math.floor(partA*2-partB)
}



console.log(circleIntersection([0, 0],[0, 10],10))