/*******Bikram variables, bucles, condicionales********/
// Ej 1
let variableSinValor;

// Ej 2
let booleano1 = false;
let booleano2 = true;

//Ej 3
const PI = 3.14;

// 4.- Crear variable tipo const de nombre TAU declarada con valor 2 veces PI
const TAU = 2 * PI;

//Ej 10
// 10.- Crear variable contarHasta10_2 con valor 0 e incrementar su valor con un bucle for hasta que se verifique que contarHasta10_2 === 10

// let contarHasta10_2 = 0;
// for (let i= 0; i < 10; i++) {
// contarHasta10_2++;
// }

// let contarHasta10_2 = 0; // define una variable con valor inicial 0
// for (contarHasta10_2;contarHasta10_2 < 10; contarHasta10_2++) {  // No hace falta dar valor inicial a la variable de nuevo
//     contarHasta10_2++;
//     console.log("hola");
// }

// let contarHasta10_2 = 0; // define una variable con valor inicial 0
// for (contarHasta10_2;contarHasta10_2 < 10; contarHasta10_2++) {  // No hace falta dar valor inicial a la variable de nuevo
//     console.log("hola");
// }

// let contarHasta10_2 = 0; // define una variable con valor inicial 0
// for (contarHasta10_2;contarHasta10_2 < 10; contarHasta10_2++) {}

// contarHasta10_2+=10 --> // contarHasta10_2 = contarHasta10_2 + 1
let contarHasta10_2 = 0; // define una variable con valor inicial 0
for (contarHasta10_2;contarHasta10_2 < 10; contarHasta10_2+=10) {}

// 11.- Crear las variables postI y postJ con valor 0 a continuación cree un bucle que itere 11 veces. En cada iteración se deberá sumar al valor de postI el valor de postJ++

// let postI = 0;
// let postJ = 0;
// for(i= 0; i < 11; i++){ // i --> 0...10 --> itera 11 veces
//     postI += postJ++;
// }

let postI = 0;
let postJ = 0;
for(i= 0; i < 11; i++){ // i --> 0...10 --> itera 11 veces
    postI = postI + postJ++;
}

// 13.- Crear variable tipo let de nombre variableValorNumerico declarada con un valor numérico cualquiera
let variableValorNumerico = 0;

// 15.- Crear variable tipo const de nombre MiNumeroFav declarada con valor numérico
const MiNumeroFav = 0;


// 17.- Crear variable booleanoMix1 cuyo valor sea la comparación booleana (booleano1 and (TAU/2 sea igual a PI)) or (variableValorNumerico mayor o igual que MiNumeroFav)

let booleanoMix1 = (booleano1 && (TAU / 2 === PI)) || (variableValorNumerico >= MiNumeroFav);

/*******Bikram array,funciones********/

// 6.- Crea la función potenciacion que acepte como argumento dos números y devuelva el resultado de elevar el primero(a) al segundo(b) (a^b)

// let potenciacion = (num1, num2) => {
//     return Math.pow(num1, num2);
// }


// 2**3 --> 2*2*2
// 3**2 --> 3*3
// 3**5 --> 3*3*3*3*3
let potenciacion = (num1, num2) => {
    let resultado = num1;
    for(let i = 1; i < num2; i++){ // 1...num2-1
         resultado *= num1;
        //  console.log(resultado);
    }
    return resultado;
}
potenciacion(2,3); // 8

//  12.- Crear la función pintarArray que acepte como argumento un array y devuelva una cadena de texto Array entrada: [0, 1, 2] String salida: '[0, 1, 2]'


//JSON.stringify(arr); // '[1,2,3]'
// Buscamos ---> '[1, 2, 3]'
// const pintarArray = (arr) => { // arr -> [1,2,3,4,5]
//     let resultado = "[";
    
//     for (let i = 0; i < arr.length; i++) { //
//         if( i < arr.length - 1) 
//             resultado += arr[i] + ", ";
//         else
//             resultado += arr[i] + "]"; 
//     }
//     return resultado;
// }


// const pintarArray = (arr) => { // arr -> [1,2,3,4,5]
//     let resultado = "[";
    
//     for (let i = 0; i < arr.length; i++) { //
//         resultado += arr[i];
        
//         if( i < arr.length - 1) 
//             resultado +=  ", ";
//         else 
//             resultado +=  "]"; 
//     }

//     return resultado;
// }


const pintarArray = (arr) => { // arr -> [1,2,3,4,5]
    let resultado = "[";
    
    for (let i = 0; i < arr.length; i++) { //
        resultado += arr[i] + (i < arr.length - 1 ? ", " : "]");
    }
    return resultado;
}

// [1,2,33,44,44,44,3,2]
// [1,2,33,44,3]

// Opciones que tenemos:
// 1. Eliminar del array original los repetidos
// 2. Crear un nuevo array donde iremos insertando números no repetidos. Antes de insertar nos aseguremos que el nuevo número no esté ya guardado. Devolver dicho array

// arr --> [1,2,33,44,44,44,3,2]
function eliminarDuplicados(arr) {
    let datos = [];
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if(datos.includes(num) == false){ // si no existe el num en el array
            datos.push(num);
        }
    }
    return datos;
}

// function eliminarDuplicados(arr) {
//     let datos = [];
//     for (let i = 0; i < arr.length; i++) {
//         if(datos.includes(arr[i]) == false){ // si no existe el num en el array
//             datos.push(arr[i]);
//         }
//     }
//     return datos;
// }

// arr --> [1,2,33,44,44,44,3,2]
function eliminarDuplicados(arr) {
    let datos = []; // inicializar datos sin repetir
    for (let i = 0; i < arr.length; i++) {  // recorrer array de numeros inicial
        let num = arr[i];                   // guardar cada numero a analizar
        let encontrado = false;             // Flag para saber si se ha encontrado
        
        for (let j = 0; j < datos.length; j++) { //recorrer array datos sin repetir
            if(datos[j] == num){
                encontrado = true;
                break;
            }       
        }

        if(encontrado == false){ // Se puede introducir el numero
            datos.push(num);
        }
    }
    return datos;
}

eliminarDuplicados([1,2,33,44,44,44,3,2])

// Condiciones primo
// num divisible por 1
// num divisible por num
// num no debe ser divisible por ningún otro número
// 8%1 OK    8%2 8%3 8%4 8%5 8%6 8%7     8%8 OK
// Si i vale entre 2 y num-1, no es primo  i->[2,num-1]
// Descartamos i=1 e i=num de la comprobación porque sabemos que son divisibles

function esPrimo(num){ // num = 8. i=1,2,...8

    // Comprobacion de los divisibles
    for (let i = 2; i <= num-1; i++) {
        if(num%i == 0){
            return false;
        }
    }
    return true;
}


/*******Bikram objetos********/

