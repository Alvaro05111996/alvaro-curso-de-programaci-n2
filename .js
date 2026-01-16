// Variables de tipos básicos
const nombreCompleto = "nombre apellido";
const edad = 29;
const meGustaProgramacion = true;

// Array de intereses (3 cadenas de texto)
const intereses = ["desarrolo de paginas web", "Creación de codigo", "crear una pagina desde cero"];

// Objeto persona
const persona = {
    nombre: nombreCompleto,
    edad: edad,
    leGustaProgramar: meGustaProgramacion,
    intereses: intereses
};

// Función para mostrar la información
function mostrarInfo(usuario) {
    console.log(`Nombre: ${usuario.nombre}`);
    console.log(`Edad: ${usuario.edad} años`);
    console.log(`¿Le gusta la programación?: ${usuario.leGustaProgramar ? "Sí" : "No"}`);
    console.log(`Intereses: ${usuario.intereses.join(", ")}`);
}

// Ejecución de la función
mostrarInfo(persona);
