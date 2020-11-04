function pillars(np, d, w) {
    return np < 2 ? 0 : ((np-1)*((d*100)+w))-w
}

console.log(pillars(1, 10, 10));