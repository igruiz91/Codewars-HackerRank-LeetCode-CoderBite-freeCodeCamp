function maxDiff(list) {
    if (list.length == 0) return 0
    list = list.sort((a, b) => a - b)
    return list[list.length - 1] - list[0]
};

function maxDiff2(list) {
    if (!list.length) return 0;
    return Math.max(...list) - Math.min(...list);
}

function maxDiff3(list) {
    return list.length > 1 ? Math.max(...list) - Math.min(...list) : 0
}

console.log(maxDiff([0, 1, 2, 3, 4, 5, 6]));