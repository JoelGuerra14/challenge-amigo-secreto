// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {

   let amigo = document.getElementById("amigo").value;
   
   if (amigo == "") {
        alert("Por favor, inserte un nombre");
   } else {
        amigos.push(amigo);
        limpiarCaja();
        actualizarLista();
   }
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let aleatorio = Math.floor(Math.random() * amigos.length);
        let amigoAleatorio = amigos[aleatorio];
        document.getElementById("resultado").innerHTML = `El amigo secreto sorteado es ${amigoAleatorio}`;
    }
}

function actualizarLista () {
    let elementoLista = document.getElementById("listaAmigos");
    elementoLista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        elementoLista.appendChild(li);
    }
}

function limpiarCaja() {
    document.getElementById("amigo").value = "";
}
