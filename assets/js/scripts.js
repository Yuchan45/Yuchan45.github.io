// Social media btns hover animation
$(document).ready(function(){
    $(".box").mouseenter(function(){
        var box = $(this);
        box.addClass('boxSkew');
        setTimeout(function(){
            box.addClass('boxExpand');
        }, 150);
    });

    $(".box").mouseleave(function(){
        var box = $(this);
        setTimeout(function(){
            box.removeClass('boxExpand');
            box.removeClass('boxSkew');
        }, 150);
    });
    
});



// Hamburger Menu interactions
const labels = document.querySelectorAll('.aside-menu nav a');

let menuBtn = document.getElementById("ham-menu");
let hamInner = document.querySelector('.ham-inner');
let aside = document.querySelector('.aside-menu');
let menuOpen = false;


function blurBackground(flag){
// Recibe como parametro un booleano. Si es true, blurea el fondo. Si es false, lo desblurea.
    let title = document.querySelector('.overlay-info');
    let main = document.querySelector('.main');
    let blur = 'blur(3px)';
    let unblur = 'blur(0px)';
    if (flag == true) {
        title.style.filter = blur;
        main.style.filter = blur;
        disableOverflow(true);
    } else {
        title.style.filter = unblur;
        main.style.filter = unblur;
        disableOverflow(false);
    }
}

function disableOverflow(flag) {
    // Recibe como parametro un booleano. Si es true, deshabilita el scroll. Si es false, lo habilita.
    let body = document.querySelector('body');
    if (flag == true){
        body.style.overflowY = 'hidden';
    } else {
        body.style.overflowY = 'auto';
    }
}



menuBtn.addEventListener('click', function() {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        aside.classList.add('active');
        blurBackground(true);
        menuOpen = true;
    }else {
        menuBtn.classList.remove('open');
        aside.classList.remove('active');
        blurBackground(false);
        menuOpen = false;
    }
});



labels.forEach(function (label) {
    // Recide un array de labels y les agrega el evento onClick, el cual esconde el menuAside.
    label.addEventListener('click', () => {
        menuBtn.classList.remove('open');
        aside.classList.remove('active');
        blurBackground(false);
    });
});



// Alert, still in development.
// let dayNightBtn = document.querySelector('.night-mode-container');
// dayNightBtn.addEventListener('click', () => {
//     alert("Funcionalidad de modo dia y noche aún en desarrollo!");
// });