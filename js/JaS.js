
/*efecto navbar*/
$(window).scroll(function () {
    if ($("#menu").offset().top > 56) {
        $("#menu").addClass("azul");

    } else {
        $("#menu").removeClass("azul");

    }


});

window.onload = function () {
    document.getElementById('nav-button').addEventListener("click", clic);
}
function clic() {
    document.getElementById('menu').classList.add("celNav")
}
/*/efecto navbar*/
$(window).scroll(function(event) {
   // var scrollLeft = $(window).scrollLeft();
   let animacion = document.getElementById('animado');
   let tamPantalla = window.innerHeight / 2;
   let posicionOnj1 = animacion.getBoundingClientRect().top;
    var scrollTop = $(window).scrollTop();
    console.log("posicion "+posicionOnj1);
    console.log("tamPan "+tamPantalla);
    console.log("Vertical "+scrollTop);
})