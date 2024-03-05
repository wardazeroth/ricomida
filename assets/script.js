const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function cambiar_titulo1 () {
    $('#titulo1').toggleClass('text-danger')
}

$('#titulo1').on('dblclick', cambiar_titulo1)

function cambiar_titulo2 () {
    $('#titulo2').toggleClass('text-danger')
}

$('#titulo2').on('dblclick', cambiar_titulo2)

function alerta() {
    alert('Email enviado con exito...')
}
$('#enviarAlert').on('click', alerta)

function desaparecer_aparecer_tarjeta() {
    $(".card-text").toggle(); 
}
$("#tarjeta, #tarjeta2, #tarjeta3").on('click', desaparecer_aparecer_tarjeta)


// $("#tarjeta, #tarjeta2, #tarjeta3").on('click', function(){
//     $(".card-text").toggle(); 
// });


