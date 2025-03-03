let amigos = [];

// Agrega un nuevo amigo, validando que no sea vacío ni duplicado
function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();
  
  if (nombre === "") {
    alert("Por favor, ingrese un nombre válido");
    return;
  }
  
  if (amigos.includes(nombre)) {
    alert("El dato ya está almacenado");
    input.value = "";
    return;
  }
  
  amigos.push(nombre);
  actualizarLista();
  input.value = "";
  input.focus();
}

// Refresca la lista de amigos en pantalla
function actualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// Elige UN solo amigo al azar y lo muestra
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }
  
  // Índice aleatorio entre 0 y amigos.length - 1
  let randomIndex = Math.floor(Math.random() * amigos.length);
  
  // Amigo seleccionado
  let elegido = amigos[randomIndex];
  
  // Muestra el resultado
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  
  let li = document.createElement("li");
  li.textContent = "El amigo secreto sorteado es: " + elegido;
  resultado.appendChild(li);
}
