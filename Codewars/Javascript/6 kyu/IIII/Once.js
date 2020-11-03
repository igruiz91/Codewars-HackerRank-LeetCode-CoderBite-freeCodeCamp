function once(fn) {
    let used = false;
    return function (...arguments) {
        if (!used) {
            used = true;
            return fn.apply(this, arguments)
        }
    }
}


