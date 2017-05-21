'use strict'

function Battle (kingdomName, enemyName) {
    this.kingdom = new Kingdom(kingdomName);
    this.enemy = new Enemy(enemyName);
    this.view = new View();
    this.fight = function () {
        let kingdomName = this.kingdom.name,
            enemyName = this.enemy.name,
            count = 1,
            that = this;

        this.view.createStartInfo(kingdomName, this.kingdom.elf.health, enemyName, this.enemy.health);

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
            this.view.doDeferredTimeout(paramsAttackElement);
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
                this.view.doDeferredTimeout(paramsAttackElement);
                count++;
            }
        }

        if (this.enemy.isAlive()) {
            setTimeout(function() {
                that.view.createWinnerElement(enemyName, 'winner2');
            }, count*750);
        } else {
            setTimeout(function() {
                that.view.createWinnerElement(kingdomName, 'winner1');
            }, count*750);
        }
    };
    
    this.isAlive = function () {
        return (this.enemy.isAlive() && this.kingdom.isAlive()) ? true : false;
    };
}