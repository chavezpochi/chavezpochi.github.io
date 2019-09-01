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
