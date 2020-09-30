var countDeafRats = function (town) {
    let resp = 0, pipper = false;
    let arr = town.match(/\~O|O\~|P/g);
    for (let i = 0; i < arr.length; i++) {
        if (pipper && arr[i] == '~O') resp++;
        else if (!pipper && arr[i] == 'O~') resp++;
        else if (pipper == false && arr[i] == 'P') pipper = true
    }
    return resp
}

console.log(countDeafRats("~O~O~O~O O~ P"));
