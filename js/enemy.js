"use strict"

function Enemy (name) {
    this.name = name;
    this.health = 500;
    this.powerRandom = Math.floor((Math.random() * (60 - 40 + 1) ) + 40);
    this.attack = function () {
        this.power = Math.floor(Math.random() * (this.powerRandom * 1.1 - this.powerRandom * 0.9 + 1) + this.powerRandom * 0.9);
        console.log('The %o attacks with the power %o', this.name, this.power);
        elf.defend();
        orc.defend();
        gnome.defend();
    };
    this.defend = function () {
        this.health -= kingdom.power;
        console.log('The %o health becomes %o', this.name, this.health);
    };
}