
// Ej 2 map,filter,reduce
// 2.- Dado el array foodList con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'], generar un segundo array que consiga generar de salida el resultado esperado.
// [
//     'Como soy de Italia, amo comer Pizza',
//     'Como soy de Japón, amo comer Ramen',
//     'Como soy de Valencia, amo comer Paella',
//     'Aunque no como carne, el Entrecot es sabroso'
// ]

let foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot']
let result2 = foodList.map(food => {
    if (food === 'Pizza'){
        return `Como soy de Italia, amo comer ${food}`
    } else if (food === 'Ramen'){
        return `Como soy de Japón, amo comer ${food}`
    } else if (food === 'Paella'){
        return `Como soy de Valencia, amo comer ${food}`
    } else if (food === 'Entrecot') {
        return `Aunque no como carne, el ${food} es sabroso`
    }
})

console.log(result2);
//let foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot']
const locations = ['Italia','Japón','Valencia','--'];

let result3 = foodList.map((food,i) => {
    if (i<3){
        return `Como soy de ${locations[i]}, amo comer ${food}`
    } else {
        return `Aunque no como carne, el ${food} es sabroso`
    }
})

console.log(result3);



//ejercicio 5
// 5.- Dado el array foodList2, genera un segundo array result5 que filtre los platos veganos y saque una sentencia como la del ejemplo

const foodList2 = [
  {
    name: "Tempeh",
    isVeggie: true,
  },
  {
    name: "Cheesbacon burguer",
    isVeggie: false,
  },
  {
    name: "Tofu burguer",
    isVeggie: true,
  },
  {
    name: "Entrecot",
    isVeggie: false,
  },
];

let datosFiltrados = foodList2.filter((food) => food.isVeggie);
console.log(datosFiltrados);

// ['Que rico Tempeh me voy a comer!',
//     'Que rico Tofu burguer me voy a comer!']
let resultado = datosFiltrados.map(
  (food) => `Que rico ${food.name} me voy a comer!`
);
console.log(resultado);

// ['Que rico Tempeh me voy a comer!',
//     'Que rica Tofu burguer me voy a comer!']
let resultado2 = datosFiltrados.map((food) => {
  if (food.name == "Tempeh") {
    return `Que rico ${food.name} me voy a comer!`
  } else {
    // Tofu
    return `Que rica ${food.name} me voy a comer!`
  }
});
console.log(resultado2);

// 8.- Obtener el monto total de los elementos que pertenecen a catergory "code" en el siguiente array.

const books = [
    {
      name: ' JS for dummies',
      author: 'Emily A. Vander Veer',
      price: 20,
      category: 'code'
    },
    {
      name: 'Don Quijote de la Mancha',
      author: 'Cervantes',
      price: 14,
      category: 'novel'
    },
    {
      name: 'Juego de tronos',
      author: 'George R. Martin',
      price: 32,
      category: 'Fantasy'
    },
    {
      name: 'javascript the good parts',
      author: 'Douglas Crockford',
      price: 40,
      category: 'code'
    }
  ];

  const totalPrice = books
                    .filter(book => book.category=="code")
                    .reduce((acumulador,actual)=>acumulador+actual.price,0);

    console.log(totalPrice);
    



  