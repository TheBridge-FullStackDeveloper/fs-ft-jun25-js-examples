// Usando MAP
let arr = [1, 2, 3, 4, 5, 6, 7];
let multiplyBy2 = n => n * 2;

let arrTimes2 = arr.map(elem => elem * 2); // devuelve un array nuevo
console.log(arrTimes2);

let productos = ["patatas", "pescado", "naranjas", "manzana"];
let resultado = productos.map((producto) => producto + " modificado!");
console.log(resultado);

//Con FILTER
let words = ['Hola', 'bienvenidos', 'queridos', 'FullStack', 'Dev'];

let longWords = words.filter(word => word.length > 6);

console.log(longWords); //["bienvenidos", "queridos", "FullStack", "Developers"]


// Usando REDUCE
let lista = [2,-1,1,3,5,8];
let acumulado = lista.reduce((acc, actual) => acc + actual,0); // acc = acc + actual
console.log(acumulado); // 18
// Temperatura promedio semanal
console.log((acumulado/7).toPrecision(3)+" grados");
console.log((acumulado/7).toFixed(2)+" grados");

let nombres = ["barrita","queso","cafe","zumo","palmera","tortilla"];
let mensaje = nombres.reduce((acc,actual)=> acc +" "+actual,"Quiero comer en mi descanso: ")
console.log(mensaje);







let usuarios = [
    { user: "👩🏻‍💻" },
    { user: "👨🏾‍💻" },
    { user: "💃" },
    { user: "👨🏻‍🎓" },
    { user: "🧑🏻‍🏫" },
    { user: "🦸‍♂️" },
    { user: "🧟‍♂️" },
  ];
  
  let aprobados = usuarios
                    .map(user => {
                      let mark = Math.random() * 100;
                      user.mark = mark;
                      return user;
                    })
                    .filter(user => user.mark > 50) //[]
                    .reduce((acc,elem) => acc+elem.mark,0) // Num
                    .toFixed(2);
  
  console.log((aprobados/usuarios.length).toFixed(2)); // promedio notas

  




