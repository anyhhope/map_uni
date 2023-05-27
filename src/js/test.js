import json from '../data/data.json5';
// console.log('hello world');

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.bio); // output `Tom Preston-Werner`

// document.querySelector('.for_data').innerHTML = json.owner.bio;

//переключение по кнопкам картинок в меню
//кнопки работают, но hover в css почему-то перестал работать (когда выезжало меню при наведении)
//надо проработать как сделать чтобы меню выезжало (что-то в стилях css)
const clickElem = document.querySelectorAll('.menu-btn-2');
const clickElem1 = document.querySelectorAll('.menu-btn-1');
const clickBtn = document.querySelectorAll('.menu-btn');
clickElem.forEach(el => el.addEventListener('click', function () {
    document.querySelector('.menu-img-2').style.display = 'block';
    document.querySelector('.menu-img-1').style.display = 'none';
}));
clickElem1.forEach(el => el.addEventListener('click', function () {
    document.querySelector('.menu-img-1').style.display = 'block';
    document.querySelector('.menu-img-2').style.display = 'none';
}));
clickBtn.forEach(el => el.addEventListener('click', function () {
    document.querySelector('.menu').classList.add('menu-active');
}));