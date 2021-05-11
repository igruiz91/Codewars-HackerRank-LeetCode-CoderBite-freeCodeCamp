function Hero(
  name = "Hero",
  position = "00",
  health = 100,
  damage = 5,
  experience = 0
) {
  this.name = name;
  this.position = position;
  this.health = health;
  this.damage = damage;
  this.experience = experience;
  return { name, position, health, damage, experience };
}


class Hero {
  constructor(name = "Hero") {
    this.name = name;
    this.position = "00";
    this.health = 100;
    this.damage = 5;
    this.experience = 0;
  }
}

