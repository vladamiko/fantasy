'use strict'

window.onload = function () {
    getEnemy();
    refresh();
};

function startBattle (enemyEntity) {
    let battle = new Battle('Kingdom', enemyEntity);
        
    battle.view.clearView();
    battle.fight();
}

function getEnemy () {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', '/get-enemy', true);
    xhr.addEventListener('readystatechange', function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let enemyEntity = JSON.parse(xhr.responseText);
                startBattle(enemyEntity);
            }
        }
    });
    xhr.send();
}

function refresh (name, power, health) {
    setInterval(getEnemy, 20000);
}