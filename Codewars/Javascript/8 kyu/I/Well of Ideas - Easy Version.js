function well(x) {
    let ideas = x.filter(i => i == 'good').length
    return ideas == 0 ? 'Fail!' : ideas <= 2 ? 'Publish!' : 'I smell a series!'
}

function well(x) {
    const count = x.reduce((s, v) => s + (v == 'good'), 0);
    return count ? count > 2 ? 'I smell a series!' : 'Publish!' : 'Fail!';
}

function well(x) {
    var good = 0

    for (var i = 0; i < x.length; ++i)
        if (x[i] == 'good' && ++good > 2)
            return 'I smell a series!'

    return good ? 'Publish!' : 'Fail!'
}

console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));