function auxiliar(queue) {
    const wolf = queue.indexOf('wolf');
    return wolf == queue.length - 1 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${queue.length - 1 - wolf}! You are about to be eaten by a wolf!`
}


console.log(auxiliar(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));