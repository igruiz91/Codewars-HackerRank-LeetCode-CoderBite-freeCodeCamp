function cached(fn) {
    const cache = Object.create(null)
    return function cachedFn(str){
        if(!cache[str]){
            let result = fn(str)
            cache[str]=result
        }
        return cache[str]
    }
}
function computed(str) {
    // Suppose the calculation in the funtion is very time consuming
    console.log('2000s have passed')
    return 'a result'
}
var cachedComputed = cached(computed)

cachedComputed("ss")
cachedComputed("ss")
