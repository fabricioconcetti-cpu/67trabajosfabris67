let estado = false;
const boton = document.getElementById("btnEstado");

boton.addEventListener("click", () => {
  estado = !estado;
  boton.textContent = estado ? "Verdadero" : "Falso";
});