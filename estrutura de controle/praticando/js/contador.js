// contador 

const btnContador = document.getElementById('btnContador').addEventListener('click', function() {
    let resLoopFor = document.querySelector('.resLoopFor'); 

    for(let inicio = 1 ; inicio <= 10 ; inicio++) {
        resLoopFor.innerHTML += `${inicio} <br/>`
    }

    const btnLimpar = document.getElementById('btnLimpar').style.display = 'block'; 
});

// limpar dados 

const btnLimpar = document.getElementById('btnLimpar').addEventListener('click', function() {
    let resLoopFor = document.querySelector('.resLoopFor').innerHTML = ''; 
    ocultarBtnLimpar()
}); 

/* econder btn limpar */
function ocultarBtnLimpar() {
    const btnLimpar = document.getElementById('btnLimpar').style.display = 'none'; 
}