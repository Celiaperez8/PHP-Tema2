"use strict"

function verificarPersona(persona) {
    if (persona.esEstudiante && persona.edad >= 18) {
        return `${persona.nombre} es estudiante y mayor de edad.`;
    } else if (persona.esEstudiante) {
        return `${persona.nombre} es estudiante pero menor de edad.`;
    } else {
        return `${persona.nombre} no es estudiante.`;
    }
}
let persona = { nombre: "Ana", edad: 20, esEstudiante: true };
console.log(verificarPersona(persona));
