function circulo(){
    let figura= document.getElementById("figura");
    let titulo= document.getElementById('titulo');
    titulo.innerText=('CIRCULO');
    figura.classList.toggle("circulo");
    alert ("Cambia la figura a circulo")
}
function rectangulo(){
    let figura= document.querySelector("#figura");
    let titulo= document.getElementById('titulo');
    titulo.innerText=('RECTANGULO');
    figura.classList.toggle("rectangulo");
    alert ("Se cambia la figura a rectangulo")
}

function degradado(){
    let figura= document.getElementById("figura");
    let titulo= document.getElementById('titulo');
    titulo.innerText=('DEGRADADO');
    figura.classList.toggle("degradado");
    alert ("Poniendo degradado en la figura")
}

function gif(){
    let figura= document.querySelector("#figura");
    let titulo= document.querySelector('#titulo');
    titulo.innerText=('GIF');
    figura.classList.toggle("gif");
    alert ("Se mostrara el  GIF")
}

function luna(){
    let figura= document.getElementById("figura");
    let titulo= document.getElementById('titulo');
    titulo.innerText=('LUNA');
    figura.classList.toggle("luna");
    alert ("Se cambiara la figura a una luna")
}

function estrella(){
    let figura= document.querySelector("#figura");
    let titulo= document.querySelector('titulo');
    titulo.innerText=('ESTRELLA');
    figura.classList.toggle("estrella");
    alert ("Se cambiara la figura a una estrella")
}

function triangulo(){
    let figura= document.getElementById("figura");
    let titulo= document.getElementById('titulo');
    titulo.innerText=('TRIANGULO');
    figura.classList.toggle("triangulo");
    alert ("Se cambiara la figuira un triangulo")
}

function left(){
    let figura= document.querySelector("#figura");
    let titulo= document.querySelector('titulo');
    titulo.innerText=('LEFT');
    figura.classList.toggle("left");
    alert ("Se esta moviendo a la izquierda")
}

function right(){
    let figura= document.getElementById("figura");
    let titulo= document.querySelector('titulo');
    titulo.innerText=('RIGHT');
    figura.classList.toggle("right");
    alert ("Se esta moviendo a la derecha")
}

function topp(){
    let figura= document.querySelector("#figura");
    let titulo= document.querySelector('#titulo');
    titulo.innerText=('TOP');
    figura.classList.toggle("topp");
    alert("La figura se esta moviendo hacia abajo")
}

function bottom(){
    let figura= document.getElementById("figura");
    let titulo= document.getElementById('titulo');
    titulo.innerText=('BOTTOM');
    figura.classList.toggle("bottom");
    alert("La figura se esta moviendo hacia arriba")
}

function diagonal(){
    let figura= document.getElementById("figura");
    let titulo= document.getElementById('titulo');
    titulo.innerText=('DIAGONAL');
    figura.classList.toggle("diagonal");
    alert ("Girando figura")
}

function panelLateral(){
    let panel =document.getElementById('panel-lateral');
    panel.classList.toggle('active');
}

function panelSuperior(){
    let panel =document.getElementById('panel-superior');
    panel.classList.toggle('active');
}

function inicio(){
    let inicio= document.getElementById('inicio');
    inicio.classList.toggle('inicio');

}

function ingresar(){
    let figura= document.getElementById('figura');
    figura.classList.toggle("ingresar");
    $val1=prompt("Ingrese un color en English:");
    var val1=val1;
    figura.style.background= $val1;
    alert ("Se cambia el color de la figura")
}

