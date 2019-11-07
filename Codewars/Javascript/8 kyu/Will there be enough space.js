function enough(cap, on, wait) {
    return (on+wait)>cap ? Math.abs(cap-(on+wait)) : 0
}

function enougthUp(cap, on, wait) {
    return Math.max(wait+on-cap, 0)
}

console.log(enougthUp(20, 5, 5));