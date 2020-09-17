function snail(column, day, night) {
    let altura = 0
    let contador = 0
    while (altura < column) {
        contador++;
        altura += day
        if (altura >= column) break
        altura -= night
    }
    return contador
}

function snail(column, day, night) {
    const days = (column - night) / (day - night);
    return days < 1 ? 1 : Math.ceil(days);
}

snail = (c, d, n) => ~~((c -= d) <= 0) || 1 + snail(c + n, d, n)

function snail(column, day, night) {
    if (column < 0 || day < 0 || night < 0 || column > day && day <= night)
        throw new Error("Get real, man!");
    return Math.ceil(Math.max(0, column - day) / (day - night)) + 1;
}

console.log(snail(10, 3, 2));