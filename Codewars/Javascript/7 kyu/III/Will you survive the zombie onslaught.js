function zombie_shootout(zombies, range, ammo) {
    let kills=0
    while(ammo>=0 || range >=0 || kills == zombies){
        if(ammo==0) `You shot ${kills} zombies before being eaten: ran out of ammo.`
        ammo--
        kills++ 
        if(kills == zombies) return `You shot all ${kills} zombies.`
        range-=0.5
        if(range<0 ) return `You shot ${kills} zombies before being eaten: overwhelmed.`
    }
    return undefined
}



console.log(zombie_shootout(3, 10, 10));