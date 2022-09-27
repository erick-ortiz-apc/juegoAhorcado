//VARIABLES GLOBALES PARA MANEJO DEL DOM

//VARIABLES POR SECCIONES
const seccHeader = document.getElementById("vistaHeader"),
      seccInicio = document.getElementById("vistaInicio"),
      seccJuego = document.getElementById("vistaJuego"),
      seccTeclado = document.getElementById("vistaTeclado"),
      seccAgregar = document.getElementById("vistaPalabra"),
      seccFooter = document.getElementById("vistaFooter"),
      ventanaFlotante = document.getElementById("mensajeJuego");

//VARIABLES POR BOTONES
const btnIniciarJuego = document.getElementById("btnIniciarJuego"),
      btnAgregarPalabra = document.getElementById("btnAgregarPalabra"),
      btnNuevoJuego = document.getElementById("btnNuevoJuego"),
      btnDesistir = document.getElementById("btnDesistir"),
      btnAgregar = document.getElementById("btnAgregar"),
      btnVolver = document.getElementById("btnVolver"),
      btnAceptar = document.getElementById("btnAceptar");

//VARIABLES POR CONTENEDORES DE TEXTO O PALABRAS
const contPalabraSecreta = document.getElementById("contPalabraSecreta"),
      contLetrasUsadas = document.getElementById("contLetrasUsadas"),
      palabraIngresada = document.getElementById("palabra"),
      mensaje = document.getElementById("contTextoVentanaFlotante");

//VARIABLES PARA MANEJO DE PALABRA, LETRAS, ERRORES Y ACIERTOS
let secretaRandom, letraUsada, errores, aciertos;

//ACCIONES ASIGNADAS PARA CADA BOTÓN POR VENTANA
btnIniciarJuego.addEventListener('click', vistaIniciarJuego);
btnNuevoJuego.addEventListener('click', nuevoJuego);
btnDesistir.addEventListener('click', vistaInicioDesistir);
btnAgregarPalabra.addEventListener('click', vistaAgregarPalabra);
btnAgregar.addEventListener('click', agregarNuevaPalabra);
btnVolver.addEventListener('click', vistaInicio);
btnAceptar.addEventListener('click', cerrarVentanaFlotante);

//FUNCION PARA INICIAR JUEGO DESDE VENTANA INICIO
function vistaIniciarJuego() {
    seccHeader.className = "ocultarSeccion";
    seccInicio.className = "ocultarSeccion";
    seccFooter.className = "ocultarSeccion";
    seccJuego.className = "verSeccion";
    seccTeclado.className = "verSeccion";
    contPalabraSecreta.innerHTML = "";
    contLetrasUsadas.innerHTML = "";
    configInicialCanvas();
    palabraRandom();
    insertarSecreta();
    errores = 0;
    aciertos = 0;
    letraUsada = [];
};

//FUNCION PARA INICIAR UN NUEVO JUEGO
function nuevoJuego() {
    errores = 0;
    aciertos = 0;
    contPalabraSecreta.innerHTML = "";
    contLetrasUsadas.innerHTML = "";
    configInicialCanvas();
    palabraRandom();
    insertarSecreta();
    resetTeclado();
    letraUsada = [];
};

//FUNCION QUE DETECTA LA TECLA PRESIONADA Y LA BLOQUEA, RETORNA LA LETRA.
function teclaPresionada(x) {
    const bloqTeclaPress = document.getElementById("letra"+x);
    bloqTeclaPress.style.backgroundColor = '#0A3871';
    bloqTeclaPress.style.color = 'white';
    bloqTeclaPress.disabled = true;
    letraUsada.push(x);
    return x;
};

//FUNCIÓN PARA RESETEAR EL BLOQUEO DE TECLAS
function resetTeclado() {
    for (let i = 0; i < letraUsada.length; i++) {
        const desbloqTeclaPress = document.getElementById("letra"+letraUsada[i]);
        desbloqTeclaPress.style.backgroundColor = '#dddddd';
        desbloqTeclaPress.style.color = 'black';
        desbloqTeclaPress.disabled = false;
    }
}

//FUNCION PARA IR A LA VENTANA PARA AGREGAR PALABRA NUEVA
function vistaAgregarPalabra() {
    seccInicio.className = "ocultarSeccion";
    seccAgregar.className = "verSeccion";
};

//FUNCION PARA AGREGAR UNA NUEVA PALABRA
function agregarNuevaPalabra() {
    let nuevaPalabra = palabraIngresada.value;
    if (nuevaPalabra != "") {
        if (nuevaPalabra.length >= 3) {
            palabrasSecretas.push(nuevaPalabra);
            palabraIngresada.value = "";
            mensajeFlotante("Palabra agregada con exito.");
            console.log(nuevaPalabra);
        } else {
            mensajeFlotante("La palabra no supera el mínimo de caracteres.");
        }
    }else{
        mensajeFlotante("Ingrese una palabra para agregar.");
    } 
};

//FUNCION PARA VOLVER A LA VENTANA INICIO DESDE AGREGAR PALABRA
function vistaInicio() {
    seccInicio.className = "verSeccion";
    seccAgregar.className = "ocultarSeccion";
    palabraIngresada.value = "";
};

//FUNCION PARA VOLVER A VENTANA INICIO DESDE EL JUEGO AL DESISTIR Y RESETEAR EL TECLADO
function vistaInicioDesistir() {
    seccHeader.className = "verSeccion";
    seccInicio.className = "verSeccion";
    seccFooter.className = "verSeccion";
    seccJuego.className = "ocultarSeccion";
    seccTeclado.className = "ocultarSeccion";
    if (letraUsada.length != 0) {
        resetTeclado();
    }
};

//FUNCION PARA MOSTRAR UN MENSAJE EN VENTANA FLOTANTE
function mensajeFlotante(texto) {
    mensaje.innerHTML = '<p><b>'+texto+'</b></p>';
    ventanaFlotante.classList = "verSeccion";
}

//FUNCIÓN PARA CERRAR VENTANA DE MENSAJE FLOTANTE
function cerrarVentanaFlotante() {
    ventanaFlotante.classList = "ocultarSeccion";
}

//FUNCION PARA CONVERTIR A MAYUSCULA LA PALABRA NUEVA QUE SE INGRESA
function convertirMayuscula(x) {
    x.value = x.value.toUpperCase();
};

//FUNCION PARA CORROBORAR QUE SE INGRESE SOLO LETRAS EN LA PALABRA NUEVA
function condicionPalabra(x) {
    let key = x.keyCode || x.which,
        tecla = String.fromCharCode(key).toString(),
        parametros = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ",
        enterDelete = [8,13],
        tecla_enterDelete = false;

    for(let i in enterDelete) {
        if(key == enterDelete[i]){
            tecla_enterDelete = true;
            break;
        }
    }
    
    if(parametros.indexOf(tecla) == -1 && !tecla_enterDelete) {
        mensajeFlotante("Ingresar solo letras (sin tilde)");
        return false;
    }
};

//FUNCION PARA INICIALIZAR EL CANVAS
function configInicialCanvas() {
    const kvs = document.getElementsByTagName("canvas");
    kvs.width = kvs.width;
    piso(), mastil(), larguero(), cuerda(), cabeza(),
    brazoIzquierdo(), brazoDerecho(), torzo(),
    piernaIzquierda(), piernaDerecha();
};

//FUNCION PARA ASIGNAR LA PALABRA SECRETA DE MANERA ALEATORIA
function palabraRandom() {
    let palabra = palabrasSecretas[Math.floor((Math.random() * palabrasSecretas.length))].toUpperCase();
    secretaRandom = palabra.split('');
};

//FUNCION PARA INSERTAR LA PALABRA SECRETA EN EL HTML Y QUE SE MUESTRE OCULTA POR PANTALLA
function insertarSecreta() {
    let aux = 0;
    secretaRandom.forEach(letra => {
        const letraSecreta = document.createElement('div'),
              letraMay = letra.toUpperCase();
        letraSecreta.innerHTML = '<span id=letra'+aux+' class="letra ocultarLetra">'+letraMay+'</span>';
        contPalabraSecreta.appendChild(letraSecreta);
        aux++;
    });
};

//FUNCIÓN PARA BLOQUEAR TODAS LAS TECLAS
function bloquearTotalTeclas(estado) {
    const bloqueoTotal = document.getElementsByTagName("button");
    bloqueoTotal.disabled = estado;
};


//FUNCIÓN PARA COMPARAR LETRA TECLEADA CON LETRAS DE PALABRA SECRETA PARA ACIERTOS
function contadorAciertos(x) {
    for (let i = 0; i < secretaRandom.length; i++) {
        if (x === secretaRandom[i]) {
            document.getElementById("letra"+i).className = "verLetra";
            aciertos++
        }
    }

    if (aciertos === secretaRandom.length) {
        mensajeFlotante("Has ganado. Felicitaciones!");
        bloquearTotalTeclas(true);
        btnAceptar.addEventListener('click', function () {
            nuevoJuego();
            configInicialCanvas();
            bloquearTotalTeclas(false);
        });
    }
};

//FUNCIÓN PARA COMPARAR LETRA TECLEADA CON LETRAS DE PALABRA SECRETA PARA ERRORES
function contadorErrores(x) {
    let coincidencia = secretaRandom.includes(x);
    if (!coincidencia) {
        errores++;
        switch (errores) {
            case 1:
                pisoX();
                break;
            case 2:
                mastilX();
                break;
            case 3:
                largueroX();
                break;
            case 4:
                cuerdaX();
                break;
            case 5:
                cabezaX();
                break;
            case 6:
                brazoIzquierdoX();
                break;
            case 7:
                brazoDerechoX();
                break;
            case 8:
                torzoX();
                break;
            case 9:
                piernaIzquierdaX();
                break;
            case 10:
                piernaDerechaX();
                mensajeFlotante("Has perdido. Intentalo denuevo!");
                bloquearTotalTeclas(true);
                btnAceptar.addEventListener('click', function () {
                    nuevoJuego();
                    configInicialCanvas();
                    bloquearTotalTeclas(false);
                });
                break;
        }
    }
}