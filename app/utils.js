function createStartInfo (kingdomName, kingdomHealth, enemyName, enemyHealth) {
    let divStartInfo = document.createElement('div'),
        maincontent = document.getElementById('main-content');
    divStartInfo.innerHTML = `<p>${kingdomName} (${kingdomHealth}hp) vs. ${enemyName} (${enemyHealth}hp)!</p>`;
    maincontent.appendChild(divStartInfo);
    divStartInfo.classList.add('start-info');
}

function createAttackElement (paramsAttackElement) {
    let divPower = document.createElement('div'),
        divHealth = document.createElement('div'),
        maincontent = document.getElementById('main-content');

    divPower.innerHTML = `<p>The ${paramsAttackElement.name} attacks with the power ${paramsAttackElement.power}!</p>`;
    divHealth.innerHTML = `The ${paramsAttackElement.targetName} health became ${paramsAttackElement.targetHealth}.`;
    maincontent.appendChild(divPower);
    maincontent.appendChild(divHealth);

    divPower.classList.add(paramsAttackElement.className);
    divHealth.classList.add('info');
}

function doDeferredTimeout (paramsAttackElement) {
    setTimeout(function () {
        createAttackElement(paramsAttackElement);
    }, 750*paramsAttackElement.count);
}

function createWinnerElement (name, imageName) {
    let divWinner = document.createElement('div'),
        imgWinner = document.getElementsByTagName('img'),
        maincontent = document.getElementById('main-content');

    divWinner.innerHTML = `<p>The ${name} is a winner!</p>
    <img id="" src="app/img/${imageName}.jpg">`;
    maincontent.appendChild(divWinner);

    divWinner.classList.add('winner');
    imgWinner[0].classList.add('img-winner');
}