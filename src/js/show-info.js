import json from '../data/data.json5';

let menuButtons = document.querySelectorAll('.menu-btn');
let blockInfo = document.querySelector('.menu-content-info');
let menuImg = document.querySelector('.menu-content-img');

menuButtons.forEach(btn => btn.addEventListener('click', () => {
    if(btn.classList.contains('menu-btn-tool')) return;
    menuButtons.forEach(btn => {
        if(!btn.classList.contains('menu-btn-active') && !btn.classList.contains('hidden')) btn.classList.add('hidden');
        else {
            btn.classList.remove('hidden');
        }
    });
    if(btn.classList.contains('menu-btn-active')) {
        blockInfo.innerHTML += json.lounge.info;
        blockInfo.style.animation = 'showBlock 0.8s linear forwards';
        btn.innerHTML += '  ←';
        menuImg.src = json.lounge.imglink;
        menuImg.alt = json.lounge.name;
        menuImg.style.animation = 'showBlock 0.8s linear forwards';
    }
    else {
        blockInfo.innerHTML = '';
        btn.innerHTML = btn.innerHTML.slice(0, btn.innerHTML.length - 3);
        blockInfo.style.animation = '';
        menuImg.style.animation = '';
        menuImg.src = json.imglink;
        menuImg.alt = json.title;
    }
}));