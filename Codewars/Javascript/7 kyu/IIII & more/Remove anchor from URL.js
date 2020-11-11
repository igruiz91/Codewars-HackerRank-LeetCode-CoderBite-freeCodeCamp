function removeUrlAnchor(url){
    return url.replace(/\#.+/g, '')
}

const removeUrlAnchorUp = url=> url.split('#')[0]
let u = 'www.codewars.com#about'
console.log(removeUrlAnchorUp(u));