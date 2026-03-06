const botao = document.getElementById("startBtn");
const galeria = document.getElementById("galeria");
const carta = document.getElementById("carta");

const fotos = [
"fotos/foto1.jpg",
"fotos/foto2.jpg",
"fotos/foto3.jpg",
"fotos/foto4.jpg",
"fotos/foto5.jpg"
"fotos/foto6.jpg"
"fotos/foto7.jpg"
"fotos/foto8.jpg"
"fotos/foto9.jpg"
"fotos/foto10.jpg"
"fotos/foto11.jpg"
"fotos/foto12.jpg"
"fotos/foto13.jpg"
"fotos/foto14.jpg"
"fotos/foto15.jpg"
"fotos/foto16.jpg"
"fotos/foto17.jpg"
];

botao.addEventListener("click", () => {

botao.style.display = "none";

let i = 0;

function mostrarFotos(){

if(i < fotos.length){

const img = document.createElement("img");
img.src = fotos[i];

galeria.appendChild(img);

setTimeout(()=>{
img.classList.add("show");
},100);

i++;

setTimeout(mostrarFotos,1000);

}else{

setTimeout(()=>{
carta.style.display = "block";
},1000);

}

}

mostrarFotos();


});
