'use strict'

function Kingdom (name) {
    this.name = name;
    this.elf = new Warrior('Gryffindor');
    this.orc = new Warrior('Hufflepuff');
    this.gnome = new Warrior('Ravenclaw');

    this.getName = function () {
        return this.name;
    };

    this.getHealth = function () {
        return this.elf.getHealth();
    };

    this.attack = function () {
        let power = this.elf.attack() + this.orc.attack() + this.gnome.attack();
        console.log('The %o attacks with the power %o', this.getName(), power);
        return power;
    };

    this.defend = function (enemyPower) {
        this.elf.defend(enemyPower);
        this.orc.defend(enemyPower);
        this.gnome.defend(enemyPower);
    };

    this.isAlive = function () {
        return (this.elf.isAlive() && this.orc.isAlive() && this.gnome.isAlive()) ? true : false;
    };
}