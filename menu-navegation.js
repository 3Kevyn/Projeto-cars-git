var menuToggle = document.querySelector('.toggle');
var navMenu = document.querySelector('.navigation-menu');

menuToggle.onclick = function()
{
    navMenu.classList.toggle('active')
    menuToggle.classList.toggle('active')
}

const list = document.getElementsByName('Logo');
function activeLink()
{
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active')
}
list.forEach((item) => 
item.addEventListener('click', activeLink))
