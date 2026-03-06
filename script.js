const botao = document.getElementById("startBtn");
const galeria = document.getElementById("galeria");
const carta = document.getElementById("carta");

const fotos = [
"fotos/foto1.jpg",
"fotos/foto2.jpg",
"fotos/foto3.jpg",
"fotos/foto4.jpg",
"fotos/foto5.jpg"
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