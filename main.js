'use strict';

let modal = document.querySelectorAll('.modal')
let btn_white = document.querySelector('.btn_white')
let modal__close = document.querySelector('.modal__close')
let image = document.querySelectorAll('.image');
let image9 = document.querySelectorAll('.image9');
let prev = document.querySelector('.image-prev');
let next = document.querySelector('.image-next');
let prev2 = document.querySelector('.image-prev2');
let next2 = document.querySelector('.image-next2');
let current = document.querySelector('#current');
let current2 = document.querySelector('#current2');
let button_1 = document.querySelector('.button_1');

let i = 0;
let x = 1;

for (let i = 0; i < image.length; i++) {
    image[i].style.display = 'none';
}
image[0].style.display = 'block';

next.addEventListener('click', () => {
    image[i].style.display = 'none';
    if (i < 2) {
        i++; 
        x++;
    } else {
        i = 0; 
        x = 1;
    }
    image[i].style.display = 'block';
    current.innerHTML = `0${x}`;
});

prev.addEventListener('click', () => {
    image[i].style.display = 'none';
    if (i > 0) {
        i--; 
        x--;
    } else {
        i = 2; 
        x = 3;
    }
    image9[i].style.display = 'block';
    current.innerHTML = `0${x}`;
});

for (let i = 0; i < image9.length; i++) {
    image9[i].style.display = 'none';
}
image9[0].style.display = 'block';

next2.addEventListener('click', () => {
    image9[i].style.display = 'none';
    if (i < 2) {
        i++; 
        x++;
    } else {
        i = 0; 
        x = 1;
    }
    image9[i].style.display = 'block';
    current2.innerHTML = `0${x}`;
});

prev2.addEventListener('click', () => {
    image9[i].style.display = 'none';
    if (i > 0) {
        i--; 
        x--;
    } else {
        i = 2; 
        x = 3;
    }
    image9[i].style.display = 'block';
    current2.innerHTML = `0${x}`;
});

button_1.addEventListener('click', () => {
    modal[i].style.display = 'block'
})

modal__close.addEventListener('click', () => {
    modal[i].style.display = 'none'
})


document.addEventListener('DOMContentLoaded', function() {
    const scrollDiv = document.getElementById('scrollDiv');
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > 0) {
        scrollDiv.classList.add('yellow');
        scrollDiv.classList.remove('white');
      } else {
        scrollDiv.classList.add('white');
        scrollDiv.classList.remove('yellow');
      }
    });
  });