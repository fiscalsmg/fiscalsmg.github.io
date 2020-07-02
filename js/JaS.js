var contador = 1;
navbar();

function navbar() {
    /*efecto navbar*/
    $(window).scroll(function() {
        if ($("#menu").offset().top > 56) {
            $("#menu").addClass("azul");
        } else {
            $("#menu").removeClass("azul");
        }
    });
}


window.onload = function() {
    document.getElementById('nav-button').addEventListener("click", clic);
    contador = 1;
}


function clic() {
    if (contador == 1) {
        $("#menu").addClass("azul");
        contador = 0;
    } else {
        contador = 1;
        navbar();
        $("#menu").removeClass("azul");
    }


}

window.onscroll = function() { myFunction() };

function myFunction() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        //document.getElementById("myImg").className = "slideUp";
        console.log("A");
    }
}