function combat(health, damage) {
    return health - damage < 0 ? 0 : health - damage
}

var combat = (h, d) => Math.max(0, h - d)

console.log(combat(100, 105));