"use strict"

var battle = new Battle(),
    kingdom = new Kingdom('kingdom'),
    enemy = new Enemy('enemy'),
    elf = new Warrior('elf'),
    orc = new Warrior('orc'),
    gnome = new Warrior('gnome');

while (enemy.health > 0 && elf.health > 0) {
    battle.fight(kingdom, enemy);
};

if (enemy.health < 0) {
    console.log('The Kingdom is a winner!');
} else {
    console.log('The Enemy is a winner!');
};