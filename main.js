var ingresar = document.getElementById('contenedorFormIngreso')
var registro = document.getElementById('contenedorFormRegistro')
var fondo = document.getElementById('fondo')
var botonRegistrarse = document.getElementById('botonRegistrarse')
var botonIngresar = document.getElementById('botonIngresar')

if (window.matchMedia("(max-width: 768px)").matches) {
    botonRegistrarse.addEventListener('click', function () {
        setTimeout(function () {
            fondo.style.top="0"
        }, 0)
        setTimeout(function () {
            ingresar.style.visibility="hidden"
            registro.style.visibility="visible"
        }, 1000)
        setTimeout(function () {
            fondo.style.top="-100%"
        }, 1500)
    })
    botonIngresar.addEventListener('click', function () {
        setTimeout(function () {
            registro.style.visibility="hidden"
            fondo.style.top="0"
        },0)
        setTimeout(function () {
            ingresar.style.visibility="visible"
            fondo.style.top="-100%"
        },1500)
    })
} else {
    botonRegistrarse.addEventListener('click', function () {
        setTimeout(function () {
            fondo.style.transform="translateX(-100%)"
        }, 0)
    })
    botonIngresar.addEventListener('click', function () {
        setTimeout(function () {
            fondo.style.transform="translateX(0%)"
        },0)
    })
}