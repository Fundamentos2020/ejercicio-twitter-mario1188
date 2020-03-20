//variables
const lista_mensajes = document.getElementById('lista_mensajes');



// event listeners
eventListeners();

function eventListeners(){
    // al enviar formulario
    document.getElementById('formulario').addEventListener('submit', agregarTweet);
}



// funciones

//agregar tweet del formulario
function agregarTweet(e){
    e.preventDefault();
    // leer valor del textarea
    const mensaje = document.getElementById('tweet').value;

    //crear boton de eliminar
    const botonborrar = document.createElement('a');
    botonborrar.classList = 'borrar-mensaje';
    botonborrar.innerText = 'X';

    // creacion del elemento y añadir a la lista tweet
    const li = document.createElement('li');
    li.classList = 'bb';
    li.innerText = mensaje;
    lista_mensajes.appendChild(li);
    li.appendChild(botonborrar);


    console.log(mensaje);
}