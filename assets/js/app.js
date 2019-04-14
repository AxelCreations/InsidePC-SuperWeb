// $(document).ready(function(){
//     var elmnt = document.getElementsByTagName("main")[0];
//     elmnt.scrollTop += 5072;
// });

$('#main-footer').fadeOut();
$('main').on('scroll', function(){
    if ($('main').scrollTop() < 657){
        $('#main-footer').fadeOut();
    } else{
        $('#main-footer').fadeIn();
    }
});

//Active the popover functions
$(function () {
    $('[data-toggle="popover"]').popover();
})

//#processors section timeline shower
$('#processors .img-container-1').click(function(){
    $('#processors .img-container-1').toggleClass("line");
    $('#processors .img-container-2.line').toggleClass("line");
    $('#processors .img-container-3.line').toggleClass("line");
    $('#processors .img-container-4.line').toggleClass("line");
    $('#processors .img-container-5.line').toggleClass("line");
    $('#processors .img-container-6.line').toggleClass("line");
});

$('#processors .img-container-2').click(function(){
    $('#processors .img-container-2').toggleClass("line");
    $('#processors .img-container-3.line').toggleClass("line");
    $('#processors .img-container-4.line').toggleClass("line");
    $('#processors .img-container-5.line').toggleClass("line");
    $('#processors .img-container-6.line').toggleClass("line");
});

$('#processors .img-container-3').click(function(){
    $('#processors .img-container-3').toggleClass("line");
    $('#processors .img-container-4.line').toggleClass("line");
    $('#processors .img-container-5.line').toggleClass("line");
    $('#processors .img-container-6.line').toggleClass("line");
});

$('#processors .img-container-4').click(function(){
    $('#processors .img-container-4').toggleClass("line");
    $('#processors .img-container-5.line').toggleClass("line");
    $('#processors .img-container-6.line').toggleClass("line");
});

$('#processors .img-container-5').click(function(){
    $('#processors .img-container-5').toggleClass("line");
    $('#processors .img-container-6.line').toggleClass("line");
});

$('#processors .img-container-6').click(function(){
    $('#processors .img-container-6').toggleClass("line");
});

