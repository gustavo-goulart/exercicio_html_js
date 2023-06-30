const form = document.getElementById("form-numero");

let number1 = document.getElementById("numA");
let number2 = document.getElementById("numB");

function validarNum(numA, numB) {
  const validacao = numA < numB;
  return validacao;
}

form.addEventListener("submit", function (e) {
  console.log("testeeeeeeeeee");

  e.preventDefault();

  let formEValido = false;

  const n1 = document.getElementById("numA");
  const n2 = document.getElementById("numB");
  const mensagemSucesso = `O número <b>${n2.value}</b> é Maior que o número <b>${n1.value}</b> - Parabéns Sucesso!`;

  formEValido = validarNum(number1.value, number2.value);
  if (!formEValido) {
    document.querySelector(".error-message").style.display = "block";
  } else {
    document.querySelector(".sucess-message").style.display = "block";
    document.querySelector(".sucess-message").innerHTML = "Sucesso";
  }
});
