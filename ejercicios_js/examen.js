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
