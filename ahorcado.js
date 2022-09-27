//ARREGLO DE PALABRAS SECRETAS
let palabrasSecretas = [
    "CSS",
    "WEB",
    "HTML",
    "JAVA",
    "BODY",
    "JSON",
    "PHYTON",
    "SCRIPT",
    "PAGINA",
    "BACKEND",
    "FRONTEND",
    "PROGRAMA"
];

//CUERPO DEL AHORCADO DIVIDIDO POR FUNCIONES EN CONFIGURACIÓN INICIAL
const pantalla = document.querySelector("canvas"),
      error = pantalla.getContext("2d");

const piso = () => {
    error.fillStyle = 'lightgrey';
    error.fillRect(0, 355, 350, 5);
};

const mastil = () => {
    error.fillStyle = 'lightgrey';
    error.fillRect(80, 40, 5, 320);
};

const larguero = () => {
    error.fillStyle = 'lightgrey';
    error.fillRect(80, 40, 180, 5);
};

const cuerda = () => {
    error.fillStyle = 'lightgrey';
    error.fillRect(260, 40, 5, 50);
};

const cabeza = () => {
    error.fillStyle = 'lightgrey';
    error.beginPath();
    error.arc(261, 110, 40, 0, 2*3.14);
    error.fill();
    error.fillStyle = 'white';
    error.beginPath();
    error.arc(261, 110, 35, 0, 2*3.14);
    error.fill();
};

const brazoIzquierdo = () => {
    error.beginPath();
    error.moveTo(210, 220);
    error.lineTo(260, 150);
    error.lineWidth = 5;
    error.strokeStyle = 'lightgrey';
    error.stroke();
};

const brazoDerecho = () => {
    error.beginPath();
    error.moveTo(320, 220);
    error.lineTo(265, 150);
    error.lineWidth = 5;
    error.strokeStyle = 'lightgrey';
    error.stroke();
};

const torzo = () => {
    error.fillStyle = 'lightgrey';
    error.fillRect(260, 150, 5, 135);
};

const piernaIzquierda = () => {
    error.beginPath();
    error.moveTo(210, 345);
    error.lineTo(262, 285);
    error.lineWidth = 5;
    error.strokeStyle = 'lightgrey';
    error.stroke();
};

const piernaDerecha = () => {
    error.beginPath();
    error.moveTo(320, 345);
    error.lineTo(264, 285);
    error.lineWidth = 5;
    error.strokeStyle = 'lightgrey';
    error.stroke();
};

//CUERPO DEL AHORCADO DIVIDIDO POR FUNCIONES PARA RELLENO DE ERRORES
const pisoX = () => {
    error.fillStyle = '#0A3871';
    error.fillRect(0, 355, 350, 5);
};

const mastilX = () => {
    error.fillStyle = '#0A3871';
    error.fillRect(80, 40, 5, 320);
};

const largueroX = () => {
    error.fillStyle = '#0A3871';
    error.fillRect(80, 40, 180, 5);
};

const cuerdaX = () => {
    error.fillStyle = '#0A3871';
    error.fillRect(260, 40, 5, 30);
};

const cabezaX = () => {
    error.fillStyle = '#0A3871';
    error.beginPath();
    error.arc(261, 110, 40, 0, 2*3.14);
    error.fill();
    error.fillStyle = 'white';
    error.beginPath();
    error.arc(261, 110, 35, 0, 2*3.14);
    error.fill();
};

const brazoIzquierdoX = () => {
    error.beginPath();
    error.moveTo(210, 220);
    error.lineTo(260, 150);
    error.lineWidth = 5;
    error.strokeStyle = '#0A3871';
    error.stroke();
};

const brazoDerechoX = () => {
    error.beginPath();
    error.moveTo(320, 220);
    error.lineTo(265, 150);
    error.lineWidth = 5;
    error.strokeStyle = '#0A3871';
    error.stroke();
};

const torzoX = () => {
    error.fillStyle = '#0A3871';
    error.fillRect(260, 150, 5, 135);
};

const piernaIzquierdaX = () => {
    error.beginPath();
    error.moveTo(210, 345);
    error.lineTo(262, 285);
    error.lineWidth = 5;
    error.strokeStyle = '#0A3871';
    error.stroke();
};

const piernaDerechaX = () => {
    error.beginPath();
    error.moveTo(320, 345);
    error.lineTo(264, 285);
    error.lineWidth = 5;
    error.strokeStyle = '#0A3871';
    error.stroke();
};
