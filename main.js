function validarFormulario() {
  var campoA = parseInt(document.getElementById("campoA").value);
  var campoB = parseInt(document.getElementById("campoB").value);

  if (campoB > campoA) {
    alert("Formulário válido. Número B é maior que o número A.");
  } else {
    alert("Formulário inválido. Número B deve ser maior que o número A.");
  }
}
