const buttonHeader = document.getElementById('button-header');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const btn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

function validarFormsHeader(e) {
  e.preventDefault();
  const userEmail = email.value;
  const userSenha = senha.value;
  if (userEmail === 'tryber@teste.com' && userSenha === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}
buttonHeader.addEventListener('click', validarFormsHeader);

window.onload = function atribuirDisable() {
  btn.setAttribute('disable', 'true');
};
function concorda(e) {
  e.preventDefault();
  if (agreement.value === 'on') {
    btn.setAttribute('enable', 'enable');
  }
}
btn.addEventListener('click',concorda);
