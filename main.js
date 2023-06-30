const form = document.getElementById("form-numero");
const campoB = document.getElementById("numB");

function validarNum(numA, numB) {
  const validacao = numA < numB;
  return validacao;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let formEValido = false;
});
