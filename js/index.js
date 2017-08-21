

$(document).ready(function(){
    
    var estado = false;
    
    $('#btn-toggle').on('click', function(){

        $('.seccionToggle').slideToggle();    
        
    if (estado == true){
        $(this).text("Cuenta");
        $('body').css({
            "overflow": "auto"
        });
        estado=false;
     } 
    
        else {
         
        $(this).text("Cerrar");
        $('body').css({
            "overflow": "hidden"
        });
            estado=true;
    }
        
    });
    
    
    $('#img-toggle').on('click', function(){
        $('#btn-toggle').text("Cuenta");
        $('.seccionToggle').slideToggle();    
        
    if (estado == true){
        
        $('body').css({
            "overflow": "auto"
        });
        estado=false;
     } 
    
        else {
            $('#btn-toggle').text("Cerrar");
            $('body').css({
            "overflow": "hidden"
        });
            estado=true;
    }
        
    });
});