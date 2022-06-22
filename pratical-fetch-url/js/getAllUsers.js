const btn = document.querySelector('#btnSearch'); 
const optionsUrl = document.querySelector('#selected-url'); 
const responseConteiner = document.querySelector('#response-url'); 
const statusReq = document.querySelector('#status')
// chenge options url

function selectedUrls() {
    document.getElementById('searchtxt').value = optionsUrl.value; 
    responseConteiner.innerHTML = ''
}

// insert name from input
btn.addEventListener('click', (e) => {
    e.preventDefault() 
    const url = document.getElementById('searchtxt').value; 
    console.log(url); 

    // get all users
    async function getAllUsers() {
        const response = await fetch(url, {
            method: "GET"
        }); 

        const dataUsers = await response.json(); 
         
        statusReq.classList.add('hide')

        dataUsers.map((users) => {
            const div = document.createElement("div");
                div.setAttribute('id', 'box-user')

            div.innerHTML = JSON.stringify(users)
 
            responseConteiner.appendChild(div); 
        })

        console.log(dataUsers);
    }

    getAllUsers(); 

})