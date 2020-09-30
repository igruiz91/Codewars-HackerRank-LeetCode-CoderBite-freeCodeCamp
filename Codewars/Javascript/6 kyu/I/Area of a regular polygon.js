function areaOfRegularPolygon(s) {
    s = s.split(' ');
    if (s.length != 6) return 'Invalid input';
    return `${s[3] ** 2}`
}
/*
A= (P*a)/2
P= 10*1.73/2


a= 2^2=1^2+c^2
a= sqrt(4-1)=c 
*/

var s = '4 sides of 5 cm each';
console.log(areaOfRegularPolygon(s));