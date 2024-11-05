var formulario = document.querySelector("#form")

formulario.onsubmit = function (e) {
  // Evita que el formulario se envíe (recargue la página)
  e.preventDefault();

  // Selección de los elementos del formulario de forma más clara
  var n = document.querySelector("#name");
  var e = document.querySelector("#age");
  var na = document.querySelector("#nationality");

  var nombre = n.value;
  var edad = e.value;
  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;

  console.log(nombre, edad);
  console.log(nacionalidad);

  // Validación de los datos
  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  }

  // Si las condiciones son válidas, se agrega el invitado
  if (nombre.length > 0 && edad >= 18 && edad <= 120) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
}

function agregarInvitado(nombre, edad, nacionalidad) {

  // Convertir la nacionalidad a texto legible
  switch (nacionalidad) {
    case "ar":
      nacionalidad = "Argentina";
      break;
    case "mx":
      nacionalidad = "Mexicana";
      break;
    case "vnzl":
      nacionalidad = "Venezolana";
      break;
    case "per":
      nacionalidad = "Peruana";
      break;
  }

  // Obtener la lista de invitados
  var lista = document.getElementById("lista-de-invitados");

  // Crear el contenedor del invitado
  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  // Crear y agregar los detalles del invitado (Nombre, Edad, Nacionalidad)
  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span");
    var inputNombre = document.createElement("input");
    var espacio = document.createElement("br");
    spanNombre.textContent = descripcion + ": ";
    inputNombre.value = valor;
    inputNombre.disabled = true; // Deshabilitar el campo para que no sea editable
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }

  // Agregar los detalles a la lista
  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  // Crear el botón de eliminar
  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";

  // Al hacer clic en el botón, se elimina el invitado
  botonBorrar.onclick = function () {
    elementoLista.remove();
  }

  // Agregar el botón de borrar al contenedor
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);
}
