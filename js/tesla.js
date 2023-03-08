const titulo = document.getElementsByClassName('car-title')[0];

window.addEventListener('scroll', function fading(){
    const posicao = window.scrollY;

    if(posicao > 10){
        titulo.classList.add( 'fading')
    };

    if(posicao < 10){
            titulo.classList.remove('fading')
    }
});
