const compare = (a, b) => {
    if (a[0] < b[0]) {
        return -1;
    } else if (a[0] > b[0]) {
        return 1;
    } else {
        return 0;
    }
}

let test = '2:eeeee';
console.log(test);
test = test.split('').sort(compare)
test = test.join('');
console.log(test);