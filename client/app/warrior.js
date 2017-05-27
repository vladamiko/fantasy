'use strict'

function Warrior (name) {
    this.name = name;
    this.health = 150;
    this.powerRandom = Math.floor((Math.random() * (60 - 40 + 1) ) + 40);

    this.getName = function () {
        return this.name;
    };

    this.getHealth = function () {
        return this.health;
    };

    this.attack = function () {
        let power = Math.floor(Math.random() * (this.powerRandom * 1.1 - this.powerRandom * 0.9 + 1) + this.powerRandom * 0.9);            
        return power;
    };

    this.defend = function (enemyPower) {
        this.health -= enemyPower;
        console.log('The %o health becomes %o', this.getName(), this.getHealth());
    };

    this.isAlive = function () {
        return (this.getHealth() > 0) ? true : false;
    };
}