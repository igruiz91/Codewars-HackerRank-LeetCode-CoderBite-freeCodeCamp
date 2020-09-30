function driver(data) {
    let date = dates(data[3])
    if (data[4] === 'F') {
        date[1] = date[1].split('')
        date[1][0] = Number(date[1][0]) + 5
        date[1] = date[1].join('')
    }
    return `${lastName(data[2])}${date.join('')}${initials(data[0], data[1])}9AA`
}
const lastName = (str) => {
    let lastName = str.toUpperCase();
    return (lastName.length < 5) ? lastName += '9'.repeat(5 - lastName.length) : lastName.slice(0, 5)
}
const initials = (fn, mn) => {
    return (mn == '') ? fn.slice(0, 1) + '9' : fn.slice(0, 1) + mn.slice(0, 1)
}
const dates = (str) => {
    str = str.split('-')
    let months = { 'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04', 'May': '05', 'Jun': '06', 'Jul': '07', 'Aug': '08', 'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12' }
    let dec = str[2].slice(2, 3);
    let y = str[2].slice(-1)
    let m = months[str[1].slice(0, 3)]
    let d = str[0]
    return [dec, m, d, y]
}

function driverUp(data) {
    var name = (data[2].slice(0, 5).toUpperCase() + '99999').slice(0, 5);
    var dob = new Date(data[3])
    var dec = (dob.getYear().toString().length == 2 ? dob.getYear().toString()[0] : dob.getYear().toString()[1]);
    var month = (data[4] == 'M' ? ('0' + (dob.getMonth() + 1).toString()).slice(-2) : dob.getMonth() + 51)
    var day = ('0' + dob.getDate().toString()).slice(-1)
    var year = dob.getYear().toString().slice(-1)
    var inits = data[0][0] + (data[1] == "" ? '0' : data[1][0])
    return name + dec + month + day + year + inits + '9AA'
}


//console.log(dates('01-Jan-2000'));

//console.log(lastName('lee'));

//let a = ['0', '01', '01', '0'];

data = ["Andrew", "Robert", "Lee", "02-September-1981", "M"]
//console.log(driverUp(data));
//LEE99 8 09 02 1 AR9AA
//LEE998 09 3 1AR9AA
console.log(driverUp(data));