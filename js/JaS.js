
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
/**Genera imagenes en galeria */
function generar_imagenes() {
    //galria de imagenes
    var imagenes = [1, 2, 3]; //arreglo de imagenes
    var galeria = document.getElementById('galeria');//todo el div
    //ciclo 
    for (img of imagenes) {
        galeria.innerHTML += `
    <div class="card imagen" id="animado">
    <a href="#" data-toggle="modal" data-target="#id${img}">
        <img src="imag/${img}.jpg" alt="" class="card-img-top">
        <div class="overlay">
            <h2>Ejemplo galeria</h2>
        </div>
    </a>
</div>
<!-- Modal -->
<div class="modal fade" id="id${img}" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <button type="button" class="close mr-3" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <!--Modal con texto-->
        <div class="card bg-dark text-white">
            <img src="imag/${img}.jpg" alt="" class=" card-img img-fluid rounded op">

            <div class="card-img-overlay">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text">Last updated 3 mins ago</p>
            </div>
        </div>
    </div>
</div>`
    }
}
generar_imagenes();
/*/Generar imagenes en galeria*/
/*scroll
window.addEventListener('scroll', function () {
    let animacion = document.getElementById('animado');
    let posicionOnj1 = animacion.getBoundingClientRect().top;
    console.log(posicionOnj1);
    let tamPantalla = window.innerHeight / 2; //determina la posicion de la imagen y hace el movimiento

    if (posicionOnj1 < tamPantalla) {
        animacion.style.animation = 'mover 1s ease-out';
       // $("#animado").fadeIn(1000);
    }
  });
  
function goToId(idName) {

    if ($("#" + idName).length) {

        var target_offset = $("#" + idName).offset();

        var target_top = target_offset.top;

        $('html,body').animate({ scrollTop: target_top }, { duration: "slow" });

    }
    
}
})*/

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