//funcion que permite cambiar entre ver mas o ver menos
function change( btn )
{
    if ( btn.value === "Ver mas" )
        btn.value = "Ver menos";
    else
        btn.value = "Ver mas";
}
//funcion para los item de noticias (card) hover
$(document).ready(function(){

    $('.prueba').hover(
        // trigger when mouse hover
        function(){
            $(this).animate({
                marginTop: "-=1%",
            },200);
        },

        // trigger when mouse out
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

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    cerrar();
  }
}
function jugar(juego){
    var iframe = crearJuego(juego);
    var padre = document.getElementById("game_drop");
    document.getElementById("modal-body").appendChild(iframe);
}

function cerrar(){
    var iframe = document.getElementById("game_drop");
    var padre = iframe.parentNode;
    padre.removeChild(iframe);
}

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

/* FIN FUNCIONES Y VARIABLES PARA MODAL */
