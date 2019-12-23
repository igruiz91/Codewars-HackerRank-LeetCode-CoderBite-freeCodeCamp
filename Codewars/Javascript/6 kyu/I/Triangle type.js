/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
function triangleType(a, b, c){
    const isTriangle = (a,b,c) => a+b<c ? false : a+c<b ? false : b+c<a ? false : true;
    if(!isTriangle(a,b,c)) return 0;

    const toAngle = n => Math.round(n*(180/Math.PI));

    let cR= Math.acos((a**2+b**2-c**2)/(2*a*b));
    let bR= Math.acos((a**2+c**2-b**2)/(2*a*c));
    let aR= Math.acos((b**2+c**2-a**2)/(2*b*c));
    let angles = [toAngle(aR), toAngle(bR), toAngle(cR)]
    return angles.includes(90) ? 2 : angles.every(n => n<90) ? 1 : 3
}






var a=7, b=12,c=8;
console.log(triangleType(a,b,c));