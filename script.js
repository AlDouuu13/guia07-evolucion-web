function saludar() {
  // Obtener el valor del input
  let nombre = document.getElementById("nombre").value;

  // Validar si el usuario escribió algo
  if (nombre === "") {
    document.getElementById("resultado").innerText =
      "Por favor, ingresa tu nombre.";
  } else {
    document.getElementById("resultado").innerText =
      "Hola " + nombre + ", bienvenido al sistema.";
  }
}
function mostrarMensaje(texto, esCorrecto) {
  const resultado = document.getElementById("resultado");
  resultado.textContent = texto;
  resultado.style.color = esCorrecto ? "green" : "crimson";
}