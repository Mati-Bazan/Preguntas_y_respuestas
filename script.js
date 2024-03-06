const preguntas = [
    {
        pregunta: "¿Cuál es la capital de Francia?",
        opciones: ["Londres", "París", "Madrid", "Berlín"],
        respuesta: "París"
    },
    {
        pregunta: "¿Cuál es el río más largo del mundo?",
        opciones: ["Nilo", "Amazonas", "Mississippi", "Yangtsé"],
        respuesta: "Amazonas"
    },
    {
        pregunta: "¿Quién escribió 'Cien años de soledad'?",
        opciones: ["Gabriel García Márquez", "Mario Vargas Llosa", "Pablo Neruda", "Julio Cortázar"],
        respuesta: "Gabriel García Márquez"
    },
    {
        pregunta: "¿Cuál es el elemento químico más abundante en la corteza terrestre?",
        opciones: ["Hierro", "Oxígeno", "Silicio", "Aluminio"],
        respuesta: "Oxígeno"
    },
    {
        pregunta: "¿En qué año comenzó la Segunda Guerra Mundial?",
        opciones: ["1939", "1941", "1943", "1945"],
        respuesta: "1939"
    }
];

let preguntaActual = 0

const elementoPregunta = document.getElementById("pregunta")
const elementoOpciones = document.getElementById("opciones")
const nextButton = document.getElementById("next-btn");

function mostrarPregunta(){
    const pregunta = preguntas[preguntaActual];
    elementoPregunta.textContent = pregunta.pregunta; 

    elementoOpciones.innerHTML = ""
    pregunta.opciones.forEach(option => {
        const boton = document.createElement("button");
        boton.textContent = option;
        boton.classList.add("opcion");
        boton.addEventListener("click", () => checarRespuesta(option));
        elementoOpciones.appendChild(boton)
    });
}

function checarRespuesta(opcionSeleccionada) {
    const pregunta = preguntas[preguntaActual];
    if (opcionSeleccionada === pregunta.respuesta){
        alert("¡Respuesta correcta!")
    } else {
        alert("Respuesta incorrecta. La respuesta correcta es: " + pregunta.respuesta);
    }
    preguntaActual++
    if (preguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        alert("¡Fin del juego!");
    }
}

nextButton.addEventListener("click", mostrarPregunta);

mostrarPregunta();