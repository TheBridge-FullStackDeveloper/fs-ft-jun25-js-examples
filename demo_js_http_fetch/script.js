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
  
  const contenedor = document.querySelector("#productos1");
  // Vaciar el DOM primero
  while (contenedor.firstChild) {
    contenedor.removeChild(contenedor.firstChild);
  }
  // Renderizar nuevos datos
  contenedor.appendChild(ul);
});

// Llamada a la función. Devuelve una promesa con los datos de la llamada a la API
//Renderizar datos en el DOM. Utiliza template string para generar los nuevos elementos del DOM

getProducts().then((data) => {
  let list = "<ul>";
  data.forEach((product) => {
    list += `<li>${product.title} -- ${product.price}€</li>`;
  });
  list += "</ul>";

  document.querySelector("#productos2").innerHTML = list;
});

//   Utiliza la API (https://dog.ceo/dog-api/) para resolver estos ejercicios.
//  1.- Declara una funcion getAllBreeds que devuelva un array de strings con todas las razas de perro.

function getAllBreeds() {
  return fetch("https://dog.ceo/api/breeds/list/all")
    .then((res) => res.json())
    .then((data) => Object.keys(data.message));
}
// console.log(getAllBreeds());
getAllBreeds().then((breeds) => console.log(breeds));

/*********** Forma 1 -- LLamada a la API anidada ************/
console.time("***timer1***");
fetch("https://rickandmortyapi.com/api/character/1") // Datos de Rick
  .then((res) => res.json())
  .then((rickMortyData) => {
    console.log("HA TERMINADO RICK Y MORTY 1");
    console.log(rickMortyData);
    const episode_url_3 = rickMortyData.episode[2]; // URL tercer episodio donde aparece

    fetch(episode_url_3)
      .then((res) => res.json())
      .then((episode_data) => {
        console.log("HA TERMINADO extracción datos del episodio");
        console.log(episode_data);
        console.log(episode_data.name); // nombre del episodio

        console.timeEnd("***timer1***");
      });
  });

async function getEpisode3() {
  try {
    // Llamada 1
    const res = await fetch("https://rickandmortyapi.com/api/character/1"); // Datos de Rick

    // Verificar si la respuesta es exitosa
    if (!res.ok) {
      throw new Error(
        `Error HTTP: ${res2.status} - ${res2.statusText}`
      );
    }

    const rickMortyData = await res.json();

    // URL tercer episodio donde aparece
    const episode_url_3 = rickMortyData.episode[2];

    // Llamada 2
    const res2 = await fetch(episode_url_3); // Datos episodio 3

    // Verificar si la respuesta es exitosa
    if (!res2.ok) {
      throw new Error(`Error HTTP: ${res2.status} - ${res2.statusText}`);
    }
    const episode_data = await res2.json();

    return episode_data;
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
  }
}

getEpisode3().then((episode_3) => console.log(episode_3));


/******************************** */

// //ejercicio 5
async function getRandomPokemonImage() {
  
      const min = 1;
      const max = 1302;
      const pokemonAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

  try {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonAleatorio}/`);
      if (!response.ok) {
          throw new Error(
              `Error HTTP: ${response.status} - ${response.statusText}`
          );
      }
      let data = await response.json();
      let urlAleatoria = data.sprites.front_default;

      return urlAleatoria;

  } catch (error) {
      console.log(`ERROR: ${error.stack}`);
      throw new Error("socorro!")
  }
}
getRandomPokemonImage()
  .then((urlAleatoria) => console.log(urlAleatoria))
  .catch(error => console.error("Algo salió mal:", error.message));


//ejercicio 6
async function pokemonPikachu() {
  try {  
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
      if (!response.ok) {
          throw new Error(
              `Error HTTP: ${response.status} - ${response.statusText}`
          );
      }
      let data = await response.json();
      let img = data.sprites.front_default;
     return img;

  } catch (error) {
      console.log(`ERROR: ${error.stack}`);
  }
}

async function dogPug() {
  try {
      let responseDos = await fetch (`https://dog.ceo/api/breed/pug/images`);
              if (!responseDos.ok) {
          throw new Error(
              `Error HTTP: ${responseDos.status} - ${responseDos.statusText}`
          );
      }
      let dataUno = await responseDos.json();
      let todasLasImgPug = dataUno.message;

      return todasLasImgPug;
      } catch (error) {
      console.log(`ERROR: ${error.stack}`);
  }  

}
async function printPugVsPikachu() {
  try {
    const pikachuUrl = await pokemonPikachu();
    const pugUrls = await dogPug();
      
    // const [pikachuUrl, pugUrls] = await Promise.all([
    //     pokemonPikachu(), 
    //     dogPug()    
    // ]);
      
      const segundaImgPug = pugUrls[5];
      console.log(segundaImgPug)
      
      let contenedor = document.getElementById("pikachu-pug");
                contenedor.innerHTML = `
              <div class="imagen-item">
               <img src="${pikachuUrl}" alt="Imagen de Pikachu">
              </div>
              <h2> vs </h2>
              <div class="imagen-item">
              <img src="${segundaImgPug}" alt="Imagen de un pug">
              </div>
          `;
    } catch (error) {
      console.log(`ERROR: ${error.stack}`);
  }
}
printPugVsPikachu()
