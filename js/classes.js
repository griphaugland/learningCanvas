class Tower {
  constructor(posX, posY, dmg) {
    this.posX = posX;
    this.posY = posY;
    this.dmg = dmg;
    this.height = 50;
    this.width = 50;
  }
  attack(enemy) {
    enemy.hp -= this.dmg;
  }
}
class SuperTower extends Tower {
  constructor(posX, posY, dmg) {
    super(posX, posY, dmg);
    this.dmg = this.dmg * 10;
  }
}

class Enemy {
  constructor(hp) {
    this.hp = hp;
  }
}
/* const towers = [new Tower(10, 20, 5), new Tower(30, 30)]; */
const tower = new Tower(10, 20, 1);
const enemy = new Enemy(100);
const superTower = new SuperTower(30, 30, 1);
console.log(enemy);
console.log(superTower);
/* tower.attack(enemy); */
superTower.attack(enemy);
console.log(enemy);
