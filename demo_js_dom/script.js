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

for (let i = 3; i <= 6; i++) {
  let img = document.querySelectorAll("div.elementor-widget-container > img")[i];
  // console.log(img);  
  // console.log(img.src);  //URL de la foto 
  img.src = "https://thebridge.tech/wp-content/uploads/2024/04/Sofia.jpg";
}
