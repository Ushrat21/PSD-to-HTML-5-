const menuIcon = document.querySelector('.menu-btn_burger');
const navBar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => { 
    navBar.classList.toggle("change");
});



$(document).ready(function(){
    
      $(".progress-bar").ProgressBar();
    
});


$('.counter').counterUp({
    delay: 10,
    time: 1000
});