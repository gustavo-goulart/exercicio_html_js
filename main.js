const form = document.getElementById("form-numero");

let number1 = document.getElementById("numA");
let number2 = document.getElementById("numB");

function validarNum(numA, numB) {
  const validacao = numA < numB;
  return validacao;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let formEValido = false;

  const number1 = document.getElementById("numA");
  const number2 = document.getElementById("numB");
  const mensagemSucesso = `O número <b>${number2.value}</b> é Maior que o número <b>${number1.value}</b> - Parabéns Sucesso!`;

  formEValido = validarNum(number1.value, number2.value);
  if (formEValido) {
    const containerMensagemSucesso = querySelector(".sucess-message");
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = "block";

    number1.value = "";
    number2.valeu = "";
  } else {
    number1.style.border = "1px solid rgb(255, 230, 38)";
    document.querySelector(".error-message").style.display = "block";
  }
});

/*
number1.addEventListener("keyup", function (e) {
  if (!formEValido) {
    number1.classList.add("error");
    //nomeBeneficiario.style.border = "1px solid red";
    document.querySelector(".error-message").style.display = "block";
  } else {
    number1.classList.remove("error");
    document.querySelector(".error-message").style.display = "none";
  }
});
*/
