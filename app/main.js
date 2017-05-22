'use strict'

window.onload = function () {
    let buttonStart = document.getElementById('button-start');
      
    buttonStart.addEventListener('click', startBattle);
};

function startBattle () {
    let battle = new Battle('Hogwarts', 'Voldemort'),
        buttonStart = document.getElementById('button-start');
        
    battle.view.clearView();
    buttonStart.disabled = true;
    battle.fight(changeButtonState);
    
    // buttonStart.removeEventListener('click', startBattle);
}

function changeButtonState () {
    let buttonStart = document.getElementById('button-start');

    buttonStart.disabled = false;
}