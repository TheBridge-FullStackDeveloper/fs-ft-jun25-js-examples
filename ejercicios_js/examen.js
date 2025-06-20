console.log("hola!");

// Ejercicio 1
// Declara una función que acepte una palabra como parámetro y la devuelva con todos sus caracteres en mayúsculas y separados por espacios. Ejemplo: Para "Ana" devolverá "A N A".
//"Ana" --> "A n a" --> "A N A"
//"Queso" --> "Q u e s o"
//"viernes"
//"cervecita"
function transformaPalabra(palabra) {
  let nuevaPalabra = "";

  for (let i = 0; i < palabra.length; i++) {
    if (i < palabra.length - 1) nuevaPalabra += palabra[i].toUpperCase() + " ";
    else nuevaPalabra += palabra[i].toUpperCase();
  }

  return nuevaPalabra;
}
console.log(transformaPalabra("Queso"));

// Ejercicio 2
// Declara una función que acepte un nombre como parámetro y devuelva el número de palabras que tiene el nombre. Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.
// palabras = espacios_totales + 1
// "Antonio Alberto Jesús"
// "Ana"
// " "
// " Ana"
// "Ana "

function contarPalabras(nombre) {
    let contador = 1;
  for(let i=0; i<nombre.length; i++){
    if(nombre[i]==" "){
        contador++;
    }
  }
  return contador;
}

console.log(contarPalabras("Ana Marta Luis"));


// " "
// " Ana"
// "Ana "

function contarPalabras2(nombre) {
    nombre = nombre.trim();
    
  // en caso de mandar espacio vacio
  if(nombre.length == 0){
    return -1;
  }
    

  let contador = 1;
  
  for(let i=0; i<nombre.length; i++){
    if(nombre[i]==" "){
        contador++;
    }
  }
  return contador;
}

console.log(contarPalabras2("Ana      "));

//Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números
// num = 3
// num, num+1,num+2,num+3,.....num+50 -->  rango [num,num+50]
function imprimeImpares(num){
  for (let i = num; i <= num+50; i++) {
    if(i%2 != 0){
      console.log(i);
    }
  }
}

imprimeImpares(4);


/***************************** */

let numerosImpar = (num) => {
  numImpar =[];
  for(let i=num; i <= (num + 50); i++){
      if(i % 2 !== 0){
          numImpar.push(i);
      }
  } return numImpar
}

console.log(numerosImpar(2));
