// 1.- Dado el objeto empleados, extrae la empleada Ana completa.
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];
const [, Ana] = empleados;
console.log(Ana);

// 2.- Dado el objeto empleados, extrae el email del empleado Luis --> Luis@gmail.com
const [Luis,,] = empleados; // destructuring de array
//const Luis = empleados[0]; // si no te pidieran destructuring
console.log(Luis);
//const emailLuis = Luis.email;
//const emailLuis = Luis["email"];
const {email:emailLuis} = Luis; // destructuring de objeto
console.log(emailLuis);




// 7.- Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.
// countTheArgs("gato", "perro"); //2
// countTheArgs("gato", "perro", "pollo", "oso"); //4

function countTheArgs (...argum) {
    return argum.length;
  }

console.log(countTheArgs("gato", "perro")); //2
console.log(countTheArgs("gato", "perro", "pollo", "oso")); //4


// 10.- Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.

function combineAllArrays(...arrays){
    let combined_arrays = [];
    for (let i = 0; i < arrays.length; i++) {
        combined_arrays = [...combined_arrays,...arrays[i]];
    }
    return combined_arrays;
}

console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1])); // [3, 6, 7, 8, 2, 7, 3, 1
console.log(combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1])); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]