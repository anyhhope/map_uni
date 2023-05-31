const bBuilding = [
    {
        lounge: [],
        labs: ['b-021', 'b-022', 'b-025', 'b-026', 'b-027', 'b-028'],
        lift: ['b-0-elevator-down-1', 'b-0-elevator-down-2'],
        stairs: ['b-0-staircase-center', 'b-0-staircase-right'],
        wardrobe: ['b-0-wardrobe'],
        class: [],
        library: [],
        dk: [],
        restroom: ['b-0-toilet-w', 'b-0-toilet-m'],
        food: ['b-0-snack-background'],
        money: ['bankomat-icon-background', 'bankomat-icon-background_2'],
        canteen: [],
    },
    {
        lounge: ['b-1-lounge-zone-1', 'b-1-lounge-zone-2', 'b-1-lounge-zone-3', 'b-1-lounge-zone-4'],
        labs: [],
        lift: ['b-1-elevator-up-1', 'b-1-elevator-up-2', 'b-1-elevator-down-1', 'b-1-elevator-down-2'],
        stairs: ['b-1-staircase-center', 'b-1-staircase-right', 'b-1-staircase-library-down', 'b-1-staircase-library-up'],
        wardrobe: [],
        class: ['b-11', 'b-12', 'b-3', 'b-4'],
        library: ['b-1-library', 'b-1-library-1', 'b-1-2-library-background'],
        dk: [],
        restroom: ['b-1-toilet-w', 'b-1-toilet-m', 'b-1-toilet-m-invalid'],
        food: [],
        money: [],
        canteen: ['canteen'],
    },
    {
        lounge: ['b-2-lounge-zone-1', 'b-2-lounge-zone-2', 'b-2-lounge-zone-3', 'b-2-lounge-zone-4'],
        labs: [],
        lift: ['b-2-elevator-up-1', 'b-2-elevator-up-2', 'b-2-elevator-down-1', 'b-2-elevator-down-2'],
        stairs: ['b-2-staircase-center'],
        wardrobe: [],
        class: ['b-24', 'b-23'],
        library: [],
        dk: ['b-2-house-of-culture'],
        restroom: ['b-2-toilet-w', 'b-2-toilet-m'],
        food: [],
        money: [],
        canteen: [],
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
    dk: '#ff9100',
    restroom: '#0a1e64',
    food: '#0a1e64',
    money: '#0a1e64',
    canteen: '#ff9100',
}

//изменения цвета всех элементов по кнопке
const menuButtons = document.querySelectorAll('.menu-btn');

function changeColourById(element, colour) {
    for (let i = 0; i < element.length; i++) {
        let room = document.getElementById(element[i]);
        if(room.id == 'b-1-2-library-background' && room.style.fill == 'rgb(140, 0, 175)') {
            room.style.fill = '#ffffff';
        }
        else room.style.fill = colour;
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
    if(!btn.classList.contains('menu-btn-tool')) btn.classList.add('hidden');
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