function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let count = Math.ceil(desiredHeight / (upSpeed - downSpeed));
    let grow = 0;

    for (var i = 1; i < count; i++) {
        grow += upSpeed;
        if (grow >= desiredHeight) break
        grow -= downSpeed
    }
    return i
}

const growingPlantUp = (up, down, desired) => Math.max(Math.ceil((desired - up) / (up - down)), 0) + 1

console.log(growingPlantUp(100, 10, 910));