function clockDegree(s){
    s=s.split(':').map(n=>+n)
    if(s[0]>23 ||s[0]<0 || s[1]>59 ||s[1]<0 || isNaN(s[0]) || isNaN(s[1])) return "Check your time !"
    else if(s[0]>12) s[0]=s[0]-12
    s[0]= s[0] == 0 ? 360 : Number(s[0])*30
    s[1]= s[1] == 0 ? 360 : Number(s[1])*6
    return s.join(':')
}

const clockDegreeUp = s =>{
    let [h,m] = s.split(':').map(Number);
    return /^([01]\d|2[0-3]):([0-5]\d)$/.test(s) ? (h%12*30||"360")+":"+(m*6||"360") : "Check your time !"
}

console.log(clockDegree("14:01"));
console.log(clockDegreeUp("14:01"));