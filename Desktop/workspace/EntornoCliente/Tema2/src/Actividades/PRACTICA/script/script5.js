// Escribe una función que reciba un array de cadenas de texto y lo devuelva ordenado alfabéticamente en orden inverso, usando un algoritmo manual de ordenación (como burbuja) y un bucle para invertirlo.

array = ["hola", "mundo", "python", "ordenado", "inverso"]
function ordenar(array){
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++){
            if (array[j] < array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                }
                }
            }
    let arrayInvertido = []
    for (let i = n - 1; i >= 0; i--) {
        arrayInvertido.push(array[i]);
        }
        return arrayInvertido;

    }

    console.log(ordenar(["Manzana", "Banana", "Plátano", "Fresa", "Cereza"])); 
