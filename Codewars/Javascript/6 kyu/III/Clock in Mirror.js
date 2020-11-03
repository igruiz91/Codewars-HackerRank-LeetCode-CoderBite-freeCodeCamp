function WhatIsTheTime(timeInMirror){
    let time = timeInMirror.split(':')
    let mins = 60 - (+time[1])
    mins = mins == 60 ? "00" : mins
    let hours = 12 - (+time[0]);
    hours = hours == 0 ? "12" : hours == -1 ? "11" : hours>9 ? hours : "0"+hours
    return `${hours}:${mins}`
}

const WhatIsTheTimeUp = t =>{
    let [h, m] = t.split(':')
    h = (+m ? 11 : 12) - h%12 || 12
    m = (60 - m) % 60
    return [h, m].map(e => e>9 ? e : '0' + e).join(':')
}

console.log(WhatIsTheTime("06:35"));
console.log(WhatIsTheTimeUp("06:35"));