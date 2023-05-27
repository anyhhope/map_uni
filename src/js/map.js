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




//клик по этажу переключение вид на выбранный этаж
const level = document.querySelectorAll('.b-floor-wrap');
const levels = document.querySelector('.b-floors');
const library = document.querySelector('.b-floor-1-2-svg');
changeClass(library, 'hidden');

level.forEach(el => el.addEventListener('click', function () {
    level.forEach(levl => levl.classList.add('hidden'));
    if (el.classList.contains('b-floor-1-wrap')) firstFloor(el);
    else levels.classList.add('floor-flatten');
    el.classList.add('floor-current');
    btnArrow.classList.remove('hidden');
}));


//выбор этажа по кнопке
const btnFloor = document.querySelectorAll('.buttons-floor');
const btnArrow = document.querySelector('.btn-floor-back-wrap');
const btnHome = document.querySelector('.btn-home-wrap');

btnFloor.forEach(el => el.addEventListener('click', function () {
    let index = el.id.slice(-1);
    if (levels.classList.contains('hidden')) levels.classList.remove('hidden');
    level.forEach(levl => levl.classList.add('hidden'));
    level.forEach(levl => levl.classList.remove('floor-current'));
    if (index == 1) firstFloor(level[index]);
    else levels.classList.add('floor-flatten');
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
    btnArrow.classList.add('hidden');
});

//переход на вид всех корпусов по кнопке круг
btnHome.addEventListener('click', () => {
    levels.classList.toggle('hidden'); //пока что просто все этажи пропадают
});

function firstFloor(firstFloor) {
    changeClass(library, 'hidden');
    changeClass(levels, 'b-first-floor');
    // if (firstFloor.classList.contains('floor-current')) levels.classList.add('floor-flatten');
    // else {
        // changeClass(library, 'hidden');
    // }
}

function changeClass(el, className) {
    if (el.classList.contains(className)) el.classList.remove(className);
    else el.classList.add(className);
}

const bBuilding = [
    {
        lounge: [],
        labs: ['b-021', 'b-022', 'b-025'],
        lift: ['b-0-elevator-down-1', 'b-0-elevator-down-2'],
        stairs: ['b-0-staircase-center', 'b-0-staircase-right'],
        wardrobe: ['b-0-wardrobe'],
        class: [],
        library: [],
        dk: []
    },
    {
        lounge: ['b-1-lounge-zone-1', 'b-1-lounge-zone-2', 'b-1-lounge-zone-3', 'b-1-lounge-zone-4'],
        labs: [],
        lift: ['b-1-elevator-up-1', 'b-1-elevator-up-2', 'b-1-elevator-down-1', 'b-1-elevator-down-2'],
        stairs: ['b-1-staircase-center', 'b-1-staircase-right', 'b-1-staircase-library-down', 'b-1-staircase-library-up'],
        wardrobe: [],
        class: ['b-11', 'b-12', 'b-3', 'b-4'],
        library: ['b-1-library', 'b-1-library-1'],
        dk: []
    },
    {
        lounge: ['b-2-lounge-zone-1', 'b-2-lounge-zone-2', 'b-2-lounge-zone-3', 'b-2-lounge-zone-4'],
        labs: [],
        lift: ['b-2-elevator-up-1', 'b-2-elevator-up-2', 'b-2-elevator-down-1', 'b-2-elevator-down-2'],
        stairs: ['b-2-staircase-center'],
        wardrobe: [],
        class: ['b-24', 'b-23'],
        library: [],
        dk: ['b-2-house-of-culture']
    }
]

const colors = {
    lounge: '#3c9b05',
    labs: '#008787',
    lift: '#0a1e64',
    stairs: '#0a1e64',
    wardrobe: '#0a1e64',
    class: '#aa0a41',
    library: '#8c00af',
    dk: '#ff9100'
}
//изменения цвета всех элементов по кнопке
const menuButtons = document.querySelectorAll('.menu-btn');

function changeColourById(element, colour) {
    for (let i = 0; i < element.length; i++) {
        let room = document.getElementById(element[i]);
        room.style.fill = colour;
    }
}

function chooseRoom(btn) {
    let target = btn.id.slice(4);
    btn.classList.add('menu-btn-active');
    bBuilding.forEach(floor => changeColourById(floor[target], colors[target]));
}

function removeRoom(btn) {
    let target = btn.id.slice(4);
    btn.classList.remove('menu-btn-active');
    bBuilding.forEach(floor => changeColourById(floor[target], '#c0d5f2'));
}

menuButtons.forEach(btn => btn.addEventListener('click', function () {
    if (btn.classList.contains('menu-btn-active')) {
        removeRoom(btn);
    }
    else {
        menuButtons.forEach(function (menuBtn) {
            if (menuBtn.classList.contains('menu-btn-active')) {
                removeRoom(menuBtn);
            }
        })
        chooseRoom(btn);
    }
}));