function generateHashtag(str) {
    str = str.trim();
    if (str.length == 0) return false
    let resp = `#${str.split(' ').filter(String).map(w => w[0].toUpperCase() + w.slice(1)).join('')}`
    return resp.length > 140 ? false : resp
}

function generateHashtagUp(str) {
    return str.length > 140 || str === '' ? false :
        '#' + str.split(' ').map(capitalize).join('');
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(generateHashtag("code" + " ".repeat(140) + "wars"));