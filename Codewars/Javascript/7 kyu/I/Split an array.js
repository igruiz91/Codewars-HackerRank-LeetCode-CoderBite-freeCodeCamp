function split(arr, prop) {
    return [arr.filter(a => a[prop]), arr.filter(a => !a[prop])]
}

var splitUp = require('lodash').partition