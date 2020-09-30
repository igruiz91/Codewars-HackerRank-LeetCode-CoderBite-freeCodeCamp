String.prototype.digit = function() {
    return (/^\d/.test(this)) ? true : false
};

String.prototype.digit = function() {
    return /^\d$/.test(this)
}

console.log('121'.digit());