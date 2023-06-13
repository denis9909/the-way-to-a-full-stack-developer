let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.onclick = function () {
    toggle.classList.toggle('active');
    body.classList.toggle('light-theme');
}
// Burger
let nav = document.querySelector('nav');
let burger = document.querySelector('#burger');

burger.onclick = function () {
    nav.classList.toggle('active');
}
// Cookies
let cookies = document.querySelector('.cookies');
let acceptButton = document.querySelector('#accept');

acceptButton.onclick = function () {
    cookies.style.display = 'none';
}
// Arrow-up

// let arrowUp = document.querySelector('.arrow-up');
// if(window.scrollX == 10) {
//     arrowUp.style.display = 'block';
// }

// Developer
let column = document.querySelector('#column');
let row = document.querySelector('#row');
let courses = document.querySelector('.courses .box');

column.onclick = function () {
    courses.classList.remove('row');
}
row.onclick = function () {
    if (courses.classList.contains(row) != true) {
        courses.classList.add('row');
    }
}
