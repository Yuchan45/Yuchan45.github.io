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