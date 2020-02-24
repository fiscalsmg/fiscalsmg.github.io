
$(window).scroll(function () {
    if ($("#menu").offset().top > 56) {
        $("#menu").addClass("azul");

    } else {
        $("#menu").removeClass("azul");

    }


});

window.onload = function () {
    // document.getElementById('navbarTogglerDemo01').onclick=clic();
    document.getElementById('nav-button').addEventListener("click", clic);
}
function clic() {
    document.getElementById('menu').classList.add("celNav")
    //document.getElementById('menu').style.cssText='background:linear-gradient(to bottom, rgb(63, 65, 64),rgb(117, 95, 168)); color: black';
    //document.getElementById('navbarTogglerDemo01').addClass
    //document.getElementById('navbarTogglerDemo01').style.color='black';
    //$("#menu").addClass("azul");
    //document.getElementById('navbarTogglerDemo01').style.backgroundColor = "black";
}

//galria de imagenes
var imagenes = [1, 2, 3, 4]; //arreglo de imagenes
var galeria = document.getElementById('galeria');//todo el div
//ciclo 
for (img of imagenes) {
    galeria.innerHTML += `
    <div class="card" id="animado">
    <a href="#" data-toggle="modal" data-target="#id${img}">
        <img src="imag/galeria/${img}.jpg" alt="" class="card-img-top">
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
            <img src="imag/galeria/${img}.jpg" alt="" class=" card-img img-fluid rounded op">

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

/*scroll*/
window.addEventListener('scroll', function () {
    let animacion = document.getElementById('animado');
    let posicionOnj1 = animacion.getBoundingClientRect().top;
    console.log(posicionOnj1);
    let tamPantalla = window.innerHeight / 2; /*determina la posicion de la imagen y hace el movimiento*/

    if (posicionOnj1 < tamPantalla) {
        animacion.style.animation = 'mover 1s ease-out';
    }
})

function apareceScroll() {
    var html = document.getElementsByTagName("body")[0];
    var elementoAparece = document.getElementsByClassName("aparece");
    document.addEventListener("wheel", function () {
        var topeVent = html.scrollTop;
        for (i = 0; i < elementoAparece.length; i++) {
            var topeAparece = elementoAparece[i].offsetTop;
            if (topeVent > topeAparece - 400) {
                elementoAparece[i].style.opacity = 1;
            }
        }
    })
}
apareceScroll();

    