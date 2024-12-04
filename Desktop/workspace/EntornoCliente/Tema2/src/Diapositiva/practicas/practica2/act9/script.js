//Dado un array de nombres, usa find() para buscar un nombre específico en el array. 
//Si lo encuentras, imprime
//un mensaje que diga "Nombre encontrado". Si no, imprime "Nombre no encontrado"

// Array de nombres
const nombres = ["Juan", "María", "Pedro", "Ana", "Luis"];

// Nombre a buscar
const nombreBuscado = "María";

// Usando find() para buscar el nombre
const resultado = nombres.find(nombre => nombre === nombreBuscado);

// Verificando si se encontró el nombre
if (resultado) {
    console.log("Nombre encontrado");
} else {
    console.log("Nombre no encontrado");
}
