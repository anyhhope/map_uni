let menu = document.querySelector('.menu');
let btnOpen = document.querySelector('.btn-to-open');
let map = document.querySelector('.map');

btnOpen.addEventListener('click', () => {
    menu.classList.toggle('menu-active');
    if(menu.classList.contains('menu-active')) map.style.transform = 'translateX(98px)';
    else map.style.transform = '';
})