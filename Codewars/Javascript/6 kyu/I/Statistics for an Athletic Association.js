function stat(strg) {
    strg= strg.split(', ');
    let len = Math.floor(strg.length/2);
    let stats = strg.map(t => t=convertTime(t)).sort()
    let range = Math.max(...stats)-Math.min(...stats)
    let average = Math.floor(stats.reduce((a,b) => a+b)/stats.length)
    let median=0;
    (strg.length%2 !=0 ) ? median = stats[len] : median=(stats[len-1]+stats[len])/2
    return `Range: ${formatTime(range)} Average: ${formatTime(average)} Median: ${formatTime(median)}`
}

const convertTime = t => {
    t = t.split('|').map(n => +n)
    return t[0]*60*60+t[1]*60+t[2]
}
const formatTime = t => {
    let hours = '0'+ Math.floor(t/3600);
    let mins = '0'+ Math.floor((t%3600)/60)
    let sec = '0'+ t %60
    return hours.slice(-2) +'|' + mins.slice(-2)+ '|'+ sec.slice(-2)
}

let times = '02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41';
console.log(stat(times));