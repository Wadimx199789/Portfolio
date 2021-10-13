let cancelBtn = document.querySelector('.menu-cancel__btn');
let openBtn = document.querySelector('.menu-open__btn');
let navBar = document.querySelector('.navbar');

openBtn.addEventListener("click", function () {
    openBtn.style.opacity = "0";
    openBtn.style.pointerEvents = "none";
    navBar.classList.add("active");
});
cancelBtn.addEventListener("click", function () {
    openBtn.style.opacity = "1";
    openBtn.style.pointerEvents = "auto";
    navBar.classList.remove('active');
});

// Sticky navigation menu
let nav = document.querySelector('nav');
window.onscroll = function(){
    if(document.documentElement.scrollTop>20){
        nav.classList.add("sticky");
    }
    else{
        nav.classList.remove("sticky");
    }
}
