// bind e this 

const btnverificationDice = document.getElementById('verificationDice'); 

btnverificationDice.addEventListener('click', function(e) {
    e.preventDefault(); 

    const personData = {
        nome: document.getElementById('nameUser').value, 
        email: document.getElementById('nameEmail').value, 
        showPersonalDate() {
            let resPerson = document.getElementById('res'); 
            resPerson.innerHTML = `Nome: ${this.nome} </br>`;  
            resPerson.innerHTML += `Email: ${this.email} `; 
        } 
    }

    if (personData.nome === '' || personData.email === '') {
        window.alert('DIGITE OS DADOS PARA CONTINUAR!!!') 
    } else {
        const personResPage = personData.showPersonalDate.bind(personData); 
        personResPage(); 
    }
})