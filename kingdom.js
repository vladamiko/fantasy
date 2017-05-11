"use strict"

function Kingdom (name) {
    this.name = name;
    this.attack = function () {
        this.power = elf.attack() + orc.attack() + gnome.attack();
        console.log('The %o attacks with the power %o', this.name, this.power);
        enemy.defend();
    };
}