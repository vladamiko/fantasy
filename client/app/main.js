'use strict'

$(function () {
    getEnemy();
    refresh();
});

function startBattle (enemyEntity) {
    let battle = new Battle('Kingdom', enemyEntity);
        
    battle.view.clearView();
    battle.fight();
}

function getEnemy () {
    $.ajax({
        url: '/get-enemy',
        dataType : 'json',
        success: function (enemyEntity) {
            startBattle(enemyEntity);
        }
    });
}

function refresh (name, power, health) {
    setInterval(getEnemy, 20000);
}