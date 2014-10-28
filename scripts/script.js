$(document).ready(function () {
    $('#tipo_pedras_sortidas').click( function(){
        if($(this).is(':checked')){
            $('#tipo_pedras').prop('disabled', true);
        }else{
            $('#tipo_pedras').prop('disabled', false);
        }
    });
});