window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for(let i=0; i<reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 80;

        if (revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('reveal-active');
        } else {
            reveals[i].classList.remove('reveal-active');
        }
    }

}