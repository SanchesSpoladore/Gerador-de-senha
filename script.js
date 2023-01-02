const senha = document.querySelector("#senha");

function copiar() {
  senha.select()
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
}

const valorCaracter = document.getElementById('valorCaracter')

function quantidadeCaracter(value) {
  valorCaracter.innerHTML = value
}

/*======================================================================================================*/

const tamanhoSenha = document.getElementById("quantidade");
const letrasMaiusculasCaixa = document.getElementById("letrasMaiusculas");
const letrasMinusculasCaixa = document.getElementById("letrasMinusculas");
const numerosCaixa = document.getElementById("numeros");
const simbolosCaixa = document.getElementById("simbolos");

const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()_+=";

function getletrasMinusculas() {
  return letrasMinusculas[Math.floor(Math.random() * letrasMinusculas.length)];
}

function getletrasMaiusculas() {
  return letrasMaiusculas[Math.floor(Math.random() * letrasMaiusculas.length)];
}

function getnumeros() {
  return numeros[Math.floor(Math.random() * numeros.length)];
}

function getsimbolos() {
  return simbolos[Math.floor(Math.random() * simbolos.length)];
}

function generatePassword() {
  let tamanho = tamanhoSenha.value;

  let password = "";
  var marcado = 0

  if (letrasMaiusculasCaixa.checked) {
    password += getletrasMaiusculas();
    marcado++;
  }

  if (letrasMinusculasCaixa.checked) {
    password += getletrasMinusculas();
    marcado++;
  }

  if (numerosCaixa.checked) {
    password += getnumeros();
    marcado++;
  }

  if (simbolosCaixa.checked) {
    password += getsimbolos();
    marcado++;
  }

  if (marcado > tamanho) {

    var posicao = Math.floor(Math.random() * tamanho + 0.5)

    for (let i = tamanho; i < marcado; i++) {
      password = password.replace(password[posicao], '')
    }
  }

  for (let i = password.length; i < tamanho; i++) {
    const x = generateX();
    password += x;
  }

  senha.setAttribute('value', password);

  const fraco = document.getElementById('fraco')
  const medio = document.getElementById('medio')
  const boa = document.getElementById('boa')
  const forte = document.getElementById('forte')

  if (tamanho <= 6 || tamanho > 6) {
    fraco.classList.add('ativo')
  }

  if (tamanho == 0) {
    fraco.classList.remove('ativo')
  }

  if (tamanho > 6) {
    medio.classList.add('ativo')
  } else {
    medio.classList.remove('ativo')
  }

  if (tamanho > 8) {
    boa.classList.add('ativo')
  } else {
    boa.classList.remove('ativo')
  }

  if (tamanho > 10) {
    forte.classList.add('ativo')
  } else {
    forte.classList.remove('ativo')
  }
}

function generateX() {
  const xs = [];
  if (letrasMaiusculasCaixa.checked) {
    xs.push(getletrasMaiusculas());
  }

  if (letrasMinusculasCaixa.checked) {
    xs.push(getletrasMinusculas());
  }

  if (numerosCaixa.checked) {
    xs.push(getnumeros());
  }

  if (simbolosCaixa.checked) {
    xs.push(getsimbolos());
  }

  if (xs.length === 0) return "";

  return xs[Math.floor(Math.random() * xs.length)];
}

function gerar() {
  generatePassword();
}

generatePassword()