'use strict'

function Battle (kingdomName, enemyName) {
    this.kingdom = new Kingdom(kingdomName);
    this.enemy = new Enemy(enemyName);
    this.fight = function () {
        let kingdomName = this.kingdom.name,
            enemyName = this.enemy.name,
            count = 1;

        createStartInfo(kingdomName, this.kingdom.elf.health, enemyName, this.enemy.health);

        while (this.isAlive()) {
            let kingdomPower = this.kingdom.attack(),
                kingdomHealth = this.kingdom.elf.health,
                paramsAttackElement = {
                    name: kingdomName,
                    targetName: enemyName,
                    power: kingdomPower,
                    className: 'kingdom-attack',
                    count: count
                };

            this.enemy.defend(kingdomPower);
            paramsAttackElement.targetHealth = this.enemy.health;
            doDeferredTimeout(paramsAttackElement);
            count++;

            if (this.enemy.isAlive()) {
                let enemyPower = this.enemy.attack(),
                    enemyHealth = this.enemy.health,
                    paramsAttackElement = {
                    name: enemyName,
                    targetName: kingdomName,
                    power: enemyPower,
                    className: 'enemy-attack',
                    count: count
                };

                this.kingdom.defend(enemyPower);
                paramsAttackElement.targetHealth = this.kingdom.elf.health;
                doDeferredTimeout(paramsAttackElement);
                count++;
            }
        }

        if (this.enemy.isAlive()) {
            setTimeout(function() {
                createWinnerElement(enemyName, 'winner2');
            }, count*750);
        } else {
            setTimeout(function() {
                createWinnerElement(kingdomName, 'winner1');
            }, count*750);
        }
    };
    
    this.isAlive = function () {
        return (this.enemy.isAlive() && this.kingdom.isAlive()) ? true : false;
    };
}

