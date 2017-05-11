"use strict"

function Battle () {
    this.fight = function (kingdom, enemy) {
        kingdom.attack();
        if (enemy.health > 0) {
            enemy.attack();
        }
    };
}