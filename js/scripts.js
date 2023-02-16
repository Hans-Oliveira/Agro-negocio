$( document ).ready(function() {
    
});

/* function abrirModalAction() {
    $('#exampleModalCenter').modal('show'); 
} */


/*  */

$(".whats").click(function() {
    
    let produto = $(this).parents(".card").children(".card-body").children().text();

    let textWhatsapp = `Junio, Gostaria de saber um pouco mais sobre o porduto ${produto}, quantidades e valores`
    textWhatsapp = textWhatsapp.replace(/\s/g, "%20");

    window.location.href = `https://api.whatsapp.com/send?phone=5517997323133&text=${textWhatsapp}`;
});

$(".whats2").click(function() {

    let produto = $(this).parent().find('h2').text();

    let textWhatsapp = `Junio, Gostaria de saber um pouco mais sobre o porduto ${produto}, quantidades e valores`
    textWhatsapp = textWhatsapp.replace(/\s/g, "%20");

    window.location.href = `https://api.whatsapp.com/send?phone=5517997323133&text=${textWhatsapp}`;
    
});
