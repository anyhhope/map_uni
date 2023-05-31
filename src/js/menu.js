let menu = document.querySelector('.menu');
let btnOpen = document.querySelector('.btn-to-open');
let map = document.querySelector('.map');
let menuButtons = document.querySelectorAll('.menu-btn');
let blockInfo = document.querySelector('.menu-content-info');
import json from '../data/lang.json5';
import json_data from '../data/data.json5';


let lang = 'ru';

btnOpen.addEventListener('click', () => {
    menu.classList.toggle('menu-active');
    if (menu.classList.contains('menu-active')) map.style.transform = 'translateX(98px)';
    else map.style.transform = '';
})

let btnLang = document.querySelector('.btn-lang');

btnLang.addEventListener('click', () => {
    if (lang == 'ru') {
        lang = 'en';
        btnLang.innerHTML = 'EN';
    }
    else {
        lang = 'ru';
        btnLang.innerHTML = 'RU';
    }
    menuButtons.forEach(btn => {
        let typeOfBtn = btn.id.slice(4);
        if (json[typeOfBtn]) btn.innerHTML = json[typeOfBtn][lang];
        if (!btn.classList.contains('menu-btn-tool') && btn.classList.contains('menu-btn-active')) {
            btn.innerHTML += '  ←';
            blockInfo.style.animation = '';
            blockInfo.innerHTML = '';
            blockInfo.innerHTML = json_data[typeOfBtn].info[lang];
            blockInfo.style.animation = 'showBlock 0.8s linear forwards';
        }
    });
});

export { lang };