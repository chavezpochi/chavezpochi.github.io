// Funcion que permite cambiar entre ver mas o ver menos
function change( btn )
{
    if ( btn.value === "Ver mas" )
        btn.value = "Ver menos";
    else
        btn.value = "Ver mas";
}

// Funcion para los item de noticias (card) hover
$(document).ready(function(){

    $('.prueba').hover(
        // Movimiento cuando mouse esta encima
        function(){
            $(this).animate({
                marginTop: "-=1%",
            },200);
        },

        // Movimiento cuando mouse ya no esta encima
        function(){
            $(this).animate({
                marginTop: "0%"
            },200);
        }
    );
});

//Funcion para cambiar el color del item de menu seleccionado actualmente(inicio, noticias,etc)
$(document).ready(function() {
    $( ".nav-item" ).bind( "click", function(event) {
        var clickedItem = $( this );
        $( ".nav-item" ).each( function() {
            $( this ).removeClass( "active" );
        });
        clickedItem.addClass( "active" );
    });
});

/* FUNCIONES Y VARIABLES PARA MODAL */
var modal = document.getElementById("exampleModalCenter");
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario hace click en <span> (x), cierra el modal
span.onclick = function() {
  modal.style.display = "none";
  cerrar();
}

// Funcion que permite que cerrar el modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    cerrar();
  }
}

// Funcion invocada para agregar minijuego dentro del modal para jugar
function jugar(juego){
    var iframe = crearJuego(juego);
    var padre = document.getElementById("game_drop");
    document.getElementById("modal-body").appendChild(iframe);
}

// Funcion que permite borrar el minijuego del modal cuando se cierra este
function cerrar(){
    var iframe = document.getElementById("game_drop");
    var padre = iframe.parentNode;
    padre.removeChild(iframe);
}

// Funcion que permite crear el iframe del juego
function crearJuego(juego){
    console.log("entro");
    var iframe = document.createElement("iframe");
    iframe.setAttribute('id', 'game_drop');
    iframe.setAttribute('src', juego);
    iframe.setAttribute('scrolling', 'no');
    iframe.style.width = "100%";
    iframe.style.height = "20em";
    iframe.style.border = "0";
    iframe.style.overflow = "hidden";
    return iframe;
}