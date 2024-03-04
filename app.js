let listaNumeros = [];
let numeroMaximo = 10;
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;


function cambiarTexto(elemento, texto) {
    let textoHTML = document.querySelector(elemento);
    textoHTML.innerHTML = texto;
    return;
}
function condicionesIniciales() {
    cambiarTexto("h1", "¡Juego del Numero Secreto!");
    cambiarTexto("p", `Adivina un numero entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    return;
}
function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

function verificarIntento() {
    let numeroUsuario = document.getElementById("valorUsuario").value;
    if (numeroUsuario == numeroSecreto) {
        cambiarTexto("h1", "¡Felicitaciones!");
        cambiarTexto("p", `Adivinaste, era el ${numeroSecreto} y tan solo te costó ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}.`);
        document.getElementById("reiniciar").removeAttribute('disabled');
        listaNumeros.push(numeroSecreto);
        console.log(listaNumeros);
    } else {
        if (numeroSecreto > numeroUsuario) {
            cambiarTexto("p", "El numero es mas grande.");
        } else {
            cambiarTexto("p", "El numero es mas chico");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function reiniciarJuego() {
    condicionesIniciales();
    limpiarCaja();
    intentos = 1;
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    if (listaNumeros.length == 10) {
        cambiarTexto("h1", "Haz ganado el juego, no quedan mas numeros");
        cambiarTexto("p","");
        return;
    } else {
        if (listaNumeros.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            return numeroGenerado;
        }
    }
}
condicionesIniciales();