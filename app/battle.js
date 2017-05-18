'use strict'

function Battle (kingdomName, enemyName) {
    this.kingdom = new Kingdom(kingdomName);
    this.enemy = new Enemy(enemyName);
    this.fight = function () {
        let kingdomName = this.kingdom.name,
            enemyName = this.enemy.name,
            count = 1;

        while (this.isAlive()) {
            let kingdomPower = this.kingdom.attack(),
                kingdomHealth = this.kingdom.elf.health;

            this.enemy.defend(kingdomPower);
            doDeferredTimeout(kingdomName, kingdomPower, kingdomHealth, 'kingdom-attack', enemyName, this.enemy.health, count);
            count++;

            if (this.enemy.isAlive()) {
                let enemyPower = this.enemy.attack(),
                    enemyHealth = this.enemy.health;

                this.kingdom.defend(enemyPower);
                doDeferredTimeout(enemyName, enemyPower, enemyHealth, 'enemy-attack', kingdomName, this.kingdom.elf.health, count);
                count++;
            }
        }

        if (this.enemy.isAlive()) {
            setTimeout(function() {
                createWinnerElement(enemyName);
            }, count*750);
        } else {
            setTimeout(function() {
                createWinnerElement(kingdomName);
            }, count*750);
        }
    };
    
    this.isAlive = function () {
        return (this.enemy.isAlive() && this.kingdom.isAlive()) ? true : false;
    };
}

