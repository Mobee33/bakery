const swiper = new Swiper('.home-slider', {
  grabCursor:true,
  loop:true,
  centeredSlides:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

const navbar = document.querySelector('.header .navbar');
const cart = document.querySelector('.cart-items-container');
const menu = document.querySelector('#menu-btn');
const closeForm = document.querySelector('#close-form');
const cartBtn = document.querySelector('#cart-btn');

cartBtn.onclick = () =>{
  cart.classList.add('active');
};

closeForm.onclick = () =>{
  cart.classList.remove('active');
};

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};
