// DOM 
const selectedOptions = document.querySelector('#selected-url');
const conteinerResponse = document.querySelector('#response-url'); 
const btn = document.querySelector('#btnSearch'); 

function selectedUrls() {
    document.querySelector('#searchtxt').value = selectedOptions.value; 
    conteinerResponse.innerHTML = ''
}

function consultDataUrl(e) {
    e.preventDefault(); 

    const url = document.querySelector('#searchtxt').value

    async function getDataUrls() {
        const dataUrl = await fetch(url, {
            method: 'GET'
        }); 

        const getingUrl = await dataUrl.json(); 

        console.log(getingUrl); 

        getingUrl.map((dataJson) => {
            const div = document.createElement('div');
                div.setAttribute('id', 'box-data-geting'); 

            div.innerHTML = JSON.stringify(dataJson); 

            conteinerResponse.appendChild(div)
        })
    }

    getDataUrls(); 
}

btn.addEventListener('click', consultDataUrl)
