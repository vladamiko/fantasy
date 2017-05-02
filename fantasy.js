"use strict"

function Battle () {
    this.fight = function (kingdom, enemy) {
        kingdom.attack();
        enemy.attack();
    };
}

function Adversary (name) {
    this.name = name;
    this.powerRandom = Math.floor((Math.random() * (60 - 40 + 1) ) + 40);
    this.attack = function () {
        this.power = Math.floor(Math.random() * (this.powerRandom * 1.1 - this.powerRandom * 0.9 + 1) + this.powerRandom * 0.9);
        console.log(this.name, this.power);
    };
}

var battle = new Battle();
var kingdom = new Adversary('kingdom');
var enemy = new Adversary('enemy');

for (let i = 0; i < 7; i++) {
    battle.fight(kingdom, enemy);
}