$(document).ready(function(){
    
    // sticky
    var comprobar = 'si' 
    var windowWidth = $(window).width();
    if(windowWidth < 852){
        window.addEventListener("scroll", function(){
            const header = this.document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY >=0);
        })
        
        const navigation = document.querySelector('nav')
        document.querySelector('.toggle').onclick = function(){
            this.classList.toggle('active');
            navigation.classList.toggle('active')
        }
    }

    //imagenes modal

    const overlay = document.getElementById('overlay');
    document.querySelectorAll('.trabajos .row .contenedor .imagen-contenedor img').forEach((elemento) => {
    
    elemento.addEventListener('click', () => {
            const ruta = elemento.getAttribute('src');
    
            overlay.classList.add('active');
            document.querySelector('#overlay img').src = ruta
        })
    })

    //event listener cerrar
    document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
        overlay.classList.remove('active')
    })

    //eventlistener overlay
    overlay.addEventListener('click', (evento) => {
        // overlay.classList.remove('active');
        evento.target.id === 'overlay' ? overlay.classList.remove('active') : '';
    })
})