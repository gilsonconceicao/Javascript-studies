// form with JS

function NameAndDateAndAnnotation() {
    const firstNameAndDateAnnotation = {
        firstName: document.querySelector('#nameUser').value,
        dateOption: document.querySelector('#dateUserOption').value,
        annotation: document.querySelector('#textAreaUser').value

    }
    const { firstName: nameUser, dateOption: userDate, annotation } = firstNameAndDateAnnotation;

    // options radio languages 

    let languagesOption = document.getElementsByName('languages');
    let textLanguages = '';

    if (languagesOption[0].checked) {
        textLanguages = 'HTML';
    } else if (languagesOption[1].checked) {
        textLanguages = 'CSS';
    } else if (languagesOption[2].checked) {
        textLanguages = 'JAVASCRIPT';
    }

    // checked 

    if (nameUser === '' || userDate === '' || annotation === '') {
        window.alert('Favor preencher os dados do formulário para poder ver. ')
    } else {
        // answer name, annotation, options languages

        let resText = document.getElementsByClassName('resText')[0]
    

        resText.innerHTML =
            `Nome: ${nameUser} </br> 
            Data de nascimento: ${userDate}  </br> 
            Estudando: ${textLanguages}  </br> 
            ${annotation}`


        document.getElementsByClassName('conteinerHomeForm')[0].style.display = 'none'; 
        document.getElementsByClassName('conteinerAnswer')[0].style.display = 'block'
    }
}

const btnSubmitForm = document.getElementById('btnFormChecked');
btnSubmitForm.addEventListener('click', (e) => {
    e.preventDefault();
    NameAndDateAndAnnotation(); // ok está funcionando.     
    btnSubmitForm.innerHTML = 'Ver alterações'
})

function editDados() {
    document.getElementsByClassName('conteinerHomeForm')[0].style.display = 'block'; 
    document.getElementsByClassName('conteinerAnswer')[0].style.display = 'none'   
}