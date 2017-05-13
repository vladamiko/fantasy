'use strict'

function Warrior (name) {
    this.name = name;
    this.health = 150;
    this.powerRandom = Math.floor((Math.random() * (60 - 40 + 1) ) + 40);
    this.attack = function () {
        this.power = Math.floor(Math.random() * (this.powerRandom * 1.1 - this.powerRandom * 0.9 + 1) + this.powerRandom * 0.9);            
        return this.power;  
    };
    this.defend = function (enemy) {
        this.health -= enemy.power;
        console.log('The %o health becomes %o', this.name, this.health);
    };
}