
document.addEventListener("DOMContentLoaded", function () {

  const formulario = document.querySelector("form");

  if (!formulario) return;

  formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    // Verificar que los campos sean válidos
    if (!formulario.checkValidity()) {
      formulario.reportValidity();
      return;
    }

    const boton = formulario.querySelector('[type="submit"]');

    // Cambiar el estado del botón
    if (boton) {
      boton.textContent = "Enviado";
      boton.classList.add("btn-enviado");
      boton.disabled = true;
    }

    // Desactivar los campos del formulario
    formulario.querySelectorAll("input, textarea, select").forEach(function (campo) {
      campo.disabled = true;
    });

  });

});
