'use strict'

function Enemy (enemyEntity) {
    this.name = enemyEntity.name;
    this.power = enemyEntity.power;
    this.health = enemyEntity.health;
    
    this.getName = function () {
        return this.name;
    };
    
    this.getHealth = function () {
        return this.health;
    };

    this.attack = function () {
        return this.power;
    };

    this.defend = function (kingdomPower) {
        this.health -= kingdomPower;
        console.log('The %o health becomes %o', this.getName(), this.getHealth());
    };
    
    this.isAlive = function () {
        return (this.getHealth() > 0) ? true : false;
    };
}