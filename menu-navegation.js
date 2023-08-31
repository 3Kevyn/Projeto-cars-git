var menuToggle = document.querySelector('.toggle');
var navMenu = document.querySelector('.navigation-menu');

menuToggle.onclick = function () {
    navMenu.classList.toggle('active')
    menuToggle.classList.toggle('active')
}

const list = document.getElementsByName('Logo');
function activeLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active')
}
list.forEach((item) =>
    item.addEventListener('click', activeLink))

    const brandIcons = document.querySelectorAll('.Car-Brands li');
    const carListItems = document.querySelectorAll('.Tds-Carros li');


    brandIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const selectedBrand = icon.getAttribute('data-category');
            
            brandIcons.forEach(icon => icon.classList.remove('active'));
            icon.classList.add('active');
            carListItems.forEach(car => {
                if (selectedBrand === 'all' || car.getAttribute('data-category') === selectedBrand) {
                    car.style.display = 'block';
                } else {
                    car.style.display = 'none';
                }
            });
        });
    });