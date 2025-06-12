let datos = [];
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    datos.push("hola " + i);
  }
}
console.log(datos);

function devuelvePares(num) {
  let datos = [];
  for (let i = num; i <= 10; i++) {
    if (i % 2 == 0) {
      datos.push("hola " + i);
    }
  }
  return datos;
}

console.log("**Ejecucion 1**");
console.log(devuelvePares(1));
console.log("**Ejecucion 2**");
console.log(devuelvePares(3));
console.log("**Ejecucion 3**");
console.log(devuelvePares(5));
