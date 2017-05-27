function View () {
    this.maincontent = $('#main-content');

    this.createStartInfo = function (kingdomName, kingdomHealth, enemyName, enemyHealth) {
        let divStartInfo = $(`<p>${kingdomName} (${kingdomHealth}hp) vs. 
            ${enemyName} (${enemyHealth}hp)!</p>`).addClass('start-info');
        
        this.maincontent.append(divStartInfo);
    };

    this.createAttackElement = function (paramsAttackElement) {
        let divPower = $(`<p>The ${paramsAttackElement.name} attacks with the power 
            ${paramsAttackElement.power}!</p>`).addClass(paramsAttackElement.className),
            divHealth = $(`<p>The ${paramsAttackElement.targetName} health became 
            ${paramsAttackElement.targetHealth}</p>`).addClass('info');

        this.maincontent.append(divPower);
        this.maincontent.append(divHealth);
    };

    this.createWinnerElement = function (name, imageName) {
        let divWinner = $(`<div><p>The ${name} is a winner!</p>
            <img id="" src="app/img/${imageName}.jpg"></div>`).addClass('winner');

        this.maincontent.append(divWinner);
    };

    this.clearView = function () {
        this.maincontent.empty();
    };
}