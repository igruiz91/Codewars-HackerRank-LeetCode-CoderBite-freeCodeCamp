function fight(robot1, robot2, tactics) {
    let first, second;
    const getTactic = (atck) => {
        if (atck == 0) return 0
        let values = tactics
        return values[atck]
    }

    const getLife = (robot) => {
        return robot.health;
    }

    if (robot1.speed.valueOf() < robot2.speed.valueOf()) {
        first = robot2;
        second = robot1;
    } else {
        first = robot1;
        second = robot2;
    }
    while ((getLife(first) > 0) && (getLife(second) > 0)) {
        let a1;
        let a2;
        first.tactics.length == 0 ? a1 = 0 : a1 = first.tactics.shift();
        second.tactics.length == 0 ? a2 = 0 : a2 = second.tactics.shift();
        let damage1 = getTactic(a1);
        let damage2 = getTactic(a2);
        second.health -= damage1
        if (getLife(second) <= 0) return `${first.name} has won the fight.`
        first.health -= damage2
        if (getLife(first) <= 0) return `${second.name} has won the fight.`
        if ((first.tactics.length == 0) && (second.tactics.length == 0)) {
            return (getLife(first) > getLife(second)) ? `${first.name} has won the fight.` : (getLife(first) < getLife(second)) ? `${second.name} has won the fight.` : "The fight was a draw."
        }
    }
}

function figthUp(robot1, robot2, tactics) {
    if (robot2.speed > robot1.speed) [robot1, robot2] = [robot2, robot1]
    while (robot1.tactics.length || robot2.tactics.length) {
        if (robot1.tactics.length) robot2.health -= tactics[robot1.tactics.shift()];
        if (robot2.health <= 0) break
        if (robot2.tactics.length) robot1.health -= tactics[robot2.tactics.shift()];
        if (robot1.health <= 0) break
    }
    if (robot1.health == robot2.health) return "The fight was a draw."
    return (robot1.health > robot2.health) ? `${robot1.name} has won the fight` : `${robot2.name} has won the fight`;
}



let robot1 = { name: 'Rocky', health: 100, speed: 20, tactics: [] }
let robot2 = {
    name: 'Missile Bob',
    health: 100,
    speed: 21,
    tactics: ['missile', 'missile', 'missile', 'missile']
}
tactics = { "punch": 20, "laser": 30, "missile": 35 };





//console.log(getLife(robot1));

console.log(figthUp(robot1, robot2, tactics));