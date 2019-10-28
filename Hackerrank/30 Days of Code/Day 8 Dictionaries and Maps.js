function processDataTry(input) {
    let dic = []
    let cant = Number(input[0])
    input = input.split('\n').slice(1)
    for (let i = 0; i < cant; i++) {
        let data = input[i].split(' ');
        dic.push([data[0], data[1]])
    }
    let search = input.slice(-cant)
    search.map((name) => {
        let find = ''
        for (i = 0; i < dic.length; i++) {
            if (dic[i][0] == name) {
                find = name + '=' + dic[i][1];
            }
        }
        find ? console.log(find) : console.log('Not found')
    })
}

function processData(input) {
    let tempArray = input.split('\n');
    let entriesLength = tempArray.splice(0, 1);
    let queries = tempArray.splice(entriesLength)
    for (let i = 0; i < entriesLength; i++) {
        tempArray[i] = tempArray[i].split(' ');
    }
    var phoneBookMap = new Map(tempArray);
    for (let i = 0; i < queries.length; i++) {
        if (phoneBookMap.has(queries[i])) {
            console.log(queries[i] + '=' + phoneBookMap.get(queries[i]));
        } else {
            console.log("Not found");
        }
    }
}

console.log(processData('3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry'));