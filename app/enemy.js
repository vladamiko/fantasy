'use strict'

function Enemy (name) {
    this.name = name;
    this.health = 500;
    this.getName = function () {
        return this.name;
    };
    
    this.getHealth = function () {
        return this.health;
    };

    this.powerRandom = Math.floor((Math.random() * (60 - 40 + 1) ) + 40);

    this.attack = function () {
        let power = Math.floor(Math.random() * (this.powerRandom * 1.1 - this.powerRandom * 0.9 + 1) + this.powerRandom * 0.9);
        console.log('The %o attacks with the power %o', this.getName(), power);
        return power;
    };

    this.defend = function (kingdomPower) {
        this.health -= kingdomPower;
        console.log('The %o health becomes %o', this.getName(), this.getHealth());
    };
    
    this.isAlive = function () {
        return (this.getHealth() > 0) ? true : false;
    };
}