console.log("hola mundo!!!");
// alert("hola mundo 2");

//document.getElementById() // ID
//document.getElementsByClassName() // Clase
//document.getElementsByTagName() // Etiqueta

// ID
console.log(document.getElementById("miId4").innerHTML);
console.log(document.getElementById("miId4").innerText);


// Clase
console.log(document.getElementsByClassName("clase2")); // Todos los de li.clase2
console.log(document.getElementsByClassName("clase2")[1]);

console.log(document.getElementsByClassName("clase2")[1].innerHTML); // li>a

// Acceder sólo al texto del <a>
const li = document.getElementsByClassName("clase2")[1];
const a = li.getElementsByTagName("a")[0].innerHTML;
console.log(a);

// Obtener todos los textos de los enlaces
let links = document.getElementsByTagName("a");

for (let i = 0; i < links.length; i++) {
  console.log(links[i].innerHTML);
  console.log(links[i].pathname);
  console.log(links[i].href);
  links[i].innerHTML += " Tortilla y barrita tomate"; // escritura
}

// Escritura
// ID
document.getElementById("miId5").innerHTML = "FullStack";

// Clase
document.getElementsByClassName("miClase")[2].innerHTML = "barrita";

// QuerySelectorAll
console.log(document.querySelectorAll("#miDiv > .miClase")[0].innerHTML);
console.log(document.querySelectorAll(".miClase")[0].innerHTML);

document.querySelectorAll("ul > .clase1 > a")[0];
document.querySelectorAll(".clase1 > a")[0];

console.log(document.querySelectorAll("ul > .clase1 > a")[2].innerHTML); // tercer elemento
console.log(document.querySelector("ul > .clase1 > a").innerHTML); // sólo el primer elemento
console.log(document.querySelector("#titulo").innerHTML);

let enlaces = document.querySelectorAll("ul > .clase1 > a");

for (let i = 0; i < enlaces.length; i++) {
  console.log(enlaces[i].innerHTML);
  console.log(enlaces[i].href);
}

// Pruebas en web externa
// https://www.coolmod.com/novedades/
/* let parrafos = document.querySelectorAll("p");

for (let i = 0; i < parrafos.length; i++) {
    console.log(parrafos[i].href);
    parrafos[i].innerHTML = "coffee";
} */

// document.querySelectorAll("p").forEach(parrafo => parrafo.innerHTML="coffee")

// Ejercicio profes web The Bridge
// for (let i = 3; i <= 6; i++) {
//   let img = document.querySelectorAll("div.elementor-widget-container > img")[i];
//   // console.log(img);  
//   // console.log(img.src);  //URL de la foto 
//   img.src = "https://thebridge.tech/wp-content/uploads/2024/04/Sofia.jpg";
// }

// El segundo parámetro de addEventListener es la función de callback
//Función de callback: función que se ejecuta a raíz de otra acción

// pintar
document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

// borrar
document.getElementById("clear").addEventListener("click", function () { // con función anónima
  document.getElementById("demo").innerHTML = "";
});

document.getElementById("myBtn3").addEventListener("click", displayHideDate);

// function displayHideDate() {
//   if (document.getElementById("demo2").innerHTML == "") {
//     document.getElementById("demo2").innerHTML = Date();
//   } else {
//     // Fecha pintada previamente
//     document.getElementById("demo2").innerHTML = "";
//   }
// }

function displayHideDate() {
  let p = document.getElementById("demo2");
  if ( p.innerHTML == "") 
    p.innerHTML = Date();
  else 
    p.innerHTML = "";
}

document.getElementById("boton2").addEventListener("click", function () {
  console.error("Alerta de fusión en el núcleo");
  console.warn("Lean la documentación");
});

// Paso de valores por parámentro
let result = 0;

document.getElementById("boton3").addEventListener("click", function () {
  myFunction(10, 12);
});

function myFunction(a, b) {
  if (result == 0) {
    result = a + b;
    document.getElementById("result2").innerHTML += " " + result;
  } else {
    alert("Ya se hizo la cuenta");
  }
}

/* Sobrecarga de eventos sobre mismo elemento HTML */
function sendAlert() {
  alert("Te fuiste y me dejaste!!!!!");
  document.getElementById("mensaje").style.color = "black";
  document.getElementById("mensaje").style.backgroundColor = "green";
}

function sayHello() {
  console.log("Hola, te he echado de menos!!!!!");
  document.getElementById("mensaje").style.color = "blue";
  document.getElementById("mensaje").style.backgroundColor = "yellow";
}
document.querySelector("#mensaje").addEventListener("mouseout", sendAlert);

document.querySelector("#mensaje").addEventListener("mouseover", sayHello);

// Poner/quitar clase
document.querySelector("#boton4").addEventListener("click", function () {
  document.querySelector("#div1").classList.toggle("fondo");
});



document.querySelector("#texto").addEventListener("mouseover", function () {
  document.querySelector("h3").classList.toggle("fondo");
});

document.querySelector("#texto").addEventListener("mouseout", function () {
  document.querySelector("h3").classList.toggle("fondo");
});

document.getElementById("boton5").addEventListener("click", function () {
  //document.getElementById("div2").innerHTML += "<p>queso</p>";
  const parent = document.getElementById("div2");
  const child = document.createElement("p"); // <p></p>
  const txt = document.createTextNode("Texto para párrafo desde JS"); // Texto

  child.appendChild(txt); // <p>Texto para párrafo</p>
  parent.appendChild(child); //<div id="div2"><p>Texto para párrafo</p></div>

  const child2 = document.createElement("p"); //<p></p>
  const txt2 = document.createTextNode("Texto 2" + Math.random());
  child2.appendChild(txt2);
  child2.setAttribute("id", "queso"); //<p id="queso">Texto 2 0.38473</p>

  let oldChild = document.getElementById("p1");
  console.log(oldChild);
  parent.replaceChild(child2, oldChild);
});

document.getElementById("boton6").addEventListener("click", function () {
  const datos = ["Patatas", "Pescado", "Naranja", "Queso"]; // viene de un "servidor externo"

  // createElement("ul")
  // 4*createElement("li") 4*createTextNode
  // Unir cada LI al ul --> 4*appendChild
  // appendChild al div que está en el DOM
  let template = `<ul> 
                      <li>${datos[0]}</li> 
                      <li>${datos[1]}</li>
                      <li>${datos[2]}</li>
                      <li>${datos[3]}</li>
                    </ul>`;

  document.getElementById("div3").innerHTML = template;
});


document.getElementById("boton7").addEventListener("click", function () {
  const datos = [
    { marca: "BMW", peso: 1600, color: "rojo" },
    { marca: "BMW", peso: 1600, color: "azul" },
    { marca: "BMW", peso: 1600, color: "verde" },
    { marca: "BMW", peso: 1600, color: "amarillo" },
  ]; // viene de un "servidor externo"
  // Template string
  const lista = `<section>
                  <article>
                    <p>${datos[0].marca}</p>
                    <p>${datos[0].peso}</p>
                    <p>${datos[0].color}</p>
                  </article>
                  <article>
                    <p>${datos[1].marca}</p>
                    <p>${datos[1].peso}</p>
                    <p>${datos[1].color}</p>
                  </article>
                  <article>
                    <p>${datos[2].marca}</p>
                    <p>${datos[2].peso}</p>
                    <p>${datos[2].color}</p>
                </article>
                <article>
                  <p>${datos[3].marca}</p>
                  <p>${datos[3].peso}</p>
                  <p>${datos[3].color}</p>
              </article>

                </section>`;
  document.getElementById("lista2").innerHTML = lista;
});

document.getElementById("boton8").addEventListener("click", function () {
  const datos = [
    { marca: "BMW", peso: 1600, color: "rojo" },
    { marca: "BMW", peso: 1600, color: "azul" },
    { marca: "BMW", peso: 1600, color: "verde" },
    { marca: "BMW", peso: 1600, color: "amarillo" },
    { marca: "BMW", peso: 1600, color: "rojo" },
    { marca: "BMW", peso: 1600, color: "azul" },
    { marca: "BMW", peso: 1600, color: "verde" },
  ]; // viene de un "servidor externo"
  // Template string
  let lista = "<section>";

  for (let i = 0; i < datos.length; i++) {
    lista += `<article>
              <p>${datos[i].marca}</p>
              <p>${datos[i].peso}</p>
              <p>${datos[i].color}</p>
            </article>`;
    console.log(lista);
  }
  lista += "</section>";
  console.log("*************");
  console.log(lista);
  
  
  document.getElementById("lista3").innerHTML = lista;
});

document.getElementById("boton8borrar").addEventListener("click", function () {
  document.getElementById("lista3").innerHTML = "";
});