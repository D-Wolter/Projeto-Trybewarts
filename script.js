const buttonHeader = document.getElementById('button-header');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const btn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
const textLen = document.getElementById('textarea');
const cont = document.getElementById('counter');
cont.innerHTML = 500;

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

function refresh() {
  cont.innerHTML = 500 - textLen.value.length;
}

textLen.addEventListener('keyup', refresh);

const nome = document.getElementById('input-name');
const sobrenome = document.getElementById('input-lastname');
const eMail = document.getElementById('input-email');
const casa = document.getElementById('house').value;
const familia1 = document.getElementsByName('family')[0];
const familia2 = document.getElementsByName('family')[1];
const familia3 = document.getElementsByName('family')[2];
const lang1 = document.getElementById('hofs');
const lang2 = document.getElementById('jest');
const lang3 = document.getElementById('promises');
const lang4 = document.getElementById('react');
const lang5 = document.getElementById('sql');
const lang6 = document.getElementById('python');
const n1 = document.getElementsByName('rate');

function makeForm (e) {
  e.preventDefault()
  console.log(nome.value)
  console.log(sobrenome.value)
  console.log(eMail.value)
  console.log(casa);

  //tratar qual dos trez e verdadeiro
  if (familia1.checked === true) {
    console.log(familia1.value);
  } 
  if (familia2.checked === true) {
    console.log(familia2.value);
  } 
  if (familia3.checked === true) {
    console.log(familia3.value);
  }
  if (lang1.checked === true) {
    console.log(lang1.value);
  }
  if (lang2.checked === true) {
    console.log(lang2.value);
  }
  if (lang3.checked === true) {
    console.log(lang3.value);
  }
  if (lang4.checked === true) {
    console.log(lang4.value);
  }
  if (lang5.checked === true) {
    console.log(lang5.value);
  }
  if (lang6.checked === true) {
    console.log(lang6.value);
  }
  for (v of n1) {
    if (v.checked === true) {
      console.log(v.value.id);
    }
  }
  
}

btn.addEventListener('click', makeForm)
