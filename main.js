const form = document.getElementById("form-numero");
const campoB = document.getElementById("numB");
let formEValido = false;

function validarNum(numA, numB) {
  const validacao = numA < numB;
  return validacao;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const n1 = document.getElementById("numA");
  const n2 = document.getElementById("numB");
  const mensagemSucesso = `O número <b>${n2.value}</b> é Maior que o número <b>${n1.value}</b> - Parabéns Sucesso!`;

  formEValido = validarNum(n2.value);
  if (formEValido) {
    const containerMensagemSucesso = document.querySelector(".sucess-message");
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = "block";

    n1 = "";
    n2 = "";
  } else {
    n1.style.border = "1px solid red";
    document.querySelector(".error-message").style.display = "block";
  }
});
