function mostrarFecha() {
  let fecha_id = document.getElementById("fecha_id");
  let fecha = new Date();
  let opciones = { day: "numeric", month: "long", year: "numeric" };
  let fechaEnLetras = fecha.toLocaleDateString("es-ES", opciones);
  fecha_id.textContent = `Tienes tareas para hoy (${fechaEnLetras})`;
}

function agregar() {
  let input = document.getElementById("input_id");
  let contenedor_tareas = document.getElementById("contenedor_tareas");

  if (input.value.trim() === "") {
    alert("Por favor, escribe una tarea.");
    return;
  }

  let tareaDiv = document.createElement("div");
  tareaDiv.classList.add("tarea");

  let tareaTexto = document.createElement("p");
  tareaTexto.textContent = input.value;
  tareaTexto.onclick = function () {
    tareaTexto.classList.toggle("tachado");
  };
  ////boton importante
  let btnImportante = document.createElement("button");
  btnImportante.textContent = "¡Importante!";
  btnImportante.classList.add("btn-tarea", "btn-importante");
  btnImportante.onclick = function () {
    tareaDiv.style.border = tareaDiv.style.border ? "" : "1px solid red";
  };
  ///boton eliminar
  let btnBorrar = document.createElement("button");
  btnBorrar.textContent = "X";
  btnBorrar.classList.add("btn-tarea", "btn-borrar");
  btnBorrar.onclick = function () {
    contenedor_tareas.removeChild(tareaDiv);
  };

  tareaDiv.appendChild(tareaTexto);
  tareaDiv.appendChild(btnImportante);
  tareaDiv.appendChild(btnBorrar);

  contenedor_tareas.appendChild(tareaDiv);
  input.value = "";
} 
