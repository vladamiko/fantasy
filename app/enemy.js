'use strict'

function Enemy (name) {
    this.name = name;
    this.health = 500;
    this.powerRandom = Math.floor((Math.random() * (60 - 40 + 1) ) + 40);

    this.attack = function () {
        let power = Math.floor(Math.random() * (this.powerRandom * 1.1 - this.powerRandom * 0.9 + 1) + this.powerRandom * 0.9);
        console.log('The %o attacks with the power %o', this.name, power);
        return power;
    };

    this.defend = function (kingdomPower) {
        this.health -= kingdomPower;
        console.log('The %o health becomes %o', this.name, this.health);
    };
    
    this.isAlive = function () {
        return (this.health > 0) ? true : false;
    };
}