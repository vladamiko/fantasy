function createAttackElement (name, power, health, className, targetName, targetHealth) {
    let divPower = document.createElement('div'),
        divHealth = document.createElement('div'),
        maincontent = document.getElementById('main-content');

    divPower.innerHTML = `<p>The ${name} attacks with the power ${power}!</p>`;
    divHealth.innerHTML = `The ${targetName} health became ${targetHealth}.`;
    maincontent.appendChild(divPower);
    maincontent.appendChild(divHealth);

    divPower.classList.add(className);
    divHealth.classList.add('info');
}

function doDeferredTimeout (name, power, health, className, targetName, targetHealth, i) {
    setTimeout(function () {
        createAttackElement(name, power, health, className, targetName, targetHealth);
    }, 750*i);
}

function createWinnerElement (name) {
    let divWinner = document.createElement('div'),
        imgWinner = document.getElementsByTagName('img'),
        maincontent = document.getElementById('main-content');

    divWinner.innerHTML = `<p>The ${name} is a winner!</p>
    <img id="" src="app/img/winner.jpg">`;
    maincontent.appendChild(divWinner);

    divWinner.classList.add('winner');
    imgWinner[0].classList.add('img-winner');
}