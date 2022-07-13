const buttonHeader = document.getElementById('button-header');
const email = document.getElementById('email').innerText;
const senha = document.getElementById('senha').innerText;

function validarFormsHeader (e) {
    e.preventDefault();
    const valor = email
    console.log(valor);
}
buttonHeader.addEventListener('click', validarFormsHeader)