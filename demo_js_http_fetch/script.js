// function getAndRenderProducts() {
//     const url = "https://fakestoreapi.com/products?limit=10";
//     return fetch(url)
//       .then((response) => response.json()) // Convertir a objeto
//       .then((data) => {
//         let container = "<section>";
//         data.forEach((product) => {
//           container += `<article>
//                           <img src="${product.image}" alt="${product.title}">
//                           <h1>${product.title}</h1>
//                           <p>${product.description}</p>
//                       </article>`;
//         });
//         container += "</section>";
  
//         document.getElementById("resultado").innerHTML += container;
//         return container;
//       })
//       .catch((error) => {
//         console.error("Error fetching data from fakestoreapi:", error);
//       });
// }
  
//   // Llamada a la función
// getAndRenderProducts().then((data) => console.log(data));
// //console.log(getAndRenderProducts()); // esto no da tiempo a que se ejecute el return con los datos

function getProducts() {
    const url = "https://fakestoreapi.com/products?limit=10";
    return fetch(url)
      .then((response) => response.json()) // Convertir a objeto
      .catch((error) => {
        console.error("Error fetching data from fakestoreapi:", error);
      });
}
  
  // Llamada a la función. Devuelve una promesa con los datos de la llamada a la API
  getProducts().then((data) => console.log(data));
  
  // Llamada a la función. Devuelve una promesa con los datos de la llamada a la API
  //Renderizar datos en el DOM
  getProducts().then((data) => {
    const ul = document.createElement("ul");
    data.forEach((product) => {
      //Tratamiento de datos y renderización en el DOM de cada item
      const li = document.createElement("li");
      li.textContent = product.title + " -- " + product.price + "€";
      ul.appendChild(li);
    });
    // Vaciar el DOM primero
    const oldContent = document.body.firstChild;
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
    // Renderizar nuevos datos
    document.body.appendChild(ul);
  });
  
  // Llamada a la función. Devuelve una promesa con los datos de la llamada a la API
  //Renderizar datos en el DOM. Utiliza template string para generar los nuevos elementos del DOM
  
  getProducts().then((data) => {
    let list = "<ul>";
    data.forEach((product) => {
      list += `<li>${product.title} -- ${product.price}€</li>`;
    });
    list += "</ul>";
  
    document.body.innerHTML = list;
  });


//   Utiliza la API (https://dog.ceo/dog-api/) para resolver estos ejercicios.
//  1.- Declara una funcion getAllBreeds que devuelva un array de strings con todas las razas de perro.

function getAllBreeds(){
  return fetch("https://dog.ceo/api/breeds/list/all")
  .then(res =>res.json())
  .then(data=> Object.keys(data.message));
}
// console.log(getAllBreeds());
getAllBreeds().then(breeds => console.log(breeds));

