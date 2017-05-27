'use strict'

function Battle (kingdomName, enemyEntity) {
    this.kingdom = new Kingdom(kingdomName);
    this.enemy = new Enemy(enemyEntity);
    this.view = new View();

    this.kingdomAttack = function () {
        let kingdomPower = this.kingdom.attack(),
            kingdomHealth = this.kingdom.getHealth(),
            enemyName = this.enemy.getName(),
            paramsAttackElement = {
                name: kingdomName,
                targetName: enemyName,
                power: kingdomPower,
                className: 'kingdom-attack'
            };
        this.enemy.defend(kingdomPower);
        paramsAttackElement.targetHealth = this.enemy.getHealth();
        this.view.createAttackElement(paramsAttackElement);
    };

    this.enemyAttack = function () {
        let enemyPower = this.enemy.attack(),
            enemyHealth = this.enemy.getHealth(),
            enemyName = this.enemy.getName(),
            paramsAttackElement = {
                name: enemyName,
                targetName: kingdomName,
                power: enemyPower,
                className: 'enemy-attack'
            };

        this.kingdom.defend(enemyPower);
        paramsAttackElement.targetHealth = this.kingdom.getHealth();
        this.view.createAttackElement(paramsAttackElement);
    };

    this.fight = function () {
        let kingdomName = this.kingdom.getName(),
            enemyName = this.enemy.getName(),
            kingdomHealth = this.kingdom.getHealth(),
            enemyHealth = this.enemy.getHealth(),
            flag = 'kingdom',
            that = this,
            fight;

        this.view.createStartInfo(kingdomName, kingdomHealth, enemyName, enemyHealth);
        
        fight = setInterval(function() {
            if (flag === 'kingdom' && that.isAlive()) {
                that.kingdomAttack();
                flag = 'enemy';
            } else if (that.isAlive()) {
                that.enemyAttack();
                flag = 'kingdom';
            } else {
                clearInterval(fight);
                if (that.enemy.isAlive()) {
                    that.view.createWinnerElement(enemyName, 'winner2');
                } else {
                    that.view.createWinnerElement(kingdomName, 'winner1');
                }
            }
        }, 1000);
    };
    
    this.isAlive = function () {
        return (this.enemy.isAlive() && this.kingdom.isAlive()) ? true : false;
    };
}