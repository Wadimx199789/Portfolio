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
//typing animation script 
var typed = new Typed(".typing",{
    strings: ["Front-end developer", "Freelancer"],
    typeSpeed:80,
    backSpeed:40,
    loop:true
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


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const lines = entry.target.querySelectorAll('.line')
      lines.forEach(line=>{
        if (entry.isIntersecting) {
            line.classList.add('square');
            return; // если класс добавлен, продолжать уже не надо
          }
          // перемещение завершено, теперь надо удалить класс
          line.classList.remove('square');
        });
      });
      
  });
  observer.observe(document.querySelector('.skills__inner'));
