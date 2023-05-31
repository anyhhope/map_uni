//клик по этажу переключение вид на выбранный этаж
const level = document.querySelectorAll('.b-floor-wrap'); //массив этажей
const levels = document.querySelector('.b-floors'); //wrapper всех этажей
const library = document.querySelector('.b-floor-1-2-svg'); //второй этаж библиотеки

level.forEach(el => el.addEventListener('click', function () {
    el.classList.add('floor-current');
    level.forEach(levl => { if (!levl.classList.contains(['floor-current', 'hidden'])) levl.classList.add('hidden') });
    if (el.classList.contains('b-floor-1-wrap')) firstFloor(el);
    else levels.classList.add('floor-flatten');
    btnArrow.classList.remove('hidden');
}));

function firstFloor(firstFloor) {
    changeClass(library, 'hidden');
    changeClass(levels, 'b-first-floor');
    if (library.classList.contains('hidden')) levels.classList.add('floor-flatten');
    else levels.classList.remove('floor-flatten');
}


//выбор этажа по кнопке
const btnFloor = document.querySelectorAll('.buttons-floor');
const btnFloorAll = document.querySelector('.buttons-floor-wrap');
const btnArrow = document.querySelector('.btn-floor-back-wrap');
const btnHome = document.querySelector('.btn-home-wrap');

btnFloor.forEach(el => el.addEventListener('click', function () {
    let index = el.id.slice(-1);
    for(let levl of level){
        if(levl.classList.contains('floor-current') && levl.id.slice(-1) == index) {
            return;
        }
        if(levl.classList.contains('b-floor-1-wrap') && levl.classList.contains('floor-current')) {
            library.classList.add('hidden');
        }
        levl.classList.remove('floor-current');
    }
    if (levels.classList.contains('hidden')) levels.classList.remove('hidden');
    level.forEach(levl => { if (!levl.classList.contains(['floor-current', 'hidden'])) levl.classList.add('hidden') });
    if (index == 1) firstFloor(level[index]);
    else {
        levels.classList.add('floor-flatten');
        if (levels.classList.contains('b-first-floor')) levels.classList.remove('b-first-floor');
    }
    level[index].classList.add('floor-current');
    btnArrow.classList.remove('hidden');
}));

//возвращение к общему виду этажей по кнопке стрелке
btnArrow.addEventListener('click', () => {
    level.forEach(levl => levl.classList.remove('hidden'));
    level.forEach(levl => {
        if (levl.classList.contains('floor-current')) {
            levl.classList.remove('floor-current');
            if (levl.classList.contains('b-floor-1-wrap')) firstFloor(levl);
        }
    });
    levels.classList.remove('floor-flatten');
    if (levels.classList.contains('hidden')) levels.classList.remove('hidden');
    if (levels.classList.contains('b-first-floor')) levels.classList.remove('b-first-floor');
    if (!library.classList.contains('hidden')) library.classList.add('hidden');
    btnArrow.classList.add('hidden');
});

let allBuildings = document.querySelector('.all-buildings');
let wasArrow = false;
//переход на вид всех корпусов по кнопке круг
btnHome.addEventListener('click', () => {
    levels.classList.toggle('hidden');
    if(allBuildings.classList.contains('hidden') && !btnArrow.classList.contains('hidden')) {
        btnArrow.classList.add('hidden');
        wasArrow = true;
    }
    else if(!allBuildings.classList.contains('hidden') && btnArrow.classList.contains('hidden') && wasArrow) {
        btnArrow.classList.remove('hidden');
        wasArrow = false;
    }
    allBuildings.classList.toggle('hidden');
    btnFloorAll.classList.toggle('hidden');
});

function changeClass(el, className) {
    if (el.classList.contains(className)) el.classList.remove(className);
    else el.classList.add(className);
}