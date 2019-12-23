/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

*/


var uniqueInOrder = function (iterable) {
    return [...iterable].filter((e, i, self) => self[i] != self[i + 1])
}

function uniqueInOrderUp(iterable) {
    let resp = [], last = '`';
    for (let i = 0; i < iterable.length; i++)
        if (iterable[i] != last) resp.push(last = iterable[i])
    return resp
}

function uniqueInOrderUp2(iterable) {
    return [...iterable].filter((e, i) => e != iterable[i + 1])
}

console.log(uniqueInOrderUp2('AAAABBBCCDAABBB'));