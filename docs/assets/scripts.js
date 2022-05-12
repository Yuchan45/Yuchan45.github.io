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

// Social media interactions
document.getElementById("social-git").onclick = function () {
    window.open("https://www.github.com", "_blank");
};
document.getElementById("social-ig").onclick = function () {
    window.open("https://www.instagram.com", "_blank");
};
document.getElementById("social-li").onclick = function () {
    window.open("https://www.linkedin.com", "_blank");
};
document.getElementById("social-fb").onclick = function () {
    window.open("https://www.facebook.com", "_blank");
};


// Hamburger Menu interactions
const labels = document.querySelectorAll('.aside-menu nav a');
console.log(labels);
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
    } else {
        title.style.filter = unblur;
        main.style.filter = unblur;
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
