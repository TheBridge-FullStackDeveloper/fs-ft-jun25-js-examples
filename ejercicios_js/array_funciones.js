// crea una funcion llamar que espera que le pases 2 parametros
// prefijo --> 34 -> Number
// telefono --> 67666554 -> Number
function llamar(prefijo, telefono) {
  if (
    typeof prefijo === "number" &&
    // true || false --> true
    // true && false --> false
    prefijo.toString().length >= 1 &&
    prefijo.toString().length <= 3 &&
    typeof telefono === "number" &&
    telefono.toString().length == 9
  ) {
    return `Llamando a +(${prefijo})${telefono}`;
  } else {
    return "Error en los datos proporcionados";
  }
}
console.log(llamar(34, 67666554));
console.log(llamar("hola", "queso"));
console.log(llamar(878, 2222));
console.log(llamar(8233, 565685885));

// Recorrer array con bucle FOR
const fruits = ["Banana", "Orange", "Apple", "Strawberry", "Tangerine"]; // 0...fruits.length-1

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // Acceso a cada elemento del array
}

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i][0]);  // primera letra de cada fruta
}

// B:a:n:a:n:a
let resultadoFrutas = [];
for (let i = 0; i < fruits.length; i++) { // itera el array
    const myFruit = fruits[i];
    let resultado = "";
    for (let j = 0; j < myFruit.length; j++) { // itera cada palabra  
        resultado += myFruit[j]+":";
        console.log(resultado);
    }
    resultadoFrutas.push(resultado); // añade el resultado al array
}
console.log(resultadoFrutas); // ["B:", "a:", "n:", "a:", "n:", "a:"]


