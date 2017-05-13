'use strict'

function Kingdom (name) {
    this.name = name;
    this.elf = new Warrior('Gryffindor');
    this.orc = new Warrior('Hufflepuff');
    this.gnome = new Warrior('Ravenclaw');
    this.attack = function (enemy) {
        this.power = this.elf.attack() + this.orc.attack() + this.gnome.attack();
        console.log('The %o attacks with the power %o', this.name, this.power);
        enemy.defend(this);
    };
}