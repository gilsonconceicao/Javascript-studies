// mostrar stave 

var botao_stave = window.document.getElementById('btn_stave'); 

botao_stave.addEventListener('click', function() {
    let cont_stave = window.document.getElementById('cont_stave'); 

    if (cont_stave.style.display === 'block') {
        cont_stave.style.display = 'none'; 
        botao_mark.style.display = 'block';
        botao_bill.style.display = 'block';
    } else {
        cont_stave.style.display = 'block'; 
        botao_mark.style.display = 'none'; 
        botao_bill.style.display = 'none';
    }
}); 

// mostrar mark 

var botao_mark = window.document.getElementById('btn_mark'); 

botao_mark.addEventListener('click', function() {
    let cont_mark = window.document.getElementById('cont_mark'); 

    if (cont_mark.style.display === 'block') {
        cont_mark.style.display = 'none'; 
        botao_stave.style.display = 'block';
        botao_bill.style.display = 'block';
    } else {
        cont_mark.style.display = 'block'; 
        botao_stave.style.display = 'none';
        botao_bill.style.display = 'none';
    }
});

// mostrar Bill 

var botao_bill = window.document.getElementById('btn_gates') 

botao_bill.addEventListener('click', function() {
    let cont_bill = window.document.getElementById('cont_bill'); 

    if (cont_bill.style.display === 'block') {
        cont_bill.style.display = 'none'; 
        botao_stave.style.display = 'block';
        botao_mark.style.display = 'block';
    } else {
        cont_bill.style.display = 'block'; 
        botao_stave.style.display = 'none';
        botao_mark.style.display = 'none';
    }
});

