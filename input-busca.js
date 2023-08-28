var searchBox = document.querySelector('.search-box');
var buttonBox = document.querySelector('.button-box');
var buttonClose = document.querySelector('.button-close');

buttonBox.addEventListener('click', () => {
    searchBox.classList.add('animacao1');
})

buttonClose.addEventListener('click', () => {
    searchBox.classList.remove('animacao1');
})