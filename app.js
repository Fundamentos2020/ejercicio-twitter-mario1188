//variables que enlazan al documento de html
const lista_mensajes = document.getElementById('lista_mensajes');



// event listeners, indica al programa si se creo un evento por parte de los elementos del html
eventListeners();



function eventListeners(){
    // al enviar formulario
    document.getElementById('formulario').addEventListener('submit', 
    agregarTweet);

    // borrar mensajes
    lista_mensajes.addEventListener('click', BorrarMensaje);

    //contenido cargado
    document.addEventListener('DOMContentLoaded', localstorageTodo);
}


// funciones

//agregar tweet del formulario
function agregarTweet(e){
    e.preventDefault();

    // leer valor del textarea
    const mensaje = document.getElementById('tweet').value;

    
    //crear boton de eliminar
    const botonborrar = document.createElement('a'); // crea un elemento del tipo hipervinculo
    botonborrar.classList = 'borrar-mensaje'; // le proporciona al elemento la clase css
    botonborrar.innerText = 'X'; // representacion del elemento creado

    // creacion del elemento y añadir a la lista tweet
    const li = document.createElement('li');
    li.innerText = mensaje;

    li.appendChild(botonborrar);

    lista_mensajes.appendChild(li); // agregar el elemento lista como hijo del div que lo contiene

    //añadir a local storage
    agregarTweet_LocalSotrage(mensaje);

    //console.log(mensaje);
}

// funcion que elimina el mensaje seleccionado del dom html
function BorrarMensaje(e)
{
    e.preventDefault();
    
    if(e.target.className == 'borrar-mensaje')
    {
        //console.log(e.target.parentElement.remove());
        //alert('tweet eliminado');
        borrar_mensaje_localstorage(e.target.parentElement.innerText);
        e.target.parentElement.remove();
    }
    else
    {
        console.log('click en otro lugar');
    }
}

//agregar el mensaje a local storage
function agregarTweet_LocalSotrage(mensaje)
{
    let todos_mensajes;

    todos_mensajes = obtener_mensajes_localstorage();

    //añdir mensaje al arreglo
    todos_mensajes.push(mensaje);

    //convertir de string a local storage
    localStorage.setItem('todos_mensajes', JSON.stringify(todos_mensajes));

}

//checa si hay elementos en localstorage
function obtener_mensajes_localstorage()
{
    let todos_mensajes; //debe ser misma vaiable (nombre) q se encuentra guardada

    if(localStorage.getItem('todos_mensajes') == null)
    {
        todos = []; // si no hay nada crea arreglo vacio
    }
    else
    {
        todos = JSON.parse(localStorage.getItem('todos_mensajes')); // si existe algo
    }

    return todos;
}


//recupera todo lo contenido en localstorage y lo muestra
function localstorageTodo()
{
    let todos_mensajes;

    todos_mensajes = obtener_mensajes_localstorage();

    todos_mensajes.forEach(function(mensaje)
    {
        const botonborrar = document.createElement('a'); // crea un elemento del tipo hipervinculo
        botonborrar.classList = 'borrar-mensaje'; // le proporciona al elemento la clase css
        botonborrar.innerText = 'X'; // representacion del elemento creado

        // creacion del elemento y añadir a la lista tweet
        const li = document.createElement('li');
        li.innerText = mensaje;

        li.appendChild(botonborrar);

        lista_mensajes.appendChild(li); // agregar el elemento lista como hijo del div que lo contiene

    });
}

// borra los mensajes de localstorage
function borrar_mensaje_localstorage(mensaje)
{
    let todos_mensajes, borrar;

    borrar = mensaje.substring(0, mensaje.length -1);

    todos_mensajes = obtener_mensajes_localstorage();

    todos_mensajes.forEach(function(mensaje, index){
        if(borrar === mensaje)
        {
            todos_mensajes.splice(index, 1);
        }        
    });

    console.log(todos_mensajes);

    localStorage.setItem('todos_mensajes', JSON.stringify(todos_mensajes));

}