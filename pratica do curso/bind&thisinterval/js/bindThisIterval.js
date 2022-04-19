// bind e this com setIterval

function execucao() {
    const btnShoot = document.getElementById('shootNumbers')

    btnShoot.addEventListener('click', function () {
        function counterInterval() {
            this.currentNumber = 0

            setInterval(function () {
                this.currentNumber++
                let resShoot = document.getElementById('resShoot');
                resShoot.innerHTML = ` ${this.currentNumber} `
            }.bind(this), 1000)
        }
        new counterInterval;
        clearInterval(counterInterval);
    });

}

execucao()