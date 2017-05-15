'use strict'

function Battle (kingdomName, enemyName) {
    this.kingdom = new Kingdom(kingdomName);
    this.enemy = new Enemy(enemyName);
    this.fight = function () {
        console.log('%o VS %o', this.kingdom.name, this.enemy.name);
        
        while (this.enemy.isAlive() && this.kingdom.isAlive()) {
            let kingdomPower = this.kingdom.attack();
            this.enemy.defend(kingdomPower);
            
            if (this.enemy.isAlive()) {
                let enemyPower = this.enemy.attack();
                this.kingdom.defend(enemyPower);
            }
        }

        if (this.enemy.isAlive()) {
            console.log('The %o is a winner!', this.enemy.name);
        } else {
            console.log('The %o is a winner!', this.kingdom.name);
        }
    };
}