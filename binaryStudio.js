class Fighter {
  constructor(name, power, health) {
    this.name = name;
    this.power = power;
    this.health = health;
  }

  setDamage(damage) {
    this.health = this.health - damage
    console.log(`${this.name} health: ${this.health}`);
  }

  hit(enemy, point) {
    let damage = point * this.power;
    enemy.setDamage(damage)
  }
}

class ImprovedFighter extends Fighter {
  doubleHit(enemy, point) {
    super.hit(enemy, point*2)
  }
}

let fight = (fighter, improvedFighter, ...points) => {
  for (var i = 0; i < points.length; i++) {
    if (fighter.health <= 0) {
      return console.log(`Expelliarmuuus, ${improvedFighter.name} win`);
    } else if (improvedFighter.health <= 0) {
      return console.log(`Avada Kedavraaaaaa, ${fighter.name} win`);
    } else {
      fighter.hit(improvedFighter, points[i]);
      improvedFighter.doubleHit(fighter, points[i])
    }
  }
}

const LordVoldemort = new Fighter('LordVoldemort', 14, 12000);
const GarryPotter = new ImprovedFighter('GarryPotter', 15, 10000);

fight(LordVoldemort, GarryPotter, 35,40,58,102,12,22,10,23,45,28,22,20,23,12,45)
