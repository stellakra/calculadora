let pantalla = document.getElementById('pantalla');
let operacion = '';
let resultadoMostrado = false;

function agregarNumero(numero) {
    if (pantalla.textContent === '0' || resultadoMostrado) {
        pantalla.textContent = numero;
        resultadoMostrado = false;
    } else {
        pantalla.textContent += numero;
    }
}

function agregarOperador(op) {
    if (pantalla.textContent !== '0') {
        pantalla.textContent += ' ' + op + ' ';
        resultadoMostrado = false;
    }
}

function calcular() {
    try {
        // x equivale *
        let expresion = pantalla.textContent.replace('×', '*');
        let resultado = eval(expresion);
        pantalla.textContent = resultado;
        resultadoMostrado = true;
    } catch (error) {
        pantalla.textContent = 'Error';
        resultadoMostrado = true;
    }
}

function limpiar() { 
    pantalla.textContent = '0';
    operacion = '';
    resultadoMostrado = false;
}

function borrar() {
    if (pantalla.textContent.length > 1) {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
    } else {
        pantalla.textContent = '0';
    }
    resultadoMostrado = false;
}