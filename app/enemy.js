'use strict'

function Enemy (name) {
    this.name = name;
    this.health = 500;
    this.powerRandom = Math.floor((Math.random() * (60 - 40 + 1) ) + 40);
    this.attack = function (kingdom) {
        this.power = Math.floor(Math.random() * (this.powerRandom * 1.1 - this.powerRandom * 0.9 + 1) + this.powerRandom * 0.9);
        console.log('The %o attacks with the power %o', this.name, this.power);
        kingdom.elf.defend(this);
        kingdom.orc.defend(this);
        kingdom.gnome.defend(this);
    };
    this.defend = function (kingdom) {
        this.health -= kingdom.power;
        console.log('The %o health becomes %o', this.name, this.health);
    };
}