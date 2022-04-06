const toggle = document.querySelector('.toggle');
const navbar = document.querySelector('.navbar');
const close_div = document.querySelector('.close_div');

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

