const swipper = new Swiper('.home-slider', {
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
const closeform = document.querySelector('#close-form');
const cartbtn = document.querySelector('#cart-btn');

cartbtn.onclick = () =>{
  cart.classList.add('active')
}

closeform.onclick = () =>{
  cart.classList.remove('active')
}


menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}
