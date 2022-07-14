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

function activeB() {
  if (agreement.checked === true) {
    btn.removeAttribute('disabled');
  } else {
    btn.setAttribute('disabled', '');
  }
}

agreement.addEventListener('click', activeB);
