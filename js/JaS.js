$(window).scroll(function () {
    if ($("#menu").offset().top > 56) {
        $("#menu").addClass("azul");

    } else{
        $("#menu").removeClass("azul");
    }

});



var contador=1;
function navbar(){
    /*efecto navbar*/
    $(window).scroll(function () {
        if ($("#menu").offset().top > 56 ) {
            $("#menu").addClass("azul");
            
        }     
    });
}


window.onload = function () {
    document.getElementById('nav-button').addEventListener("click", clic);
    contador=1;
}


function clic() {
    if (contador==1){
        $("#menu").addClass("azul");
        contador=0;  
    }else{
        contador=1;
        navbar();
        $("#menu").removeClass("azul");
    }

   
}

/*/efecto navbar
$(window).scroll(function(event) {
   // var scrollLeft = $(window).scrollLeft();
   let animacion = document.getElementById('animado');
   let tamPantalla = window.innerHeight / 2;
   let posicionOnj1 = animacion.getBoundingClientRect().top;
    var scrollTop = $(window).scrollTop();
    console.log("posicion "+posicionOnj1);
    console.log("tamPan "+tamPantalla);
    console.log("Vertical "+scrollTop);




    function main () {
    $(window).scroll(function () {
        if ($("#menu").offset().top > 56 && document.getElementById('nav-button').addEventListener("click", clic)) {
            $("#menu").addClass("azul");
           
        }    
    });

}
})*/