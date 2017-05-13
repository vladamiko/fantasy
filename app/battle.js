'use strict'

function Battle (kingdomName, enemyName) {
    this.kingdom = new Kingdom(kingdomName);
    this.enemy = new Enemy(enemyName);
    this.fight = function () {
        console.log('%o VS %o', this.kingdom.name, this.enemy.name);
        while (this.enemy.health > 0 && this.kingdom.elf.health > 0) {
            this.kingdom.attack(this.enemy);
            if (this.enemy.health > 0) {
                this.enemy.attack(this.kingdom);
            }
        };

        if (this.enemy.health <= 0) {
            console.log('The %o is a winner!', this.kingdom.name);
        } else {
            console.log('The %o is a winner!', this.enemy.name);
        };
    };
}