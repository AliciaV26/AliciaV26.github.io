(function(){
    const sliders = [...document.querySelectorAll('.expo_body')]; /*Tres puntos para que sea array*/
    /*El # representa el id de las flechas*/
    const buttonNext = document.querySelector('#next'); 
    const buttonBefore = document.querySelector('#before')
    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    
    function changePosition(add) {
        const currenteExpo = document.querySelector('.expo_body--show').dataset.id;
        value = Number(currenteExpo); /* Number para  sumar y no concatenar*/
        value += add;

        sliders[Number(currenteExpo)-1].classList.remove('expo_body--show');

        /* Caso donde está en la última slide*/
        if (value === (sliders.length+1) || value === 0) {
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value-1].classList.add('expo_body--show');
    }

})();