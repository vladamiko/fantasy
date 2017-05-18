'use strict'

window.onload = function () {
    let buttonStart = document.getElementById('button-start');
        
    buttonStart.addEventListener('click', startBattle);
};

function startBattle () {
    let battle = new Battle('Hogwarts', 'Voldemort'),
        buttonStart = document.getElementById('button-start');

    buttonStart.removeEventListener('click', startBattle);
    
    battle.fight();
}