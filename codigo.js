
//Cambia el contenido del id 'hola' a 'chao'
//document.getElementById('hola').textContent = 'chao';

//Cambia la propiedad de la imagen a 'none' entonces no se muestra
var jabonDOM = document.getElementById('jabon')
jabonDOM.style.display = 'none'

var nextButton_1DOM = document.getElementById('nextButton_1')
nextButton_1DOM.addEventListener('click', function() {
    document.getElementById('hola').textContent = 'Primero va a aparecer una imagen y luego una palabra o letras. Si es una palabra presiona X y si son puras letras presiona Y'
    nextButton_1DOM.style.display = 'none'
    nextButton_2DOM.style.display = 'block'
});

var nextButton_2DOM = document.getElementById('nextButton_2')
nextButton_2DOM.style.display = 'none'

//Tratando de que se muestre el jabon luego de 1000 ms pero no funciona
//nextButton_2DOM.setTimeout(showPic, 1000) 

//function showPic() {
    //var dadoDOM = document.getElementById('jabon')
//}
  

//Para cambiar las imagenes usando numeros aleatorios (del 1 al 6) en cada click
//nextButton_2DOM.addEventListener('click', function() {
    
    //1. Generacion de numero aleatorio
    //var dado = Math.floor(Math.random() * 6) + 1;

    //2. Mostrar el resultado
    //var dadoDOM = document.getElementById('jabon')
    //dadoDOM.style.display = 'block';
    //dadoDOM.src = 'pic' + dado + '.jpg';

//});




//document.addEventListener("click", myFunction);

//function myFunction() {
//    document.getElementById("demo").innerHTML = "Hello World";
//}

//function instructions2() {
//    document.querySelector('.instructionsBody').style.display = instructionsBody2;
//}

// document.querySelector('.').style.display = 