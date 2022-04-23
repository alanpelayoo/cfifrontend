const toggle = document.querySelector('.toggle');
const header = document.querySelector('.header');
const navbar = document.querySelector('.navbar');
const sub_menu = document.querySelector('.sub-menu');
const menu = document.querySelector('.menu');
const close_div = document.querySelector('.close_div');
const mediaQuery = window.matchMedia('(min-width: 800px)')

let lastScrollY = window.scrollY;

toggle.addEventListener('click',()=>{
    navbar.style.display ='flex';
    toggle.style.display ='none';
    close_div.style.display ='block';
});

close_div.addEventListener('click',()=>{
    navbar.style.display ='none';
    toggle.style.display ='block';
    close_div.style.display ='none';
});





