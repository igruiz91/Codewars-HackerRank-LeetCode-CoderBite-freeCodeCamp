function domainName(url){
    let rw=['https://', 'http://', 'www']
    rw.map(w => url=url.replace(new RegExp(w, 'g'), ''));
    return url.match(/^([\w\-])+/g)[0]
}

function domainNameUp(url) {
    return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1]
}

console.log(domainNameUp('http://4j6oblzv7m4n1zs4ihh.pro/default.html'))
