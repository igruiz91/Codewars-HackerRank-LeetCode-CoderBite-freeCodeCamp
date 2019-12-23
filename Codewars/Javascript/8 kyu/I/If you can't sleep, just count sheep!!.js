var countSheep = function (num) {
    for (var i = 1, resp = ''; i <= num; i++)
        resp += `${i} sheep...`
    return resp
}

console.log(countSheep(2));