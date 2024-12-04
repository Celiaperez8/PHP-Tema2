"use strict"

/*Crea una función tradicional que reciba un objeto representando a una persona con propiedades
 nombre, edad, y esEstudiante. La función debe devolver un mensaje diferente dependiendo de si 
 la persona es estudiante y mayor de edad*/

 function verificarPersona(persona) {
    if (persona.edad >= 18 && persona.esEstudiante) {
      return `${persona.nombre} es mayor de edad y es estudiante.`;
    } else if (persona.edad >= 18 && !persona.esEstudiante) {
      return `${persona.nombre} es mayor de edad, pero no es estudiante.`;
    } else if (persona.edad < 18 && persona.esEstudiante) {
      return `${persona.nombre} es menor de edad y es estudiante.`;
    } else {
      return `${persona.nombre} es menor de edad y no es estudiante.`;
    }
  }
  
  // Ejemplo de uso
  const persona = { nombre: "Ana", edad: 20, esEstudiante: true };
  console.log(verificarPersona(persona));  // Ana es mayor de edad y es estudiante.

