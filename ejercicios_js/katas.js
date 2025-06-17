// This problem was asked by Apple. Given a sorted list of integers, square the elements and give the output in sorted order.
// 	For example, given [-9, -2, 0, 2, 3], return [0, 4, 4, 9, 81].
function squareElements(list) {
  let result = [];
  for (let i = 0; i < list.length; i++) {
    result.push(list[i] ** 2); // Guarda cada cuadrado en otro array
  }

  return result.sort((a, b) => a - b); // Orden ascendente
  //return result.sort((a,b) => b-a); // Orden descendente
}
console.log(squareElements([-9, -2, 0, 2, 3]));

// Ordenamiento con algoritmo bubble sort
function ordenarArray(numeros) {
  for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length - 1; j++) {
      if (numeros[j] > numeros[j + 1]) {
        let temp = numeros[j];
        numeros[j] = numeros[j + 1];
        numeros[j + 1] = temp;
      }
    }
  }
  return numeros;
}
console.log(ordenarArray([1,3,2,33,11,-2]));

