/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/map.js */ \"./src/js/map.js\");\n/* harmony import */ var _js_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_map_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_choose_room_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/choose-room.js */ \"./src/js/choose-room.js\");\n/* harmony import */ var _js_choose_room_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_choose_room_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/menu.js */ \"./src/js/menu.js\");\n/* harmony import */ var _js_show_info_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/show-info.js */ \"./src/js/show-info.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://map_uni/./src/index.js?");

/***/ }),

/***/ "./src/js/choose-room.js":
/*!*******************************!*\
  !*** ./src/js/choose-room.js ***!
  \*******************************/
/***/ (() => {

eval("const bBuilding = [\r\n    {\r\n        lounge: [],\r\n        labs: ['b-021', 'b-022', 'b-025', 'b-026', 'b-027', 'b-028'],\r\n        lift: ['b-0-elevator-down-1', 'b-0-elevator-down-2'],\r\n        stairs: ['b-0-staircase-center', 'b-0-staircase-right'],\r\n        wardrobe: ['b-0-wardrobe'],\r\n        class: [],\r\n        library: [],\r\n        dk: [],\r\n        restroom: ['b-0-toilet-w', 'b-0-toilet-m'],\r\n        food: ['b-0-snack-background'],\r\n        money: ['bankomat-icon-background', 'bankomat-icon-background_2'],\r\n    },\r\n    {\r\n        lounge: ['b-1-lounge-zone-1', 'b-1-lounge-zone-2', 'b-1-lounge-zone-3', 'b-1-lounge-zone-4'],\r\n        labs: [],\r\n        lift: ['b-1-elevator-up-1', 'b-1-elevator-up-2', 'b-1-elevator-down-1', 'b-1-elevator-down-2'],\r\n        stairs: ['b-1-staircase-center', 'b-1-staircase-right', 'b-1-staircase-library-down', 'b-1-staircase-library-up'],\r\n        wardrobe: [],\r\n        class: ['b-11', 'b-12', 'b-3', 'b-4'],\r\n        library: ['b-1-library', 'b-1-library-1', 'b-1-2-library-background'],\r\n        dk: [],\r\n        restroom: ['b-1-toilet-w', 'b-1-toilet-m', 'b-1-toilet-m-invalid'],\r\n        food: [],\r\n        money: [],\r\n    },\r\n    {\r\n        lounge: ['b-2-lounge-zone-1', 'b-2-lounge-zone-2', 'b-2-lounge-zone-3', 'b-2-lounge-zone-4'],\r\n        labs: [],\r\n        lift: ['b-2-elevator-up-1', 'b-2-elevator-up-2', 'b-2-elevator-down-1', 'b-2-elevator-down-2'],\r\n        stairs: ['b-2-staircase-center'],\r\n        wardrobe: [],\r\n        class: ['b-24', 'b-23'],\r\n        library: [],\r\n        dk: ['b-2-house-of-culture'],\r\n        restroom: ['b-2-toilet-w', 'b-2-toilet-m'],\r\n        food: [],\r\n        money: [],\r\n    }\r\n]\r\n\r\nconst colors = {\r\n    lounge: '#3c9b05',\r\n    labs: '#008787',\r\n    lift: '#0a1e64',\r\n    stairs: '#0a1e64',\r\n    wardrobe: '#0a1e64',\r\n    class: '#aa0a41',\r\n    library: '#8c00af',\r\n    dk: '#ff9100',\r\n    restroom: '#0a1e64',\r\n    food: '#0a1e64',\r\n    money: '#0a1e64',\r\n}\r\n\r\n//изменения цвета всех элементов по кнопке\r\nconst menuButtons = document.querySelectorAll('.menu-btn');\r\n\r\nfunction changeColourById(element, colour) {\r\n    for (let i = 0; i < element.length; i++) {\r\n        let room = document.getElementById(element[i]);\r\n        if(room.id == 'b-1-2-library-background' && room.style.fill == 'rgb(140, 0, 175)') {\r\n            room.style.fill = '#ffffff';\r\n        }\r\n        else room.style.fill = colour;\r\n    }\r\n}\r\n\r\nfunction chooseRoom(btn) {\r\n    let target = btn.id.slice(4);\r\n    btn.classList.add('menu-btn-active');\r\n    bBuilding.forEach(floor => changeColourById(floor[target], colors[target]));\r\n}\r\n\r\nfunction removeRoom(btn) {\r\n    let target = btn.id.slice(4);\r\n    btn.classList.remove('menu-btn-active');\r\n    if(!btn.classList.contains('menu-btn-tool')) btn.classList.add('hidden');\r\n    bBuilding.forEach(floor => changeColourById(floor[target], '#c0d5f2'));\r\n}\r\n\r\nmenuButtons.forEach(btn => btn.addEventListener('click', function () {\r\n    if (btn.classList.contains('menu-btn-active')) {\r\n        removeRoom(btn);\r\n    }\r\n    else {\r\n        menuButtons.forEach(function (menuBtn) {\r\n            if (menuBtn.classList.contains('menu-btn-active')) {\r\n                removeRoom(menuBtn);\r\n            }\r\n        })\r\n        chooseRoom(btn);\r\n    }\r\n}));\n\n//# sourceURL=webpack://map_uni/./src/js/choose-room.js?");

/***/ }),

/***/ "./src/js/map.js":
/*!***********************!*\
  !*** ./src/js/map.js ***!
  \***********************/
/***/ (() => {

eval("//клик по этажу переключение вид на выбранный этаж\r\nconst level = document.querySelectorAll('.b-floor-wrap'); //массив этажей\r\nconst levels = document.querySelector('.b-floors'); //wrapper всех этажей\r\nconst library = document.querySelector('.b-floor-1-2-svg'); //второй этаж библиотеки\r\n\r\nlevel.forEach(el => el.addEventListener('click', function () {\r\n    el.classList.add('floor-current');\r\n    level.forEach(levl => { if (!levl.classList.contains(['floor-current', 'hidden'])) levl.classList.add('hidden') });\r\n    if (el.classList.contains('b-floor-1-wrap')) firstFloor(el);\r\n    else levels.classList.add('floor-flatten');\r\n    btnArrow.classList.remove('hidden');\r\n}));\r\n\r\nfunction firstFloor(firstFloor) {\r\n    changeClass(library, 'hidden');\r\n    changeClass(levels, 'b-first-floor');\r\n    if (library.classList.contains('hidden')) levels.classList.add('floor-flatten');\r\n    else levels.classList.remove('floor-flatten');\r\n}\r\n\r\n\r\n//выбор этажа по кнопке\r\nconst btnFloor = document.querySelectorAll('.buttons-floor');\r\nconst btnArrow = document.querySelector('.btn-floor-back-wrap');\r\nconst btnHome = document.querySelector('.btn-home-wrap');\r\n\r\nbtnFloor.forEach(el => el.addEventListener('click', function () {\r\n    let index = el.id.slice(-1);\r\n    for(let levl of level){\r\n        if(levl.classList.contains('floor-current') && levl.id.slice(-1) == index) {\r\n            return;\r\n        }\r\n        if(levl.classList.contains('b-floor-1-wrap') && levl.classList.contains('floor-current')) {\r\n            library.classList.add('hidden');\r\n        }\r\n        levl.classList.remove('floor-current');\r\n    }\r\n    if (levels.classList.contains('hidden')) levels.classList.remove('hidden');\r\n    level.forEach(levl => { if (!levl.classList.contains(['floor-current', 'hidden'])) levl.classList.add('hidden') });\r\n    if (index == 1) firstFloor(level[index]);\r\n    else {\r\n        levels.classList.add('floor-flatten');\r\n        if (levels.classList.contains('b-first-floor')) levels.classList.remove('b-first-floor');\r\n    }\r\n    level[index].classList.add('floor-current');\r\n    btnArrow.classList.remove('hidden');\r\n}));\r\n\r\n//возвращение к общему виду этажей по кнопке стрелке\r\nbtnArrow.addEventListener('click', () => {\r\n    level.forEach(levl => levl.classList.remove('hidden'));\r\n    level.forEach(levl => {\r\n        if (levl.classList.contains('floor-current')) {\r\n            levl.classList.remove('floor-current');\r\n            if (levl.classList.contains('b-floor-1-wrap')) firstFloor(levl);\r\n        }\r\n    });\r\n    levels.classList.remove('floor-flatten');\r\n    if (levels.classList.contains('hidden')) levels.classList.remove('hidden');\r\n    if (levels.classList.contains('b-first-floor')) levels.classList.remove('b-first-floor');\r\n    if (!library.classList.contains('hidden')) library.classList.add('hidden');\r\n    btnArrow.classList.add('hidden');\r\n});\r\n\r\n//переход на вид всех корпусов по кнопке круг\r\nbtnHome.addEventListener('click', () => {\r\n    levels.classList.toggle('hidden'); //пока что просто все этажи пропадают\r\n    document.querySelector('.all-buildings').classList.toggle('hidden');\r\n});\r\n\r\nfunction changeClass(el, className) {\r\n    if (el.classList.contains(className)) el.classList.remove(className);\r\n    else el.classList.add(className);\r\n}\n\n//# sourceURL=webpack://map_uni/./src/js/map.js?");

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   lang: () => (/* binding */ lang)\n/* harmony export */ });\n/* harmony import */ var _data_lang_json5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/lang.json5 */ \"./src/data/lang.json5\");\n/* harmony import */ var _data_data_json5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/data.json5 */ \"./src/data/data.json5\");\nlet menu = document.querySelector('.menu');\r\nlet btnOpen = document.querySelector('.btn-to-open');\r\nlet map = document.querySelector('.map');\r\nlet menuButtons = document.querySelectorAll('.menu-btn');\r\nlet blockInfo = document.querySelector('.menu-content-info');\r\n\r\n\r\n\r\n\r\nlet lang = 'ru';\r\n\r\nbtnOpen.addEventListener('click', () => {\r\n    menu.classList.toggle('menu-active');\r\n    if (menu.classList.contains('menu-active')) map.style.transform = 'translateX(98px)';\r\n    else map.style.transform = '';\r\n})\r\n\r\nlet btnLang = document.querySelector('.btn-lang');\r\n\r\nbtnLang.addEventListener('click', () => {\r\n    if (lang == 'ru') {\r\n        lang = 'en';\r\n        btnLang.innerHTML = 'EN';\r\n    }\r\n    else {\r\n        lang = 'ru';\r\n        btnLang.innerHTML = 'RU';\r\n    }\r\n    menuButtons.forEach(btn => {\r\n        let typeOfBtn = btn.id.slice(4);\r\n        if (_data_lang_json5__WEBPACK_IMPORTED_MODULE_0__[typeOfBtn]) btn.innerHTML = _data_lang_json5__WEBPACK_IMPORTED_MODULE_0__[typeOfBtn][lang];\r\n        if (!btn.classList.contains('menu-btn-tool') && btn.classList.contains('menu-btn-active')) {\r\n            btn.innerHTML += '  ←';\r\n            blockInfo.style.animation = '';\r\n            blockInfo.innerHTML = '';\r\n            blockInfo.innerHTML = _data_data_json5__WEBPACK_IMPORTED_MODULE_1__[typeOfBtn].info[lang];\r\n            blockInfo.style.animation = 'showBlock 0.8s linear forwards';\r\n        }\r\n    });\r\n});\r\n\r\n\n\n//# sourceURL=webpack://map_uni/./src/js/menu.js?");

/***/ }),

/***/ "./src/js/show-info.js":
/*!*****************************!*\
  !*** ./src/js/show-info.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_data_json5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/data.json5 */ \"./src/data/data.json5\");\n/* harmony import */ var _data_lang_json5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/lang.json5 */ \"./src/data/lang.json5\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/js/menu.js\");\n\r\n\r\n\r\n\r\n\r\nlet menuButtons = document.querySelectorAll('.menu-btn');\r\nlet blockInfo = document.querySelector('.menu-content-info');\r\nlet menuImg = document.querySelector('.menu-content-img');\r\n\r\nmenuButtons.forEach(btn => btn.addEventListener('click', () => {\r\n    if(btn.classList.contains('menu-btn-tool')) return;\r\n    menuButtons.forEach(btn => {\r\n        if(!btn.classList.contains('menu-btn-active') && !btn.classList.contains('hidden')) btn.classList.add('hidden');\r\n        else {\r\n            btn.classList.remove('hidden');\r\n        }\r\n    });\r\n    if(btn.classList.contains('menu-btn-active')) {\r\n        let typeOfBtn = btn.id.slice(4);\r\n        menuImg.src = _data_data_json5__WEBPACK_IMPORTED_MODULE_0__[typeOfBtn].imglink;\r\n        blockInfo.innerHTML = _data_data_json5__WEBPACK_IMPORTED_MODULE_0__[typeOfBtn].info[_menu_js__WEBPACK_IMPORTED_MODULE_2__.lang];\r\n        blockInfo.style.animation = 'showBlock 0.8s linear forwards';\r\n        btn.innerHTML += '  ←';\r\n        menuImg.alt = _data_lang_json5__WEBPACK_IMPORTED_MODULE_1__[typeOfBtn][_menu_js__WEBPACK_IMPORTED_MODULE_2__.lang];\r\n        menuImg.style.animation = 'showBlock 0.8s linear forwards';\r\n    }\r\n    else {\r\n        menuImg.style.animation = '';\r\n        menuImg.src = _data_data_json5__WEBPACK_IMPORTED_MODULE_0__.imglink;\r\n        menuImg.alt = _data_data_json5__WEBPACK_IMPORTED_MODULE_0__.title;\r\n        blockInfo.innerHTML = '';\r\n        btn.innerHTML = btn.innerHTML.slice(0, btn.innerHTML.length - 3);\r\n        blockInfo.style.animation = '';\r\n    }\r\n}));\r\n\r\nlet imgLinks = [];\r\n\r\nfor (let key in _data_data_json5__WEBPACK_IMPORTED_MODULE_0__) {\r\n  if (_data_data_json5__WEBPACK_IMPORTED_MODULE_0__.hasOwnProperty(key)) {\r\n    if (typeof _data_data_json5__WEBPACK_IMPORTED_MODULE_0__[key] === 'object' && _data_data_json5__WEBPACK_IMPORTED_MODULE_0__[key].hasOwnProperty('imglink')) {\r\n      imgLinks.push(_data_data_json5__WEBPACK_IMPORTED_MODULE_0__[key].imglink);\r\n    }\r\n  }\r\n}\r\n\r\nlet images = new Array();\r\nfunction preload(links) {\r\n    for (let i = 0; i < links.length; i++) {\r\n        images[i] = new Image();\r\n        images[i].src = links[i];\r\n    }\r\n}\r\npreload(imgLinks);\n\n//# sourceURL=webpack://map_uni/./src/js/show-info.js?");

/***/ }),

/***/ "./src/data/data.json5":
/*!*****************************!*\
  !*** ./src/data/data.json5 ***!
  \*****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"title\":\"University MISIS\",\"imglink\":\"assets/images_html/misis-b-outside.jpg\",\"lounge\":{\"name\":\"Лаундж-зоны\",\"info\":{\"ru\":\"В Университете МИСИС представлено большое количество лаунж-зон, где студенты и сотрудники могут отдохнуть после занятий, встретиться с друзьями и знакомыми, а также продуктивно поработать. Зоны оборудованы комфортными диванами, креслами и другой мягкой мебелью. Кроме того, в лаунж-зонах проводятся различные мероприятия для студентов, сотрудников и гостей университета.\",\"en\":\"University MISIS  has a large number of lounge areas where students and staff can relax after classes, meet friends and acquaintances, as well as work productively. These areas are equipped with comfortable sofas, armchairs and other soft furniture. In addition, various events are held in the lounge areas for students, staff and guests of the university.\"},\"imglink\":\"assets/images_html/misis-stairs.jpg\"},\"labs\":{\"name\":\"Лаборатории\",\"info\":{\"ru\":\"Лаборатории Университета МИСИС доступны для студентов всех факультетов и направлений подготовки. Они являются неотъемлемой частью образовательного процесса в университете и помогают студентам глубже понимать теоретические концепции и применять их на практике.\",\"en\":\"The laboratories of University MISIS are available to students of all faculties and fields of study. They are an integral part of the educational process at the university and help students to better understand theoretical concepts and apply them in practice.\"},\"imglink\":\"assets/images_html/laboratory.jpeg\"},\"class\":{\"name\":\"Аудитории\",\"info\":{\"ru\":\"Аудитории Университета  МИСИС могут вместить большое количество студентов, что делает их идеальным местом для проведения лекций и семинаров по различным предметам. Здесь также проводятся различные мероприятия, такие как конференции, симпозиумы и презентации.\",\"en\":\"The Lecture Halls of University MISIS University can accommodate a large number of students, which makes them an ideal place for lectures and seminars on various subjects. It also hosts various events such as conferences, symposiums and presentations.\"},\"imglink\":\"assets/images_html/class.jpg\"},\"library\":{\"name\":\"Библиотека\",\"info\":{\"ru\":\"Библиотека в Университета МИСИС оснащена большой коллекцией книг, журналов и других учебных материалов, которые охватывают широкий спектр предметов. Здесь есть достаточно мест для сидения, индивидуальные кабинки для занятий и компьютерные рабочие места с доступом в Интернет.\",\"en\":\"The library at University MISIS is equipped with a large collection of books, magazines and other educational materials that cover a wide range of subjects. There are enough seats, individual study booths and computer workstations with Internet access.\"},\"imglink\":\"assets/images_html/library.JPG\"},\"dk\":{\"name\":\"Дом культуры\",\"info\":{\"ru\":\"Дом культуры является центром художественных и культурных мероприятий для студентов и сотрудников. Здесь проводится широкий спектр программ и мероприятий, включая концерты, выставки, театральные представления и показы фильмов. Управление культуры и молодежной политики Университета МИСИС постоянно проводит мероприятия для студентов, а также поддерживает работу множества творческих студий, где каждый может найти увлечение по душе и единомышленников.\",\"en\":\"The House of Culture is a center of artistic and cultural events for students and staff. It hosts a wide range of programs and events, including concerts, exhibitions, theatrical performances and film screenings. The Department of Culture and Youth Policy of MISIS University constantly holds events for students, and also supports the work of many creative studios, where everyone can find a hobby to their liking and like-minded people.\"},\"imglink\":\"assets/images_html/dk.jpg\"},\"canteen\":{\"name\":\"Столовая\",\"info\":{\"ru\":\"Столовая НИТУ МИСИС является одной из лучших столовых в Москве. Она предлагает разнообразное меню, включающее в себя блюда русской, европейской и азиатской кухни. Столовая имеет большое количество мест, что позволяет без труда разместить всех посетителей. Это идеальное место для здорового и вкусного питания студентов и персонала университета.\",\"en\":\"University MISIS canteen is one of the best canteens in Moscow. It offers a varied menu, including dishes of Russian, European and Asian cuisine. The dining room has a large number of seats, which allows you to easily accommodate all visitors. This is an ideal place for healthy and delicious meals for students and university staff.\"},\"imglink\":\"assets/images_html/misis-stairs.jpg\"}}');\n\n//# sourceURL=webpack://map_uni/./src/data/data.json5?");

/***/ }),

/***/ "./src/data/lang.json5":
/*!*****************************!*\
  !*** ./src/data/lang.json5 ***!
  \*****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"lounge\":{\"ru\":\"Лаунж зоны\",\"en\":\"Lounge areas\"},\"labs\":{\"ru\":\"Лаборатории\",\"en\":\"Laboratories\"},\"canteen\":{\"ru\":\"Столовая\",\"en\":\"Canteen\"},\"class\":{\"ru\":\"Аудитории\",\"en\":\"Lecture halls\"},\"dk\":{\"ru\":\"Дом культуры\",\"en\":\"House of Culture\"},\"library\":{\"ru\":\"Библиотека\",\"en\":\"Library\"}}');\n\n//# sourceURL=webpack://map_uni/./src/data/lang.json5?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;